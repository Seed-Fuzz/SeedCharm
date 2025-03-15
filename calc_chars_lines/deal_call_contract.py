import argparse
import json
import os
import re
import shutil
from slither import Slither
from solc_select import solc_select
from packaging import specifiers, version
import subprocess
from getSubContract import getSubContract


base_dir = "DAppSCAN/DAppSCAN-source/contracts/Ackee_Blockchain-Layer_Zero/LayerZero-a5b266aa54714035314cbe5e451b2ec0db81b552/contracts"


def get_solc_version(file_path):
    """
    从 Solidity 文件中提取 pragma 声明的版本
    """
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        match = re.search(r"pragma solidity\s+([^;]+);", content)
        if match:
            version = match.group(1).strip()
            return version
    return None

def install_solc_version(version_range):
    """
    根据版本范围（如 '>=0.5.0'）返回一个应该安装的 Solidity 版本。
    如果没有满足范围的版本，则安装一个默认版本（如最新稳定版本）。
    
    :param version_range: Solidity 版本范围（字符串，如 '>=0.5.0'）
    :return: 安装的 Solidity 版本（字符串）
    """
    if re.match(r"^\d+\.\d+\.\d+$", version_range):
        # 如果是具体的版本号，直接返回该版本
        recommended_version = version_range
    else:
        # 获取已安装的 Solidity 版本
        result = subprocess.run(["solc-select", "versions"], capture_output=True, text=True)
        installed_versions = []
        for line in result.stdout.splitlines():
            
            if line.strip().startswith("Available versions:"):
                continue
            version_match = re.match(r"(\d+\.\d+\.\d+)", line.strip())
            if version_match:
                installed_versions.append(version_match.group(1))
        
        # 解析版本范围
        spec = specifiers.SpecifierSet(version_range)
        
        # 检查是否有已安装的兼容版本
        compatible_versions = [v for v in installed_versions if version.parse(v) in spec]
        if compatible_versions:
            recommended_version = max(compatible_versions, key=lambda v: version.parse(v))
            solc_select.switch_global_version(recommended_version,False)
            # 如果有兼容版本，返回最新的兼容版本
            return recommended_version
        
        # 如果没有兼容版本，获取可安装的版本列表
        result = subprocess.run(["solc-select", "install"], capture_output=True, text=True)
        available_versions = []
        for line in result.stdout.splitlines():
            if line.strip().startswith("Available versions to install:"):
                continue
            available_versions.append(line.strip())
        
        # 从可安装的版本中选择满足范围的最新版本
        compatible_available_versions = [v for v in available_versions if version.parse(v) in spec]
        if compatible_available_versions:
            # 选择满足范围的最新版本
            recommended_version = max(compatible_available_versions, key=lambda v: version.parse(v))
        else:
            # 如果没有满足范围的版本，选择默认版本（最新稳定版本）
            print("No compatible version found for the range. Installing the latest stable version.")
            recommended_version = max(available_versions, key=lambda v: version.parse(v))
    
    # 安装推荐的版本
    try:
        print(f"Installing Solidity version {recommended_version}...")
        subprocess.run(["solc-select", "install", recommended_version], check=True)
        solc_select.switch_global_version(recommended_version,False)
        print(f"Solidity version {recommended_version} installed successfully.")
        return recommended_version
    except subprocess.CalledProcessError as e:
        print(f"Failed to install Solidity version {recommended_version}: {e}")
        # 如果安装失败，尝试安装另一个版本
        fallback_version = "0.8.0"  # 默认回退版本
        try:
            print(f"Attempting to install fallback version {fallback_version}...")
            subprocess.run(["solc-select", "install", fallback_version], check=True)
            solc_select.switch_global_version(recommended_version,False)
            print(f"Fallback Solidity version {fallback_version} installed successfully.")
            return fallback_version
        except subprocess.CalledProcessError as e:
            print(f"Failed to install fallback version {fallback_version}: {e}")
            raise RuntimeError("Unable to install any Solidity version.")


def set_solidity_correct_version(file_path):
    version = get_solc_version(file_path)
    if version:
        install_solc_version(version)
        
        


def get_all_sol(base_dir,sol_array):
    if(not os.path.isdir(base_dir)):
        return
    dirs = os.listdir(base_dir)
    for dir in dirs:
        if(dir.endswith('.sol') and (not os.path.isdir(os.path.join(base_dir,dir)))):
            sol_array.append(os.path.join(base_dir,dir))
        else:
            if not 'node_modules' in dir:
                get_all_sol(os.path.join(base_dir,dir),sol_array)



def deal_call_contract(base_dir):
   
    # set_solidity_correct_version(base_dir)
    slither = Slither(base_dir)  # 当前目录下的所有 Solidity 文件
    # 遍历所有合约
    for contract in slither.contracts:
        print(f"call_Contract: {contract.name}")
        
        # 遍历所有函数
        for function in contract.functions:
            print(f"  Function: {function.name}")
            
            # 遍历函数中的调用
            for internal_call in function.internal_calls:
                print(f"    -> Internal call: {internal_call.name}")
            
            for external_call in function.high_level_calls:
                contract_called, function_called = external_call
                print(f"    -> External call: {contract_called.name}.{function_called.name}")
            
            for low_level_call in function.low_level_calls:
                print(f"    -> Low-level call: {low_level_call}")

def get_inherited(slither,map1,inherits,contract_slither):
    if contract_slither.name not in map1.keys() and contract_slither.contract_kind == 'contract':
            map1[contract_slither.name] = 1
            inherits.append(contract_slither.name)
    else:
        return
    for inherited_contract in contract_slither.inheritance:
        get_inherited(slither,map1,inherits,inherited_contract)

def get_called(slither,map1,called,contract_slither):
    if contract_slither.name not in map1.keys()  and contract_slither.contract_kind != 'library':
            # print(contract_slither.contract_kind)
            map1[contract_slither.name] = 1
            called.append(contract_slither.name)
    else:
        return

    FUNCTIONS_NEDD_CONSIDERED = []
    FUNCTIONS_NEDD_CONSIDERED.append(contract_slither.constructor)
    FUNCTIONS_NEDD_CONSIDERED += contract_slither.functions

    for function in FUNCTIONS_NEDD_CONSIDERED: 
        if function :
            for external_call in function.high_level_calls:
                contract_called, function_called = external_call
                get_called(slither,map1,called,contract_called)
    return None

def operate_inherit(slither,needs_to_deploy,inherits):
    for contract in slither.contracts: 
        # print(f"inherit_Contract: {contract.name}")     
        if contract.name in needs_to_deploy:
            ##本合约的名字不应该在其他待部署合约的inherit树上：
            flag = 1 ##合约名字在树上_标志
            for inherit in inherits:
                if contract.name in inherit:
                    flag = 0
                    break
            if flag == 1: ##维持标志
                map_inherited = {}
                inherit = []
                get_inherited(slither,map_inherited,inherit,contract)
                inherits.append(inherit)

def operate_called(slither,needs_to_deploy,calls):
    for contract in slither.contracts: 
        # print(f"call_Contract: {contract.name}")     
        if contract.name in needs_to_deploy:
            ##本合约的名字不应该在其他待部署合约的call树上：
            flag = 1 ##合约名字在树上_标志
            for call in calls:
                if contract.name in call:
                    flag = 0
                    break
            if flag == 1: ##维持标志 
                map_called = {}
                call = []
                get_called(slither,map_called,call,contract)
                calls.append(call)


def deal_error(path):
    with open("/home/mingyue/sub_contract_content/error.txt",'a', encoding='utf-8') as file:
        file.write(path+'\n')
        file.close()
    return None

def rm_node(path):
    # 删除 node_modules 目录
    node_modules_path = os.path.join(path, "node_modules")
    if os.path.exists(node_modules_path):
        print(f"删除路径 {path} 中的 node_modules 目录...")
        shutil.rmtree(node_modules_path)
    else:
        print(f"路径 {path} 中没有 node_modules 目录")
        deal_error(f"路径 {path} 中没有 node_modules 目录")

    print(f"路径 {path} 处理完成\n")

def install_node(path):
    print(f"在路径 {path} 中运行 npm install --legacy-peer-deps...")
    if os.path.exists(os.path.join(path,'yarn.lock')):
        try:
            subprocess.run(["yarn", "install"], check=True)
            return True
        except subprocess.CalledProcessError as e: 
            try:
                subprocess.run(["npm", "install" ,"--legacy-peer-deps"], check=True)
                return True
            except subprocess.CalledProcessError as e:
                try:
                    subprocess.run(["npm", "install" ,"hardhat"], check=True)
                    return True
                except subprocess.CalledProcessError as e:
                    print(f"在路径 {path} 中运行 npm install --legacy-peer-deps 失败: {e}") 
                    return False

def slither_code(path):
    print(f"在路径 {path} 中运行 slither {path} ...")
    try:
        subprocess.run(["slither", path], check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"在路径 {path} 中运行 slither {path} 失败: {e}") 
        return False

def output(path,called,content,outputDir):
    dict1 = {'file_path':path,'external_functions':called,'new_contract':content}
    bin_array = []
    # for i in range(len(needs_to_deploy)):
    #     bin_array.append({'bin':needs_bin[i],'deploy_name':needs_to_deploy[i]})
    dict1['bin'] = bin_array
    pattern = r'/(\d+)(/|$)'
    match = re.search(pattern, path)
    if match:
        print(f"路径: {path}")
        print(f"提取的数字: {match.group(1)}")
        with open(os.path.join(outputDir,str(match.group(1)))+"new"+'.json','w') as file:
            json.dump(dict1, file, indent=4)
    else:
        deal_error(f"提取{path}路径错误")

def deal_mainContracts(path):
    mainContracts_path = os.path.join(path,'deploy.txt')
    if not os.path.exists(mainContracts_path):
        print(f"主文件存储deploy.txt不存在: {mainContracts_path}")
        deal_error(f"主文件存储deploy.txt不存在: {mainContracts_path}")
        return [],[]
    with open(mainContracts_path,'r') as file:
        ls = file.readlines() 
    solc_array = []
    get_all_sol(path,solc_array)
    sol_map = {}
    for solc in solc_array:
        solcs = solc.split('/')
        sol_map[solcs[-1]] = solc
    after_filtered = []
    for line in ls: 
        file_name = line.strip()
        if not file_name.endswith('.sol'):
            file_name += '.sol'  
        if file_name in sol_map.keys():
            after_filtered.append(sol_map[file_name])
    return after_filtered,solc_array

def get_contract_content(contract): 
    if(contract.contract_kind == 'library' or contract.contract_kind == 'interface'):
        return ""
    contract_path = contract.source_mapping.filename.absolute
    with open(contract_path,'r') as file:
        content_lines = file.readlines() 
    lines = contract.source_mapping.lines
    str1 = ""
    for numberLine in lines:
        try:
            str1 += content_lines[numberLine - 1]
        except Exception as e:
            # deal_error("read contract failed " + contract.name + " "+contract_path)
            return str1
    return str1

def deal_content(calls,inherits,slither,needs_to_deploy):
    res = needs_to_deploy
    for call in calls:
        res += call
    for inherit in inherits:
        res += inherit
    contract_map = {}
    for contract in slither.contracts:
        contract_map[contract.name] = contract
    res_content = ""
    res = list(set(res))
    for contract_name in res:
        contract = contract_map[contract_name]
        if 'node_modules' in contract.source_mapping.filename.absolute:
            continue 
        # print(len(contract.source_mapping.content))
        str1 = get_contract_content(contract)
        res_content += str1
    return res_content

def deal_contract_split(needs_to_deploy,slither):
    res = []
    for contract in needs_to_deploy:
        r = getSubContract(contract,slither)
        res += r
    return res

def calc_contract_split(res):
    length = 0
    for ele in res:
        if('newContract' in ele.keys()):
            length += len(ele['newContract'])
    return length

def output_record_kind_two(content):
    with open("/home/mingyue/sub_contract_content/kind_two1.txt",'a', encoding='utf-8') as file: 
        file.write(content+'\n')
        file.flush()  # 确保数据写入磁盘
        file.close()
    return 


def calc_lines(text):
    # 计算行数
    num_lines = text.count('\n') + 1  # 最后一行可能没有换行符，所以需要加 1
    # print("行数:", num_lines)
    return num_lines

def calc_solc_array(solc_array):
    length = 0
    lines = 0
    for solc_path in solc_array:
        with open(solc_path,'r') as file:
            content = file.read()
            length += len(content)
            lines += calc_lines(content)
    return length,lines

 
if __name__ == "__main__":  
    # test()
    messages = []
    parser = argparse.ArgumentParser(description="A script to process a file.")
    # 添加 -filename 参数
    parser.add_argument("-datasetPath", type=str, required=True, help="The dataset path")
    parser.add_argument("-dataset", type=str, required=True, help="The dataset")
    # 解析参数
    args = parser.parse_args() 
    dataset = args.dataset
    ## D1:Smartian D2:Web3Bugs
    if dataset != "D1" and dataset != "D2":
        print("Wrong dataset")
        exit(0)
    if dataset == "D1":
        dataset = "Smartian"
    elif dataset == "D2":
        dataset = "Web3Bugs"
    prompt_base = 6084
    datasetPath = args.datasetPath  
    datasetPath = os.path.abspath(datasetPath)
    deepseek_limit = 192000    
    path = datasetPath
    # 检查路径是否存在
    if not os.path.exists(path):
        print(f"路径不存在: {path}")
        deal_error(f"路径不存在: {path}")
        exit(0) 
    #读取目标项目的主文件：
    after_filter = []
    solc_array = []
    if dataset == "Smartian":
        after_filter = [path]
        solc_array = [path]
    elif dataset == "Web3Bugs":
        after_filter, solc_array = deal_mainContracts(path)
          # 切换到目标路径
        os.chdir(path)
          ## 安装node_modules
        slither_flag = False
        slither = None
        if os.path.exists(os.path.join(path,'node_modules')):
            try:
                slither = Slither(path)  
                slither_flag = True
            except Exception as e: 
                rm_node(path)
        if not slither_flag:   
            flag = install_node(path)
            if flag == False:
                deal_error(f"项目npm安装错误 {path}")
                exit(0)
            try:
                slither = Slither(path)  
            except Exception as e:
                deal_error(f"slither编译出错 {path}")
                exit(0)   

    all_solc_length,all_solc_lines = calc_solc_array(solc_array)

    if len(after_filter) == 0:
        print(f"deploy.txt可能存在问题1! {path}")
        deal_error(f"deploy.txt可能存在问题! {path}")
        exit(0) 
    try:
        slither = Slither(path)  
    except Exception as e:
        deal_error(f"slither编译出错 {path}")
        exit(0)  
    ##先制作一个文件的contracts_map
    contacts_map = {}
    effective_deploys = 0
    for contract in slither.contracts:
        abs_path = contract.source_mapping.filename.absolute
        if abs_path not in contacts_map.keys():
            contacts_map[abs_path] = []
            contacts_map[abs_path].append(contract)
            effective_deploys += 1
        else:
            contacts_map[abs_path].append(contract)
            effective_deploys += 1
   
    needs_to_deploy = []
    needs_bin = []
    for filter1 in after_filter:
        if filter1 in contacts_map.keys():
            for contract in contacts_map[filter1]:
                needs_to_deploy.append(contract.name)
            # needs_bin.append(contract.compilation_unit.crytic_compile.compilation_units[contract.compilation_unit.filename.absolute].bin(contract.name))

    if len(needs_to_deploy) == 0:
        print(f"deploy.txt可能存在问题111! {after_filter}")
        deal_error(f"deploy.txt可能存在问题! {path}")
        exit(0)
    ## start_to operate
    inherits = []
    calls = [] 
    operate_inherit(slither,needs_to_deploy,inherits)
    operate_called(slither,needs_to_deploy,calls) 
    content = deal_content(calls,inherits,slither,needs_to_deploy)
    flag = True
    if len(content) + prompt_base >= deepseek_limit:
        res = deal_contract_split(needs_to_deploy,slither)
        length = calc_contract_split(res)
        flag = False
    length = len(content) #+ prompt_base
    print("aRC       bRC     aRL     bRL      subset?")
    if flag:
        print(str(length) + "    " + str(all_solc_length) + '    ' + str(calc_lines(content)) + '    ' + str(all_solc_lines) + '    no_subset') 
    else:
        print(str(length) + "    " + str(all_solc_length) + '    ' + str(calc_lines(content)) + '    ' + str(all_solc_lines) + '    subset') 
    # output(path,calls,content,os.path.join(base_dir,'output')) 
    ##卸载node_modules
    # slither_code(path)
    # rm_node(path)

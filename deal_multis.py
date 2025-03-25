import subprocess
from mainControl import mainControl

# for Web3Bugs,which can generate the seed/log 
# you should know that, when you use this file, you must change the mainControl into the function

with open("./tmp_res_arti.txt",'r') as file:
    lines = file.readlines()
for line in lines:
    line = line.strip()
    arr = line.split(',')
    contractName = arr[0]
    projectName = arr[1]
    fileName = arr[2]
    project_path = arr[3]
    datasetBaseDir = "/home/mingyue/GPTSmart_smartian/dataset_project"
    mainControl(datasetBaseDir,contractName,projectName,"output",120,"smartian",fileName,project_path)
    # cmd = f"python mainControl.py -mainContract {contractName} -projectName {projectName} -outputDir output -timeLimit 3600 -fuzzer smartian -datasetBaseDir {datasetBaseDir} -fileName {fileName} -projectPath {project_path}"
    # # 运行命令
    # try:
    #     # 使用 subprocess.run 运行命令
    #     result = subprocess.run(cmd, shell=True, check=True, text=True, capture_output=True)
        
    #     # 打印命令的输出
    #     print("Command output:")
    #     print(result.stdout)
        
    #     # 如果命令失败，打印错误信息
    #     if result.returncode != 0:
    #         print("Command failed with error:")
    #         print(result.stderr)
    # except subprocess.CalledProcessError as e:
    #     # 捕获异常并打印错误信息
    #     print(f"Command failed with error: {e.stderr}")
    # except Exception as e:
    #     # 捕获其他异常
    #     print(f"An error occurred: {e}")
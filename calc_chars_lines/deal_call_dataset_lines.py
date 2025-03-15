import argparse
import os

def calc_lines(text):
    # 计算行数
    num_lines = text.count('\n') + 1  # 最后一行可能没有换行符，所以需要加 1
    # print("行数:", num_lines)
    return num_lines

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


def deal_call_dataset_lines(dataset):
    # base_dir = "/home/mingyue/sub_contract_content/Web3Bugs/contracts"
    # base_dir = '/home/mingyue/Smartian-Artifact/benchmarks/B3/sol'
    file = ""
    if dataset == "D1":
        dataset = "Smartian"
    elif dataset == "D2":
        dataset = "Web3Bugs"
    if dataset == "Web3Bugs":
        file = "./kind_two.txt"
    elif dataset == "Smartian":
        file = "./kind_two1.txt"
    else:
        print("Wrong dataset!")
        exit(0)
    content_cnt = 0
    lines_cnt = 0
    file_cnt = 0
    with open(file,'r') as file:
        lines = file.readlines()
    # lines = []
    for line in lines: 
        arr = line.strip().split(',')
        if dataset == "Web3Bugs":
            path = arr[0]
            sol_array = []
            get_all_sol(path,sol_array)
        else:
        # path = os.path.join(base_dir,dir) 
            path = arr[0]
            sol_array = [path] 
        for solc in sol_array:
            with open(solc,'r') as file:
                content = file.read()
            num_lines = calc_lines(content)
            lines_cnt += num_lines
            content_cnt += len(content)
        file_cnt += len(sol_array)
        # lines.append(lines_cnt)
    print("content lines files")
    print(content_cnt,lines_cnt,file_cnt)

if __name__ == "__main__":
    # test() 
    parser = argparse.ArgumentParser(description="A script to process a file.")
    # 添加 -filename 参数
    parser.add_argument("-dataset", type=str, required=True, help="The name of the file to process")
    
    # 解析参数
    args = parser.parse_args()
    deal_call_dataset_lines(args.dataset)

## Web3Bugs: 14171465 383590 3264
## Smartian: 9297606 273752 500

import argparse
import os
import json
from deal_call_contract import get_all_sol
from deal_call_contract import calc_lines

if __name__ == "__main__":  
    # test()
    messages = []
    parser = argparse.ArgumentParser(description="A script to process a file.")
    # 添加 -filename 参数 
    parser.add_argument("-dataset", type=str, required=True, help="The dataset")
    args = parser.parse_args()
    after_sum = 0
    before_sum = 0
    after_lines = 0
    before_lines = 0
    if args.dataset == "D2":
        with open("./kind_two.txt",'r') as file:
            lines = file.readlines()
        
        for line in lines: 
            arr = line.strip().split(',')
            after = int(arr[1])
            before = int(arr[2]) 
            ## this log has add the prompt length
            ## so we have to substract it here
            after_sum += (after - 6218)
            before_sum += (before - 6218)  
        new_line = []
        src_line = []
        base_dir = "../Web3Bugs/output" 
        all_paths = []  
        for dir1 in os.listdir(base_dir):
            # if '61' in dir1:  This is the huge project that can not be passed into the llm
            #     continue
            path = os.path.join(base_dir,dir1)
            with open(path,'r') as file:
                json_content = json.load(file)
            txt = json_content['new_contract']
            lines1 = calc_lines(txt)
            abs_path = json_content['file_path']
            solc_array = []
            get_all_sol(abs_path,solc_array)
            num_lines = 0
            for path1 in solc_array:
                with open(path1,'r') as file:
                    tmp_content = file.read()
                num_lines += calc_lines(tmp_content)
            new_line.append(lines1)
            src_line.append(num_lines)    
        print("aRC          bRC         aRL         bRL")
        print(after_sum, "   ",before_sum,"   ",sum(new_line),"    ",sum(src_line)) 
    elif args.dataset == "D1": 
        with open("./kind_two1.txt",'r') as file:
            lines = file.readlines()
        
        for line in lines: 
            arr = line.strip().split(',')
            after = int(arr[1])
            before = int(arr[2]) 
            after_l = int(arr[3])
            before_l = int(arr[4])
            ## this log has add the prompt length
            ## so we have to substract it here
            after_sum += (after)
            before_sum += (before)  
            after_lines += after_l
            before_lines += before_l
        print("aRC          bRC         aRL         bRL")
        print(after_sum, "   ",before_sum,"   ",after_lines,"    ",before_lines) 

# $ python deal_before_after.py -dataset D2
# beforeCR    afterCR    beforeLR    afterLR
# 14171465     3550317     383590      93620

# $ python deal_before_after.py -dataset D1
# beforeCR    afterCR    beforeLR    afterLR
# 9297606     8072665     273752      229952
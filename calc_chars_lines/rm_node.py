import os
import shutil

def rm_node(path):
    # 删除 node_modules 目录
    node_modules_path = os.path.join(path, "node_modules")
    if os.path.exists(node_modules_path):
        print(f"删除路径 {path} 中的 node_modules 目录...")
        shutil.rmtree(node_modules_path)
    else:
        print(f"路径 {path} 中没有 node_modules 目录") 

    print(f"路径 {path} 处理完成\n")

with open("./kind_two.txt",'r') as file:
    lines = file.readlines()



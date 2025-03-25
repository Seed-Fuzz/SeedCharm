# 🎯SeedCharm: Intelligent LLM-driven Seed Generation for Smart Contract Fuzzing 
## 👋Introduction
#### Hi! Welcome to this place! This repository provides the code and the data used in our paper. It contains  
    1. chars verifying
    2. reduction verifying
    3. LSeedSmartian's coverage/bugs count 

## 😺Setup
### 🧐Without Docker
#### python requirement:
    1. python3.8.20
    2. python requirements: "./setup/requirements.txt"
#### one button setup:
    ```bash
        $ cd setup
        $ ./install.sh
    ```  
### 😎With Docker
#### You can use the Smartian-Artifact to verify our result,the `Dockerfile` / `run_SeedCharm.sh`/ `run_replayer.sh` in the `setup` are the files that you can use to add into this repository.
    ```bash
        $ git clone https://github.com/SoftSec-KAIST/Smartian-Artifact.git
    ```  
## 🏃‍♀️‍➡️Verifying the instruction/branch coverage or the vulnerability:
### 🎀Method1: mainControl.py offer the procedure about how llm generate seed. 
#### 💡tips: You must make sure that you execute the command in the project path, or the relative seed directory in the `Smartian` will be wrong. To avoid exception/error, just follow the command below.
    ```bash
        $ mkdir output
        $ python3 ./mainControl.py \
            -filename $1 -datasetName $2 -datasetPath $3 -outputDir ./output -timeLimit $4 -fuzzer $5
    ```  

### 🎁Method2: use the llm generated seed
#### In order to avoid the randomness, we provide the seed of `D1` that the llm generated, which has already be transferred into the Smartian seed format.The seeds are in the directory `seed`. And the `seed_withoutR` in the `dataset_project` is the `seed` of `D2` without reduction, the `seed_withR` is the `seed` of `D2` with reduction. NOTICE: When you want to use seed we provide, you should put the directory in the `dataset_project`, and rename it to `seed`.
#### If you want to generate the seed for your own dataset, you should first generate the `normalFuncs` in the Smartian format. You can referance the `normals.py` in the `Smartian` directory and then put the files in the `dataset_roject/normalFuncs` directory.

## ⛄Verifying the chars or lines of our dataset 
    ```bash
        $ cd calc_chars_lines
        $ python deal_call_dataset_lines.py -dataset D1/D2
    ```  
## 🥳Verifying the chars and lines before and after reduction
### 🚀If you just want to check one data, where datasetPath is the file/project path and dataset is D1/D2
    ```bash
        $ cd calc_chars_lines
        $ python deal_call_contract.py -dataset D1/D2 -datasetPath file/project_path
    ```  
### 👩‍💻Example:
#### Input one command like this, and all availale project paths in D2 are recorded in the "./kind_two.txt"
    ```bash
        $ cd calc_chars_lines
        $ python deal_call_contract.py -dataset D1 -datasetPath ./sol/0x0ac10bf0342fa2724e93d250751186ba5b659303.sol
    ``` 
#### You will see the result like this, where aRC represents "after reduction content length",bRC represents "before reduction content length", aRL represents "after retuduction content length"

    ```bash
        aRC       bRC     aRL     bRL      subset?
        32006    36792    959    1090    no_subset
    ```  
### 🛸if you want to check all of the data, just use our logs.

    ```bash
        $ cd calc_chars_lines
        $ python deal_before_after.py -dataset D1 
    ``` 
#### You will see the result like:
    ```bash
        aRC          bRC         aRL         bRL
        8072665     9297606     229952      273752
    ``` 
## Files in Web3Bugs running on Smartian👈
#### Each file in the Web3Bugs that can be put into the Smartian could be found in this log.
    ./calc_chars_lines/Web3Bugs_file.txt

## 👉Result :
#### We have also provide the example result which the llm generates in the directory `examples`.
 
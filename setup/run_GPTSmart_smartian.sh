#!/bin/bash

# Arg1 : Time limit
# Arg2 : Source file
# Arg3 : Bytecode file
# Arg4 : ABI file
# Arg5 : Main contract name
# Arg6 : Optional argument to pass
 
cd /home/test/tools/GPTSmart_smartian
solc-select install 0.4.26
solc-select use 0.4.26
mkdir -p /home/test/output
python3 /home/test/tools/GPTSmart_smartian/mainControl.py \
  -filename $2 -datasetName B3 -datasetPath /home/test/tools/GPTSmart_smartian/B3 -outputDir /home/test/output -timeLimit $1 -fuzzer smartian \
  > /home/test/output/log.txt 2>&1

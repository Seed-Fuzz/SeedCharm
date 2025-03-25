#!/bin/bash

# Arg1 : Time limit
# Arg2 : Source file
# Arg3 : Bytecode file
# Arg4 : ABI file
# Arg5 : Main contract name
# Arg6 : Optional argument to pass
 
cd /home/test/tools/SeedCharm
solc-select install 0.4.26
solc-select use 0.4.26
mkdir -p /home/test/output
python3 /home/test/tools/SeedCharm/mainControl.py \
  -filename $2 -datasetName B3 -datasetPath /home/test/tools/SeedCharm/B3 -outputDir /home/test/output -timeLimit $1 -fuzzer smartian \
  > /home/test/output/log.txt 2>&1


# notice:if you want to use the seed directly, you should use the below script:

# mkdir -p /home/test/output
# dotnet /home/test/tools/SeedCharm/src/bin/Debug/net8.0/Smartian.dll fuzz \
#   --useothersoracle -t $1 -p $3 -a $4 -v 1 $6 -o /home/test/output \
#   > /home/test/output/log.txt 2>&1

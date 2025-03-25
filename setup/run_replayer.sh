#!/bin/bash


# Arg1 : Tool name
# Arg2 : Bytecode file
# Arg3 : ABI file
# Arg4 : Main contract name
# Arg5 : Time interval for coverage logging

OUTDIR=/home/test/output
SCRIPTDIR=/home/test/scripts
REPLAYER=/home/test/tools/Smartian/build/Smartian
SeedCharm_REPLAYER=/home/test/tools/SeedCharm/Smartian/src/bin/Debug/net8.0/Smartian 
 
#$REPLAYER replay -p $2 -i $OUTDIR/testcase -t $5 > $OUTDIR/cov.txt 2>&1
if [ $1 = smartian ]; then
    $REPLAYER replay -p $2 -i $OUTDIR/testcase -t $5 > $OUTDIR/cov.txt 2>&1
    $REPLAYER replay -p $2 -i $OUTDIR/testcase > $OUTDIR/with_dfeed.txt 2>&1
    $REPLAYER replay -p $2 -i $OUTDIR/testcase --noddfa > $OUTDIR/without_dfeed.txt 2>&1
elif [ $1 = SeedCharm ]; then
    # 在这里处理另一个条件
    $SeedCharm_REPLAYER replay -p $2 -i $OUTDIR/testcase -t $5 > $OUTDIR/cov.txt 2>&1
    $SeedCharm_REPLAYER replay -p $2 -i $OUTDIR/testcase > $OUTDIR/with_dfeed.txt 2>&1
    $SeedCharm_REPLAYER replay -p $2 -i $OUTDIR/testcase --noddfa > $OUTDIR/without_dfeed.txt 2>&1 
fi

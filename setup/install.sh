#!/bin/bash

# 设置非交互式环境变量
export DEBIAN_FRONTEND="noninteractive"

# 更新包列表并安装依赖
sudo apt-get update && \
sudo apt-get -yy install \
  wget apt-transport-https git unzip \
  build-essential libtool libtool-bin gdb \
  automake autoconf bison flex python sudo vim \
  curl software-properties-common \
  python3 python3-pip libssl-dev pkg-config libffi-dev \
  libsqlite3-0 libsqlite3-dev apt-utils locales \
  python-pip-whl libleveldb-dev python3-setuptools \
  python3-dev pandoc python3-venv \
  libgmp-dev libbz2-dev libreadline-dev libsecp256k1-dev locales-all

# 安装 Node.js 和 npm
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - && \
sudo apt-get install -y nodejs

# 生成 locales
sudo locale-gen en_US.UTF-8

# 更新 pip
python3 -m pip install -U pip

# 安装 Python 依赖
if [ -f "requirements.txt" ]; then
  pip install -r requirements.txt
else
  echo "requirements.txt not found. Skipping Python dependencies installation."
fi

# 安装 .NET SDK 8.0
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb && \
sudo dpkg -i packages-microsoft-prod.deb && \
sudo apt-get update && sudo apt-get -yy install dotnet-sdk-8.0 && \
rm -f packages-microsoft-prod.deb

# 设置 .NET 环境变量
export DOTNET_CLI_TELEMETRY_OPTOUT=1

# 安装 Solidity 编译器
sudo wget -O /usr/bin/solc https://github.com/ethereum/solidity/releases/download/v0.4.25/solc-static-linux
sudo chmod +x /usr/bin/solc

# 设置 npm 镜像
npm config set registry https://registry.npmmirror.com

echo "Installation completed!"
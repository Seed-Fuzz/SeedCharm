import matplotlib.pyplot as plt
import numpy as np

aa=[0, 104011, 110040, 110492, 112151, 112614, 112689, 112703, 112703, 112704, 112705, 112705, 112778, 112778, 112778, 112778, 112778, 112785, 112785, 112785, 112785, 112785, 112813, 112813, 112815, 112815, 112815, 112815, 112815, 112815, 112815]

bb=[0, 103080, 103984, 105227, 106616, 106927, 106950, 107027, 107066, 107066, 107074, 107074, 107074, 107074, 107074, 107124, 107245, 107245, 107245, 107245, 107245, 107245, 107245, 107245, 107245, 107255, 107255, 107255, 107256, 107256, 107256]
plt.rcParams['font.family'] = 'Times New Roman'

# 示例数据
x = np.linspace(0, 30,31)  # X 轴数据（0 到 10，100 个点）
y1 = aa[0:31]               # 第一条曲线：正弦函数
y2 = bb[0:31]              # 第二条曲线：余弦函数
print(y1,y2)
# 创建图表
plt.figure(figsize=(8, 3))

# 绘制第一条曲线
plt.plot(x, y1, label='with reduction', color='blue', linestyle='-', linewidth=2)

# 绘制第二条曲线
plt.plot(x, y2, label='without reduction', color='red', linestyle='--', linewidth=2)
plt.ticklabel_format(axis='y', style='sci', scilimits=(0, 0))
# 设置标题和标签
# plt.title('Instruction coverage with and without reduction')
plt.xlabel('Time(min)')
plt.ylabel('Instruction Coverage')

# 添加图例
plt.legend(fontsize=14)

# 显示网格
plt.grid(True)

# 显示图表
# plt.show()
plt.savefig("web3bugs.png", dpi=600, bbox_inches='tight')
plt.savefig('web3bugs.pdf', format='pdf', bbox_inches='tight', dpi=600)
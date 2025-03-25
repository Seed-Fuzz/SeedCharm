import matplotlib.pyplot as plt
import numpy as np

xx=[0, 2176320, 2204759, 2214378, 2219898, 2235902, 2242440, 2245337, 2247826, 2249840, 2252125, 2254783, 2255842, 2256746, 2262853, 2263436, 2264693, 2265729, 2266032, 2266734, 2267716, 2268413, 2268975, 2269799, 2270036, 2270481, 2270735, 2271323, 2272544, 2272812, 2272943]
yy=[0, 1853308, 1880349, 1892057, 1899856, 1903814, 1906210, 1909435, 1910955, 1913810, 1917584, 1918690, 1920431, 1921557, 1922127, 1922774, 1923270, 1923878, 1924647, 1924917, 1925014, 1926134, 1926679, 1927286, 1927338, 1927529, 1928450, 1929099, 1929468, 1929471, 1930016]
zz=[0, 1822230, 1942140, 1950529, 1956146, 1960564, 1963312, 1966190, 1967374, 1968025, 1968701, 1971032, 1972464, 1973371, 1973945, 1974200, 1975205, 1975877, 1976149, 1976522, 1976592, 1977165, 1977614, 1977886, 1978316, 1978462, 1978605, 1978753, 1978890, 1978931, 1978931]
xx1=[0, 135954, 137977, 138572, 138983, 139983, 140329, 140511, 140660, 140802, 140946, 141091, 141179, 141251, 141517, 141586, 141660, 141746, 141762, 141800, 141867, 141909, 141940, 141964, 141986, 142029, 142057, 142092, 142165, 142175, 142198]
yy1=[0, 117886, 119944, 120721, 121168, 121399, 121568, 121836, 121929, 122094, 122309, 122374, 122448, 122520, 122572, 122613, 122647, 122683, 122737, 122749, 122762, 122798, 122836, 122869, 122881, 122901, 122939, 122973, 122994, 122995, 123026]
zz1=[0, 116026, 122645, 123199, 123651, 123989, 124157, 124304, 124405, 124459, 124494, 124582, 124666, 124713, 124775, 124800, 124868, 124915, 124937, 124967, 124977, 125000, 125024, 125041, 125064, 125073, 125084, 125105, 125110, 125119, 125119]


break_ac = '#F5A10B' #(255/255,153/255,3/255)
accu_ap =  (101/255,128/255,177/255) #'#0436C4'
accu_ac =  (255/255,158/255,2/255) #'#F84108' 
break_ap = (149/255,175/255,72/255) #(2/255,48/255,71/255)
alpha1 = 1
alpha2 = 1
alpha3 = 1


x = np.arange(0, 31) 

plt.rcParams['font.family'] = 'Times New Roman'
# 创建图形
plt.figure(figsize=(12,3))
# Fixing random state for reproducibility
np.random.seed(19680801)

dt = 0.01
t = np.arange(0, 30, dt)
nse1 = np.random.randn(len(t))                 # white noise 1
nse2 = np.random.randn(len(t))                 # white noise 2

# Two signals with a coherent part at 10 Hz and a random part
s1 = np.sin(2 * np.pi * 10 * t) + nse1
s2 = np.sin(2 * np.pi * 10 * t) + nse2

fig, axs = plt.subplots(2, 1)
plt.subplots_adjust(hspace=0.4)

# axs[0].set_xlim(0, 3605)
axs[0].set_xticks(np.arange(0, 31, 5))

axs[0].plot(x, xx, label="LSeedSmartian", linestyle="solid", color=accu_ap,alpha = alpha1)

# 绘制第二条曲线
axs[0].plot(x, yy, label="Smartian", linestyle="dashed", color=accu_ac,alpha = alpha2)
axs[0].plot(x, zz, label="LLMSmartian", linestyle='dashdot', color=break_ap,alpha = alpha3)


axs[0].set_xlabel('Time (min)')
axs[0].set_ylabel('Instruction Coverage')
axs[0].legend(loc='lower right')
axs[0].grid(True)

axs[1].plot(x, xx1, label="LSeedSmartian", linestyle="solid", color=accu_ap,alpha = alpha1)

# 绘制第二条曲线
axs[1].plot(x, yy1, label="Smartian", linestyle="dashed", color=accu_ac,alpha = alpha2)
axs[1].plot(x, zz1, label="LLMSmartian", linestyle='dashdot', color=break_ap,alpha = alpha3)



axs[1].set_xlabel('Time (min)')
axs[1].set_ylabel('Branch Coverage')
axs[1].legend(loc='lower right')
axs[1].grid(True)

axs[1].ticklabel_format(axis='y', style='sci', scilimits=(0, 0))
#plt.show()

plt.savefig("cov.png", dpi=600, bbox_inches='tight')
plt.savefig('cov.pdf', format='pdf', bbox_inches='tight', dpi=600)
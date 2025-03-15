def deal_time():
    with open("log_cost.txt",'r') as file:
        lines = file.readlines()
    time_co = 0
    for line in lines:
        line = line.strip()
        arr = line.split(',')
        time_co += float(arr[2])
    print(time_co)
deal_time()
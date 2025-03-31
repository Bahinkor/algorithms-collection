def quick_sort(arr):
  if len(arr) < 2:
    return arr
  else:
    pivot = arr[0]
    less = [i for i in arr[1:] if i <= pivot]
    greater = [i for i in arr[1:] if i > pivot]
    return quick_sort(less) + [pivot] + quick_sort(greater)

my_arr = [1, 5, 3, 2, 4]
print(quick_sort(my_arr)) # output: [1, 2, 3, 4, 5]

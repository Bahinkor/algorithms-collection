def find_smallest(arr):
  smallest = arr[0]
  smallest_index = 0
  for i in range(1, len(arr)):
    if arr[i] < smallest:
      smallest = arr[i]
      smallest_index = i
  return smallest_index

def selection_sort(arr):
  arr = arr[:]
  new_arr = []
  for i in range(len(arr)):
    smallest_index = find_smallest(arr)
    new_arr.append(arr[smallest_index])
    arr.pop(smallest_index)
  return new_arr

my_arr = [5, 3, 1, 4, 2]
print(selection_sort(my_arr)) # Output: [1, 2, 3, 4, 5]

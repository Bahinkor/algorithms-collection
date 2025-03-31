const quickSort = (arr: Array<number>): Array<number> => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];
  const less = arr.slice(1).filter((num) => num <= pivot);
  const greater = arr.slice(1).filter((num) => num > pivot);

  return quickSort(less).concat(pivot).concat(quickSort(greater));
};

const myArr: Array<number> = [1, 5, 3, 2, 4];
console.log(quickSort(myArr)); // output: [1, 2, 3, 4, 5]

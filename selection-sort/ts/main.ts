const findSmallest = (arr: Array<number>): number => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (arr: Array<number>): Array<number> => {
  let copyArr: Array<number> = [...arr];
  let newArr: Array<number> = [];

  while (copyArr.length > 0) {
    const smallestIndex = findSmallest(copyArr);
    newArr.push(copyArr[smallestIndex]);
    copyArr.splice(smallestIndex, 1);
  }
  return newArr;
};

const myArr = [5, 3, 1, 4, 2];
console.log(selectionSort(myArr)); // Output: [1, 2, 3, 4, 5]

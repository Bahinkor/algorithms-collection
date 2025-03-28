const binarySearch = (myList: Array<number>, item: number): number | string => {
  let low: number = 0;
  let high: number = myList.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = myList[mid];

    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return "None";
};

const myList: Array<number> = [1, 2, 3, 4, 5];
console.log(binarySearch(myList, 3)); // Output: 2

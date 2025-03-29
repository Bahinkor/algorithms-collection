var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var findSmallest = function (arr) {
    var smallest = arr[0];
    var smallestIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
};
var selectionSort = function (arr) {
    var copyArr = __spreadArray([], arr, true);
    var newArr = [];
    while (copyArr.length > 0) {
        var smallestIndex = findSmallest(copyArr);
        newArr.push(copyArr[smallestIndex]);
        copyArr.splice(smallestIndex, 1);
    }
    return newArr;
};
var myArr = [5, 3, 1, 4, 2];
console.log(selectionSort(myArr)); // Output: [1, 2, 3, 4, 5]

var quickSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }
    var pivot = arr[0];
    var less = arr.slice(1).filter(function (num) { return num <= pivot; });
    var greater = arr.slice(1).filter(function (num) { return num > pivot; });
    return quickSort(less).concat(pivot).concat(quickSort(greater));
};
var myArr = [1, 5, 3, 2, 4];
console.log(quickSort(myArr)); // output: [1, 2, 3, 4, 5]

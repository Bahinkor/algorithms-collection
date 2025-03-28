var binarySearch = function (myList, item) {
    var low = 0;
    var high = myList.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var guess = myList[mid];
        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return "None";
};
var myList = [1, 2, 3, 4, 5];
console.log(binarySearch(myList, 3)); // Output: 2

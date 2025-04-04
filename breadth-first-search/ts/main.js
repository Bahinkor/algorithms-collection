var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var isPersonSeller = function (name) { return name.endsWith("m"); };
var bfsSearch = function (name) {
    var searchQueue = __spreadArray([], graph[name], true);
    var searched = new Set();
    while (searchQueue.length) {
        var person = searchQueue.shift();
        if (!searched.has(person)) {
            if (isPersonSeller(person)) {
                console.log(person + " is a mango seller!");
                return true;
            }
            else {
                searchQueue.push.apply(searchQueue, (graph[person] || []));
                searched.add(person);
            }
        }
    }
    return false;
};
var graph = {
    you: ["alice", "bob", "claire"],
    bob: ["anuj", "peggy"],
    alice: ["peggy"],
    claire: ["thom", "jonny"],
    anuj: [],
    peggy: [],
    thom: [],
    jonny: [],
};
bfsSearch("you");

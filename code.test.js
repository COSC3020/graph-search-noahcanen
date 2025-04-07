const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

test1 = [[1],[2],[3],[4],[5]] // 1 -> 2 -> 3 -> 4 -> 5

assert(JSON.stringify(depthFirstSearch(test1, 0, 0)) == JSON.stringify([0]))
assert(JSON.stringify(depthFirstSearch(test1, 0, 5)) == JSON.stringify([0, 1, 2, 3, 4, 5]))

test2 = [[1,2],[3,5],[4],[5]] 

assert(JSON.stringify(depthFirstSearch(test2, 0, 5)) == JSON.stringify([0, 1, 5]))
assert(JSON.stringify(depthFirstSearch(test2, 5, 0)) == JSON.stringify([]))
assert(JSON.stringify(depthFirstSearch(test2, 0, 2)) == JSON.stringify([0, 2]))

test3 = [[1],[2],[3],[4],[5],[0]] 

assert(JSON.stringify(depthFirstSearch(test3, 0, 0)) == JSON.stringify([0]))
assert(JSON.stringify(depthFirstSearch(test3, 0, 1)) == JSON.stringify([0, 1]))
assert(JSON.stringify(depthFirstSearch(test3, 0, 2)) == JSON.stringify([0, 1, 2]))
assert(JSON.stringify(depthFirstSearch(test3, 0, 3)) == JSON.stringify([0, 1, 2, 3]))
assert(JSON.stringify(depthFirstSearch(test3, 0, 4)) == JSON.stringify([0, 1, 2, 3, 4]))
assert(JSON.stringify(depthFirstSearch(test3, 0, 5)) == JSON.stringify([0, 1, 2, 3, 4, 5]))

test4 = []

assert(JSON.stringify(depthFirstSearch(test3, 0, 5)) == JSON.stringify([]))

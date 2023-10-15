// Q. Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


// Solution
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    let count = n - 1;
    return function () {
        count += 1;
        return count;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
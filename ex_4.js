/**
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:
increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let n = init;

    return {
        increment: () => {
            n += 1;
            return n
        },
        decrement: () => {
            n -= 1;
            return n
        },
        reset: () => {
            n = init;
            return n
        },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
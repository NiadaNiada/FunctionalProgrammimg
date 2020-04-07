const fibonacciStartsWithOne = n => {
    if (n < 2) return n;

    return fibonacciStartsWithOne(n - 1) + fibonacciStartsWithOne(n - 2);
};

console.log(fibonacciStartsWithOne(1));

// return
// 1. 1
// 2. 1
// 3. 2
// 4. 3
// 5. 5
// 6. 8
// ...

const fibonacciStartsWithZero = n => {
    if (n === 1) return 0;
    if (n === 2) return 1;

    return fibonacciStartsWithZero(n - 1) + fibonacciStartsWithZero(n - 2);
};

console.log(fibonacciStartsWithZero(1));

// return
// 1. 0
// 2. 1
// 3. 1
// 4. 2
// 5. 3
// 6. 5
// ...
const double = a => a * 2
const triple = a => a * 3;
const array = [1,2,3];

const compose = (...functions) => {
    return (array) => {
        return functions.reduceRight((arg, fn) => arg.map(fn), array);
    }
}

console.log(compose(double, triple)(array));
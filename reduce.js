let arrayOne = [1, 3, 2, 4];
let arrayTwo = [4, 6, 8];
const even = element => element % 2 === 0;

const concat = (array, newElement) => {
    return array.reduce(() => {
        return Array.isArray(newElement)
            ? [...array, ...newElement]
            : [...array, newElement];
    });
};

console.log(concat(arrayOne, 3));
console.log(concat(arrayOne, arrayTwo));

const filter = (array, filterFunction) => {
    return array.reduce((accum, curVal) => {
        return (filterFunction(curVal)) ? [...accum, curVal] : accum;
    }, []);
};

console.log(filter(arrayTwo, even));

const find = (array, findFunc) => {
    return array.reduce((accum, curVal) => {
        if (accum !== undefined) {
            return accum;
        }
        return (findFunc(curVal)) ? curVal : accum;
    }, undefined);
};

console.log(find(arrayOne, even));

const findIndex = (array, condition) => {
    return array.reduce((accum, curVal, index) => {
        return (accum === -1 && condition(curVal)) ? index : accum;
    }, -1);
};

console.log(findIndex(arrayTwo, even));

const includes = (array, element) => {
    return array.reduce((accum, curVal) => {
        return (curVal === element) ? true : accum;
    }, false);
};

console.log(includes(arrayOne, 3));

const indexOf = (array, element) => {
    return array.reduce((accum, curVal, index) => {
        return (accum === -1 && curVal === element) ? index : accum;
    }, -1);
};

console.log(indexOf(arrayOne, 3));

const map = (array, mapFunction) => {
    return array.reduce((accum, curVal) => {
        return [...accum, mapFunction(curVal)];
    }, []);
};

console.log(map(arrayTwo, item => item / 2));

const reverse = array => {
    return array.reduce((accum, curVal, index) => {
        accum[array.length - index - 1] = curVal;
        return accum;
    }, []);
};

const reverse1 = array => {
    return array.reduce((accum, curVal) => [curVal].concat(accum));
};

console.log(reverse1(arrayOne));
console.log(reverse(arrayOne));

const some = (array, condition) => {
    return array.reduce((accum, curVal) => {
        return (condition(curVal)) ? true : accum;
    }, false);
};

console.log(some(arrayOne, even));

const every = (array, condition) => {
    return array.reduce((accum, curVal) => {
        return (accum) ? condition(curVal) : accum;
    }, true);
};

console.log(every(arrayTwo, even));
console.log(every(arrayOne, even));


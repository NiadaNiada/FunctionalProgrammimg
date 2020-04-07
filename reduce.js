let arrayOne = [1, 2, 3, 4];
let arrayTwo = [4, 6, 8];
const even = element => element % 2 === 0;

const concat = (array, newElement) => {
    return array.reduce(() => {
        return [...array, ...newElement];
    });
};

console.log(concat(arrayOne, arrayTwo));

const filter = (array, filterFunction) => {
    return array.reduce(() => {
        let filterArr = [];
        for (let elem of array) {
            if (filterFunction(elem)) {
                return filterArr.push(array[elem]);
            }
        }
        return undefined;
    });
};
console.log(filter(arrayTwo, even));

const find = (array, func) => {
    array.reduce(() => {
        for (let elem of array) {
            if (func(elem)) {
                return elem;
            }
        }
        return undefined;
    });
};

console.log(find(arrayOne, even));

const findIndex = (array, condition) => {
    return array.reduce(() => {
        for (let index in array) {
            if (condition(array[index])) {
                return index;
            }
        }
        return undefined;
    });
};

console.log(findIndex(arrayOne, even));

const includes = (array, element) => {
    return array.reduce(() => {
        for (let elem of array) {
            if (elem === element) {
                return true;
            }
        }
        return false;
    });
};

console.log(includes(arrayOne, 3));

const indexOf = (array, element) => {
    return array.reduce(() => {
        for (let elem in array) {
            if (array[elem] === element) {
                return elem;
            }
        }
        return undefined;
    });
};

console.log(indexOf(arrayOne, 3));

const map = (array, mapFunction) => {
    return array.reduce(() => {
        const mapArr = [];
        for (let i = 0; i < array.length; i++) {
            const result = mapFunction(array[i]);
            mapArr.push(result);
        }
        return mapArr;
    });
};

console.log(map(arrayTwo, item => item / 2));

const reverse = array => {
    return array.reduce((acc, curr, index, arr) => {
        acc[arr.length - index - 1] = curr;
        return acc;
    }, []);
};

const reverse1 = array => {
    return array.reduce((a, b) => [b].concat(a));
};

console.log(reverse1(arrayOne));

console.log(reverse(arrayOne));

const some = (array, condition) => {
    return array.reduce(() => {
        for (let elem of array) {
            if (condition(elem)) {
                return true;
            }
        }
        return false;
    });
};

console.log(some(arrayOne, even));

const every = (array, condition) => {
    return array.reduce(() => {
        for (let elem of array) {
            if (!condition(elem)) {
                return false;
            }
        }
        return true;
    });
};

console.log(every(arrayTwo, even));
console.log(every(arrayOne, even));
// ARRAY.
let numbers = [1, 2, 3, 'Four'];
// numbers[10] = 5;
numbers.push(5, 6);
console.log(numbers);

console.clear();

//Two array.
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6, 7];

// first array + second array.
// firstArray.push(...secondArray);
console.log(firstArray);
console.clear();

// concat.
firstArray.push(...secondArray);
let thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);

function convertCasing(value) {
    return value.toUpperCase();
}

const res = convertCasing('HellO');
console.log(res.toLowerCase());
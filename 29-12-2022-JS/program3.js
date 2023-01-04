function getFirstChar1(value) {
    return value[0];
}

const getFirstChar2 = function (value) {
    return value[0];
};

const getFirstChar3 = (value) => {
    return value[0];
};

const getFirstChar = value => value[0];

console.log(getFirstChar1('Hello'));
console.log(getFirstChar2('Hello'));
console.log(getFirstChar3('Hello'));
console.log(getFirstChar('Hello'));

console.clear();

const numArray1 = [1, 2, 3, 4, 7, 8, 10];
const numarray2 = [];

for (let i = 0; i < numArray1.length; i++) {
    const element = numArray1[i];
    if(numArray1[i] % 2 == 0) {
        numarray2.push(element);
    }
}

console.log(numArray1);
console.log(numarray2);

// another methon to sort even function

function isEven(value) {
    return value % 2 == 0;
}
const res = numArray1.filter(isEven);
console.log(res, 'second method');

// another method.

const numbers = [1, 2, 3, 4, 5, 6, 8, 12, 13];
const res2 = numbers.filter(value => value % 2 == 0);
console.log(res2, 'third method');


//  fill.
const array3 = [2, 3, 7, 8, 9, 10];
array3.fill(10);
console.log(array3);

//  check 5 included in array
const array4 = [2, 3, 7, 5, 8, 9, 10];
if(array4.includes(5)) {
    console.log('array contains five');
}

// join .

const array5 = [1, 2, 2, 3, 5, 6, 7, 9];
console.log(array5.join('->'));

// tostring .

console.log(array5.toString());

// NaN not a number.

let value = NaN;
console.log(isNaN());
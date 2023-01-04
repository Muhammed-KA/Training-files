// function.

function greet() {
    console.log("Hello World");
}

greet();

console.clear(); 
// add function.

function add(x, y) {
    console.log(x + y);
}

add(1, 2);

// add using return


function add2(x, y) {
    return x + y;
}

const res = add2(5, 2);
console.log(res);

// upper case lower case.

function convertCasing(value) {
    return value.toUpperCase();
}

const res2 = convertCasing('HellO');
console.log(res2.toLowerCase());





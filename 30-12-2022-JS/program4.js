// destructure.

const student = {
    fullName:'student 1',
    mark1:40,
    mark2:50 
}
const {fullName, mark1, mark2} = student;
console.log(fullName);
console.log("<----------->");

//

const keys = Object.keys(student);
keys.forEach(key => {
    console.log(student[key]);    
});

//
console.log("<----------->");

const values = Object.values(student);
values.forEach(value => {
    console.log(value);
});


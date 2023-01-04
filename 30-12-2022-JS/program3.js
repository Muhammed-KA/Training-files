
const student = {
    name: 'student1',
};
const marks = {
    mark1: 45,
    mark2: 40,
    total: function(){
        const extraMark = 5;
        console.log("<----total marks----->");
        console.log(this.mark1 + this.mark2 + extraMark);
    }
};
marks.total();


// copy an object.

const copy = Object.assign({}, student,  marks);                // copy all object in student to copy.
copy.name = 'New Name';                                 //changing object in copy object .
// console.log(student);
console.log(copy);



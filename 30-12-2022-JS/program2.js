 // Object .
const person = {
    name: 'John Doe',
    age: 20,
    experience: [
        {
            company: 'company ABC',                     // multiple object.
            years: 2
        },
        {
            company: 'company XYZ',
            years: 4 
        }
    ] 
};

// person.name = 'New  Name';
person.email = 'email@email.com';
console.log(person);  // person = object .
// console.log(person.email);
// console.log(person['name']);
console.log(person.experience[0].company);

// To print company name only.
console.log("<------------------To print company name only----------->");

person.experience.forEach(exp =>console.log(exp.company) );
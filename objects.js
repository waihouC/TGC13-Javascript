let person = {
    "lastName": "Tan",
    "firstName": "Kow",
    "email": "tan@gemail.com",
    "age": 33,
    "getFullName": function() {
        return this.lastName + " " + this.firstName;
    } 
}

console.log(person["firstName"], person["email"], person["age"]);

console.log(person.firstName, person.email, person.age);
console.log(person.getFullName());
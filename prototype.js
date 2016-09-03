var firstObj = { fname : "Bob"};
var secondObj = { lname : "Kenede" };

secondObj.__proto__ = firstObj ;

console.log(secondObj.isPrototypeOf(firstObj));

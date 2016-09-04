var person = function(){
	this.canCheck = true
};

person.prototype.greeting = function(name){
	if(this.canCheck){
		console.log("Hi I am Bappi");
	}
};

var personObj = new person();
console.log(personObj);     // return own object
console.log(Object.getPrototypeOf(personObj));   // return a greeting object
console.log(personObj.hasOwnProperty('canCheck'));   // true
console.log(personObj.hasOwnProperty('greeting'));  // false
personObj.greeting();  //  Hi I am Bappi

/* ...........Second prototype................*/ 
console.log("-----------------------------------------------------------------");

var body = function(){
	this.check = true;
};

body.prototype.info = function(){
    if(this.check){
       console.log("Hi I am "+ this.name);
    }
};

var employee = function(name, title){
	body.call(this);
	this.name = name;
	this.title = title;
}

employee.prototype = Object.create(body.prototype);

var employeeObj = new employee('Nuruzzaman', "Software Engineer");
employeeObj.info();

console.log(Object.getPrototypeOf(employeeObj));  // Object
console.log(employeeObj.hasOwnProperty('info'));  // false

console.log("---------------------------------------------------------");

var customer = function(name , check ){
	body.call(this);
	this.name = name;
	this.check = check;
}; 

customer.prototype = Object.create(body.prototype);
var customerObj = new customer('Rahim customer', true );  // pass true or false ;;;;;  false = No data display, true = data display. 
customerObj.info();



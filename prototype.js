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
employee.prototype.constructor = employee;

employee.prototype.info = function(){
	if(this.check){
       console.log("Hi I am " + this.name + " as "+ this.title);
	}
}

var employeeObj = new employee('Nuruzzaman', 'Software Engineer');
employeeObj.info();

console.log(Object.getPrototypeOf(employeeObj));  // Object
console.log(employeeObj.hasOwnProperty('info'));  // false

console.log("---------------------------------------------------------");

var customer = function(name){
	body.call(this);
	this.name = name;
}; 

customer.prototype = Object.create(body.prototype);

var customerTrueObj = new customer('Rahim customer'); 
customerTrueObj.info();  // data display. 


console.log("............................................");

var mike = function(name , status){
	body.call(this);
    this.name = name ;
    this.check = status;
};


mike.prototype = Object.create(body.prototype);
mike.prototype.constructor = mike;

var mikeObjTrue = new mike("Mike", true);    // status true
mikeObjTrue.info();    // display data

var mikeObjFalse = new mike("Mude", false);
mikeObjFalse.info();

//   Object.prototype.__proto__

console.log("................Object.prototype.__proto__  ...............")

var shape = function(){

};

var p = {
	a : function(){
		console.log('aaa');
	}
};

shape.prototype.__proto__ = p;

var circle = new shape();

circle.a();  // aaa

console.log(shape.prototype == circle.__proto__);  // true

console.log(shape.prototype, circle.__proto__);
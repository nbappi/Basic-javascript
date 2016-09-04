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
personObj.greeting();
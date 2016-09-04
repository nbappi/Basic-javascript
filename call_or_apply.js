var person1 = { name : "Bappi", age : 23, size : "2x2"};
var person2 = { name : "Nuruzzaman", age : 43, size : "3x3"};

var sayHello = function(){
	console.log("hello "+ this.name);
};

sayHello.call(person1);    // Hello Bappi
sayHello.apply(person1, ['Karim']);   // Hello Bappi

var say = function(greeting, status){
	console.log(greeting + " "+ this.name +" by "+status );
};

say.call(person1, "Good morning", " call");  // Good morning Bappi

var update = function(n, s, a){
	this.name = n;
	this.size = s;
	this.age = a;
};

update.call(person1, 'Sharif', 34, "Large");

var dispatch = function(object, method, args){
   method.apply(object, args);
}

dispatch(person1, say, ['Good evening', ' apply']);
dispatch(person2, update, ["Karim", 50, "Extra large"])
/*-------------- Function objects are created with function literals :----------------*/

//  object with function

var student = {
    fName : "Nuruzzaman",
    lName : "Bappi",
    fullName : function(){
       console.log("My full name is Nuruzzaman Bappi");
    }
};

console.log(student.fName);   //
student.fullName();

// Object with constructor :

var building = function(color, room){
    this.color = color;
    this.room = room;
    this.window = function(){
        return "Window color is :"+ this.color ;
    }
};

var newBuilding = new building("Red", 2);
console.log(newBuilding.window());
console.log("Room is :"+newBuilding.room);


//  Object with constructor and prototype :

function quote(string){
    this.status = string;
}

quote.prototype.get_status = function(){
     return this.status;
};

var myQuote = new quote('Confused');
console.log(myQuote.get_status());





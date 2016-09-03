// empty object
var object = {};

// with property
var info = {
    "fName": "Md. Nuruzzaman",
    "lName": "Bappi"
};

// Including another object
var information = {
    fName: "Md. Nuruzzaman",
    lName: "Bappi",
    address: {
        road: "02",
        city: "Dhaka"
    },
    30: "Children",
    roll : 20131212,
    fullName : function(){

    }
};

// Retrieval

/*   ------- Dot Notation -----------*/
console.log(info);    // info object
console.log(information);   // information object

console.log(information.address.road);  // 02
console.log(information.city);   // undefined
console.log('information.30  => ', 'This will throw an error'); // This will throw an error​

/*Bracket Notation*/
console.log(info['fName']);   // Md. Nuruzzaman
console.log(info['LNAME']);   // undefined
console.log(info['mName']);   // undefined
console.log(information['30']) ; // Children

// The || operator can be used to fill in default values:

var middle = info["middle-name"] || "none";
console.log(middle);     // none
var status = information.status || "unknown";
console.log(status);      // unknown

// Update object with new property

info['fName'] = 'Md. Atiqual';
console.log(info['fName']);      //  Md. Atiqual

// update new property in info object
info['mName'] = 'Rahaman';
console.log(info);            // New object with add new property
console.log(info['mName']);  // Rahaman

// update new object property in information object
information.subject = {
    math : 302,
    bangla : 230,
    english : 320
};
console.log(information);   // with updated new object

//Reference Data Type
console.log(info);       //  without reference

var x = info;
x.nickname = "Curly";
x.fName = "Md. Rahaman";
console.log(info.nickname);   // Curly
console.log(x.nickname);      // Curly
console.log(info.fName);      //  Md. Rahaman


// type of a property:

console.log(typeof information.fName);    // 'string'
console.log(typeof information.roll);    // 'number'
console.log(typeof information.profession);    // 'undefined'
console.log(typeof information.address);    // 'object'
console.log(typeof information.fullName);    // 'function'


// Check has own property in object

console.log(info.hasOwnProperty('fName'));       //  true
console.log(info.hasOwnProperty('profession'));  //  false


//   prototype object

var another_info = Object.create(info);
another_info.nickname = "Meo";


//   remove a property from an object
console.log(another_info.nickname);  // Meo
delete another_info.nickname;
console.log(another_info.nickname);  // Curly







"use strict";
function add(n1, n2, showResult, phrase) {
    //    if(typeof n1 !== "number"  ||  typeof n2!=="number"){
    //        throw new Error ("incorrect input !!")
    //    }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add(number1, number2, printResult, resultPhrase);
//Objects-arrays
var Staff;
(function (Staff) {
    Staff[Staff["ADMIN"] = 1] = "ADMIN";
    Staff[Staff["AUTHOR"] = 2] = "AUTHOR";
})(Staff || (Staff = {}));
var person = {
    name: "yusuf",
    age: 27,
    hobbies: ["football", "cooking"],
    role: [2, "author"],
    staff: Staff.ADMIN,
};
var favorite;
favorite = ["sports", 2];
console.log(favorite);
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.staff === Staff.ADMIN) {
    console.log("admin");
}
//type
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log("as-number:", combine(3, 6));
console.log("as-text:", combine("yusuf", "yasin"));

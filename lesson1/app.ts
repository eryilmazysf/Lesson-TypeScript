function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //    if(typeof n1 !== "number"  ||  typeof n2!=="number"){
  //        throw new Error ("incorrect input !!")
  //    }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);

//Objects-arrays

enum Staff {
  ADMIN = 1,
  AUTHOR,
}
const person = {
  name: "yusuf",
  age: 27,
  hobbies: ["football", "cooking"],
  role: [2, "author"],
  staff: Staff.ADMIN,
};

let favorite: any[];
favorite = ["sports", 2];
console.log(favorite);
console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
if (person.staff === Staff.ADMIN) {
  console.log("admin");
}

//type

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
console.log("as-number:", combine(3, 6));
console.log("as-text:", combine("yusuf", "yasin"));

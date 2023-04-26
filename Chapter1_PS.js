//Q1 : Create a variable of type string and try to add a number to it.
let a = "Harry"
let b = 6
console.log(a + b)

//Q2 : Use typeof operator to find the datatype of the string in last question.
console.log(typeof (a+b))

//Q3 : Create a const object in javascript can you change it to hold a number later ?
// const a1 = {
//   name: "Harry",
//   section: 1,
//   isPrincipal: false
// }
// // a1 = 54

//Q4 : Try to add a new key to the const object in Problem 3 were you able to do it ?
const a1 = {
  name: "Harry",
  section: 1,
  isPrincipal: false
}
// a1 = 54
a1['friend'] = "Shubham"
a1['name'] = "Lovish"
console.log(a1)

//Q5 : Write a JS Program to dreate a word - meaning dictionary of 5 words.
const dict = {
  appreciate : "recognize the full worth of.",
  ataraxia : "a state of freedomemotional disturbance and anxiety",
  yakka : "work, espacially hard work."
}

console.log(dict.yakka)

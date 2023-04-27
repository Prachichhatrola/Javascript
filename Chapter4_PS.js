//Q1: What will the following print in javascript ?
// console.log("Har\"".length)
let str = "Har\""
console.log(str.length)

//Q2: Explore the includes, startwith & endwith functions of a string
const sentence = 'The quick brown fox jump over the lazy dag.';
const word = 'fox2';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);

//Q3: Write a program to convert a given string to lowercase.
console.log(word.toLowerCase())
console.log(word.toUpperCase())

//Q4: Extract the amount out of this string 
//    "Please give Rs 1000"
let str2 = "Please give Rs 1000"
let amount =Number.parseInt(str2.slice("Please give Rs".length))
console.log(amount)
console.log(typeof amount)

//Q5: Try to change 4th charecter of a given string were you able to do it ?
let friend = "Deepika"
friend[4] = "R"
console.log(friend) // friend is not changed, because string is immutable

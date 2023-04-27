// obj = {harry: 90, shubham: 9, Lovish: 56, Monika: 4}
let marks = {
  harry: 90,
  shubham: 9,
  Lovish: 56, 
  Monika: 4
}
//Q1: Write a program to print the marks of a student in an object using for loop
for(let i = 0;i<Object.keys(marks).length;i++){
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//Q2: Write the program in Q-1 using for in loop
for(let key in marks){
  console.log("The marks of " + key + " are " + marks[key])
  // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//Q3: Write a program to print "try again" until the user enters the correct number
let cn = 4
let i
while(i != cn){
i = prompt("Enter a number")
  console.log("Try again")
}
console.log("You have entered correct number")

//Q4: Write a function to find mean of 5 numbers
const mean = (a, b, c, d)=>{
  return (a+ b+ c+ d)/4
}
console.log(mean(4, 5, 6, 7))

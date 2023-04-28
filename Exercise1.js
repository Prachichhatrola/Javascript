let rn = Math.floor((Math.random()*100)+1)
let chances =0;
let score = 0;
let num;
do{
  num = prompt("Enter the digit")
  num = Number.parseInt(num)
  chances++;
  if(rn==num){
    score = (100 - chances)
    console.log("Congratulations!")
  }
  else if(rn>num){
    console.log("Your guessed number is shorter than the actual number.")
  }
  else{
    console.log("Your guessed number is bigger than the actual number.")
  }
}
  while(rn!=num){
  if(rn==num){
    alert(" Your have guessed the correct number " +rn+ " in " +chances+ " attempts and your score is  " +score+ " Out of 100 ")
  }
  else{
    alert("The original number is" +rn+".Better luck next time." )
  }
  }

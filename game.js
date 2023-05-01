// Use javascript to create a game of snake water and gun. This game should ask you to enter S, W and G. The computer should be able to randomly generate S, W or G and declare win or loss using alert. use confirm and prompt whenever required

const game = (user, comp) => {
  if (user == comp) {
    return 'p';
  }
  else if (user == 's') {
    if (comp == 'g') {
      return false;
    }
    else if (comp == 'w') {
      return true;
    }
  }
  else if (user == 'w') {
    if (comp == 's') {
      return false
    }
    else if (comp == 'g') {
      return true
    }
  }
  else if (user == 'g') {
    if (comp == 's') {
      return true
    }
    else if (comp == 'w') {
      return false
    }
  }
}

const getRandomInt = () => {
  return Math.floor(Math.random() * 4);
}


let starter = confirm("let's play Snake, Water and Gun Game! ");
while (starter) {
  let user = prompt("Choose Snake for 's', Water for 'w' & Gun for 'g'")
  let comp = getRandomInt()
  if (comp == 1) {
    comp = 's'
  }
  else if (comp == 2) {
    comp = 'w'
  }
  else {
    comp = 'g'
  }
  let a = game(user, comp)
  alert(`Computer chose: ${comp}\nYou chose: ${user}`)

  if (a == 'p') {
    alert("The game is Tie! ")
  }
  else if (a) {
    alert("Congratulation you won!")
  }
  else {
    alert("Sorry you lose the game!")
  }

  starter = confirm("Do you want to play a game?")

}


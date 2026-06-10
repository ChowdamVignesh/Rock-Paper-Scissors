const reSet = {
  win: 0,
  loose: 0,
  Tie: 0,
};
//random picking by computer
function computerGuess() {
  const value = Math.random();
  let letter = "";
  if (value >= 0 && value < 1 / 3) {
    letter = "Rock";
  } else if (value >= 1 / 3 && value < 2 / 3) {
    letter = "Paper";
  } else if (value >= 2 / 3 && value < 1) {
    letter = "Scissors";
  }
  return letter;
}

function resulting(name) {
  let letter = computerGuess();
  let result = "";
  if (name === "Rock") {
    if (letter === "Rock") {
      result = "Tie";
    } else if (letter === "Paper") {
      result = "Loose";
    } else if (letter === "Scissors") {
      result = "Won";
    }
  } else if (name === "Paper") {
    if (letter === "Rock") {
      result = "Won";
    } else if (letter === "Paper") {
      result = "Tie";
    } else if (letter === "Scissors") {
      result = "Loose";
    }
  } else if (name === "Scissors") {
    if (letter === "Rock") {
      result = "Loose";
    } else if (letter === "Paper") {
      result = "Won";
    } else if (letter === "Scissors") {
      result = "Tie";
    }
  }
  if (result == "Won") {
    reSet.win += 1;
  } else if (result == "Loose") {
    reSet.loose += 1;
  } else if (result == "Tie") {
    reSet.Tie += 1;
  }
  //   alert(`You selected ${name} and computer selected ${letter} : You ${result}
  //         won : ${reSet.win} loose : ${reSet.loose} Tie : ${reSet.Tie}`);
  document.getElementById("win-score").textContent = reSet.win;
  document.getElementById("lose-score").textContent = reSet.loose;
  document.getElementById("tie-score").textContent = reSet.Tie;
  document.getElementById("result-message").innerHTML =
    `You selected ${name} and computer selected ${letter} : You ${result}`;
}
function reset() {
  document.getElementById("win-score").textContent = reSet.win = 0;
  document.getElementById("lose-score").textContent = reSet.loose = 0;
  document.getElementById("tie-score").textContent = reSet.Tie = 0;
}

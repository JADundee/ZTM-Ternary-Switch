//#1 change this function into a ternary and assign it to variable called experiencePoints

/* function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
} */

// answer: 

/* var experiencePoints = winBattle() ? 10 : 1; */

//Using this function, answer the questions below:
/* function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
} */

//#2 return value when moveCommand("forward");

//answer: "undefined"

/* function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break; //Place the break after the variable is defined.
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
} */

//#3 return value when moveCommand("back");

//answer: "you arrived home"

/* function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break; //Remove the unnecessary break.
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
} */

//#4 return value when moveCommand("right");

//answer: "you found a river"

/* function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break; 
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
 */

//#5 return value when moveCommand("left");

//answer: "undefined"

/* function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break; 
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll"; //Place the break after the variable is defined.
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
} */

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!


// Interactive game
let playGame = confirm("Do you want to play Combat Roll?");
if (playGame) {

  while (playGame) {
  const playerChoice = prompt("Please enter left, right, up, or down");
  if (playerChoice || playerChoice === "") {
    const direction = playerChoice.trim().toLowerCase();
    if (
      direction === "left" ||
      direction === "right" ||
      direction === "up" ||
      direction === "down"
    ) {
            switch (direction) {
                case "up":
                    alert("you encounter a monster");
                    // monster encounter mini game
                    
                    break;
                case "down":
                    alert("you arrived home");
                    break; 
                case "right":
                    alert("you found a river");
                    break;
                case "left":
                    alert("you run into a forest");
                    break;
                default:
                    alert("please enter a valid direction");
            }
     
      playGame = confirm("Play Again?");
      if (!playGame) alert("Ok, thanks for playing.");
      continue;
    } else {
      alert("You didn't enter a direction");
      continue;
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
    break;
  }
  }
} else {
  alert("Ok, maybe next time.");
}
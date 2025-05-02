// Q) Guess the number using a loop and switch statement.
// Crearte html file and add the script to run it

let userChoice = prompt(
    "Press 's' to start the game. \n Press any key to exit."
  );
  
  switch (userChoice) {
    case "s":
      compNum = Math.floor(Math.random() * 100) + 1;
      // console.log(compNum);
      let count = 0;
  
      while (true) {
        userEnter = prompt("Enter a number range 1-100. \n Press 'q' to exit.");
        userNum = Number(userEnter);
        console.log(userNum);
        count++;
  
        if (userNum === compNum) {
          alert(`you win in ${count} guessing`);
          break;
        } else if (userEnter == "q") {
          alert("You quit!!");
          break;
        } else if (userNum > compNum) {
          alert("Too High");
        } else if (userNum < compNum) {
          alert("Too Low");
        } else if (isNaN(userEnter)) {
          alert("Enter valid number");
        }
      }
      break;
    default:
      break;
  }
  
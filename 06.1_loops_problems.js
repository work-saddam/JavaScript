// Q) Guess the number using a loop and switch statement.
// Crearte html file and add the script to run it

// let userChoice = prompt(
//     "Press 's' to start the game. \n Press any key to exit."
//   );

//   switch (userChoice) {
//     case "s":
//       compNum = Math.floor(Math.random() * 100) + 1;
//       // console.log(compNum);
//       let count = 0;

//       while (true) {
//         userEnter = prompt("Enter a number range 1-100. \n Press 'q' to exit.");
//         userNum = Number(userEnter);
//         console.log(userNum);
//         count++;

//         if (userNum === compNum) {
//           alert(`you win in ${count} guessing`);
//           break;
//         } else if (userEnter == "q") {
//           alert("You quit!!");
//           break;
//         } else if (userNum > compNum) {
//           alert("Too High");
//         } else if (userNum < compNum) {
//           alert("Too Low");
//         } else if (isNaN(userEnter)) {
//           alert("Enter valid number");
//         }
//       }
//       break;
//     default:
//       break;
//   }

// Pattern printing:-----------------------

// Pattern-1
// *
// **
// ***
// ****
// *****

function p1(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
// p1(5);

// Pattern-2
// *****
// ****
// ***
// **
// *

function p2(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      process.stdout.write("*");
    }
    console.log();
  }
}
// p2(5);

// Pattern-3
//     *
//    **
//   ***
//  ****
// *****

function p3(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }
    for (let k = 1; k <= i; k++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
// p3(5);

// Pattern-4
// 123
// 456
// 789

let count = 1;
function p4(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write(count.toString());
      count++;
    }
    console.log();
  }
}
// p4(3)

// Pattern-5
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function p5(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    if (i <= n) {
      for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
      }
    } else {
      for (let k = 1; k <= 2 * n - i; k++) {
        process.stdout.write("*");
      }
    }

    console.log();
  }
}
// p5(5);

// Pattern-6
//     *
//    ***
//   *****
//  *******
// *********
function p6(n) {
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= n - i; k++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
// p6(5);
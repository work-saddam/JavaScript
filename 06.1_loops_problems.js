// Q) Find the factorial.

function factorial(n) {
  // Recursive approach
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);

  // Itterative approach
  //   let res=1;
  //   for(let i=2; i<=n; i++){
  //     res=res*i
  //   }
  //   return res
}
// console.log(factorial(5));

// Q) Find factor of n number.
function findFactor(n) {
  const res= [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) {  //for removing duplicate value
        res.push(i);
      } else {
        res.push(i, n / i);
      }
    }
  }
  return res.sort((a,b) => a-b)
}
console.log(findFactor(16));

// check palindrome number
function palindrome(num) {
  let temp = num;
  let rev = 0;
  while (temp > 0) {
    let lastDigit = temp % 10;
    rev = rev * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }
  if (rev === num) {
    return true;
  }
  return false;
}
// console.log(palindrome(24542));

//Fabonacci series
function fabonacci(n) {
  let n1 = 0;
  let n2 = 1;
  for (let i = 0; i < n; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
}
// fabonacci(5)

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

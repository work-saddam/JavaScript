//If-else---
const a = 20;
if (a > 30) {
  console.log(a, "is grater then 30");
} else {
  console.log(a, "is less then 30");
}

// if-else-if ladder
let age = 18;
if (age >= 20) {
  console.log("you can get full licence");
} else if (age >= 18) {
  console.log("you can get learning licence");
} else console.log("you can't get licence");

// Switch-case
let grade = "B";
let result;
switch (grade) {
  case "A":
    result = "A (Excellent)";
    break;
  case "B":
    result = "B (Average)";
    break;
  case "C":
    result = "C (Below than average)";
    break;
  default:
    result = "No Grade";
}
console.log(result);

// Break defines whenever condition match terminate the execution.
// if we don't use break, whenever condition match after that every condition will execute.

// default is used when no condition match, run the statement.
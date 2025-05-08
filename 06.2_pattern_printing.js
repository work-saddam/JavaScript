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

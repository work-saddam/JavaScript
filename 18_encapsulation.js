// Encapsulation :- Bundling data (properties) and methods (functions) into a single unit (class) and restricting direct access.

/* we can achive encapsulation by-
    - Using ES6 Classes with Private Fields
    - Using Closures
*/

// 1) Using ES6 Classes with Private Fields

// In modern JavaScript (ES2022+), you can define private class fields using the # symbol.
// These fields are truly private and cannot be accessed outside the class.

class Person {
  #name; // private field 

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setName(newName) {
    if (newName.length > 0) {
      this.#name = newName;
    }
  }
}

const person = new Person("Alice");
console.log(person.getName()); // Alice
person.setName("Bob");
console.log(person.getName()); // Bob
// console.log(person.#name);  // ❌ Error: private field

// 2)  Using Closures

function Counter() {
  let count = 0;  // private variable

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    }
  };
}

const counter = Counter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
// console.log(counter.count);   // undefined

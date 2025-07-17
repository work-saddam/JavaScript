// JavaScript provides the call(), apply(), and bind() methods for setting the this context within a function.
// it helps us to share & borrow the methods from one objects to another.

const user1 = {
    name:"Alex",
    age:32,
}

function printDetail(gender, city ){
    console.log(this.name, this.age, gender, city)
}

const user2 = {
    name:"Bob",
    age:11
}

// call method
/**The Call() Method calls the function directly and sets this to the first argument passed to the call method
    and if any other sequences of arguments preceding the first argument are passed to the call method then
    they are passed as an argument to the function. */
printDetail.call(user1, "male", "mumbai")

// apply method
/**The Apply() Method calls the function directly and sets this to the first argument passed to the apply method
    and arguments should be provided inside array */

printDetail.apply(user2, ["male", "paris"])

// bind method
/**The Bind() Method creates a new function and when that new function is called it set this keyword to the first argument,
    which is passed to the bind method, and if any other sequences of arguments preceding the first argument
    are passed to the bind method then they are passed as an argument to the new function
 */
const userInfo = printDetail.bind(user1, "female", "OOty")
userInfo()
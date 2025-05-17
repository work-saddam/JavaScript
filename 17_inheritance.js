// extends :- extends keyword is used to achive inheritance

// 'static' keyword is used inside a class to define methods or properties that belong to the class itself,
//  not to instances of the class.
// It means, the object which is initiated from the class does not access this properties/methods.


class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} is logged-in.`)
    }

    static createId(){    //object which is initiated from the class does not access this properties/methods.
        return "5431735"
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username),
        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`New course is added by ${this.username}`)
    }
}

const eich = new User("eich")
// eich.logMe()
// eich.addCourse()   //throw error => Parent class CAN'T access the methods/properties of Child class.
// console.log(eich.createId())  //❌ Error: eich.createId is not a function, because it is a static method.

// console.log(eich instanceof User)       //true
// console.log(eich instanceof Teacher)    //false

const brendan = new Teacher("brendan", "eich@gmial.com", 12345)
// brendan.addCourse()
// brendan.logMe()   // Child class can access the methods/properties of Parent class.
// console.log(brendan.createId()) //❌ Error: brendan.createId is not a function, because it is a static method.


// console.log(brendan instanceof Teacher)     //true
// console.log(brendan instanceof User)        //true



/*
Q1. using if else if ladder 
    - Range(1-100)
    - if num<=32 : log num
    - if 53,54  : log 55
    - if 78,79 : log 80
    - if 41,42 : log num
*/

let num = 52;

if(num>=1 && num<=100){
    if(num<=32 || num%5==0 || num%5===1 || num%5===2){
        console.log(num)
    }else if(num%5===3 || num%5 ===4){
        console.log(num+(5-num%5))
    }else{
        console.log("rule not define")
    }
}else{
    console.log("Out of range")
}

/*
Q2. Find the day of the given month 
	I/P: (2,2000) 
    O/P: 29
*/

let  inp = "2,1600";
let arr = inp.split(",")
// console.log(arr)
let month = arr[0];
let year = arr[1]
if(month>=1 && month<=12 && year >0){
    if(month==1 || month==3|| month==5 || month==7 || month==8 || month==10 || month==12){
        console.log("31")
    }else if(month==4 || month==6 || month==5 || month==9 || month==11){
        console.log("30")
    }else if(month==2){
        if((year%4 == 0 && year%100 != 0 || year%400==0)){
            console.log("29")
        }else{
            console.log("28")
        }
    }
}else{
    console.log("Invalid month or year")
}


/*
Q3. Check whether vowel or consonent?
*/

let a = "a";
if(a.length == 1){
    if(a==="a" || a==="e" || a==="i" || a==="o" || a==="u" ){
        console.log("vowel")
    }
    else{
        console.log("consonet")
    }
}else{
    console.log("enter only one alphabet")
}

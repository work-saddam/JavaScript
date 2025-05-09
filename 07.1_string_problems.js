// Q) write a program to convert first letter capital of every word.
// using string function:------
function capital(str) {
  str = str.trim()
  const word = str.split(" ");
  for (let i = 0; i < word.length; i++) {
    if(word[i].length > 0){
    word[i] = word[i][0].toUpperCase() + word[i].substring(1);
    }
  }
  res = word.join(" ");
  return res;
}
// console.log(capital("   with space  "));
// console.log(capital("without space"));

// without using string function:------
function capitalFun(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if(str[i]==" " && (str[i-1]===" "||str[i+1]===" ")){
      continue;
    }else if(str[i]!==" " && (str[i-1]===" " || str[i-1]===undefined)){
      newStr= newStr + str[i].toUpperCase()
    }else{
      newStr=newStr + str[i]
    }
  }
  return newStr
}
// console.log(capitalFun("   with space  "));
// console.log(capitalFun("without space"));
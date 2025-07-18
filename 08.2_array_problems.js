//** Q) Array Reverse
function revArray(arr){
    let n=arr.length
    for(let i=0; i<=n/2; i++ ){
        let temp = arr[i]
        arr[i] = arr[n-1-i]
        arr[n-1-i]=temp
    }
    return arr;
}
// console.log(revArray([1, 4, 3, 2, 6, 5]))

// Q) Print every alternate element of the array starting from the first element.
function getAlternate(arr){
    let res=[];
    for(let i=0; i<arr.length; i+=2){
        res.push(arr[i])
    }
    return res 
}
// console.log(getAlternate([1,2,3,9,6]));

// Q) Print the Largest element in an Array
function getLargest(arr){
    let max = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
// console.log(getLargest([1,4,78,5,9]));

//another way, not recommend for interview.
function large(arr){
    arr.sort( (a,b) => a-b )  //Numeric sort
    // console.log(arr)   
    return arr[arr.length-1]
}
// console.log(large([2,5,9,43,2,29]))

// Q) Remove duplicates element from Sorted Array
function rmDuplicate(arr){
    const res = [arr[0]]
    for(let i=1; i<arr.length; i++){
        if(arr[i] !== arr[i-1]){
            res.push(arr[i])
        }
    }
    return res;
}
// console.log(rmDuplicate([2, 2, 2, 2, 2]))
// console.log(rmDuplicate([1 ,2, 2, 3, 4, 4, 4, 5, 5]))
// console.log(rmDuplicate([1, 2, 3]))

// Q) Remove duplicates element from Un-Sorted Array
function rmDuplicateUnsorted(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let isPresent = false;
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        isPresent = true;
        break;
      }
    }
    if (!isPresent) {
      res.push(arr[i]);
    }
  }
  return res;
}
console.log(rmDuplicateUnsorted([2,2,2,2,2,2]));
console.log(rmDuplicateUnsorted([1, 2, 3, 2, 3, 6, 9, 5, 5,]));
console.log(rmDuplicateUnsorted([1, 2, 3]));


// Q) find duplicate element in array (without sort)
function duplicateEle(arr){
  const newArr=[]
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i] === arr[j]){
        let isPresent =false
        for(let k=0; k<newArr.length; k++){
          if(newArr[k] === arr[i]){
            isPresent = true
          }
        }
        if(isPresent == false){
          newArr.push(arr[i])
        }
      }
    }
  }
  return newArr;
}
// console.log(duplicateEle([2,2,2,2,2]))
// console.log(duplicateEle([1 ,2, 2, 3, 4, 4, 4, 5, 5]))
// console.log(duplicateEle([1,2,3]))

// Sort the array without using sort method.
// Bubble Sorting (https://www.youtube.com/watch?v=p__ETf2CKY4&t)
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let flag=0;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = 1;
      }
    }
    if(flag === 0){
      break;
    }
  }
  return arr;
}
console.log(bubbleSort([5, 3, 7, 8, 3, 1]))
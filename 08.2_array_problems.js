// Q1) Print every alternate element of the array starting from the first element.
function getAlternate(arr){
    let res=[];
    for(let i=0; i<arr.length; i+=2){
        res.push(arr[i])
    }
    return res 
}
// console.log(getAlternate([1,2,3,9,6]));


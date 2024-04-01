// this takes an array of numbers and return prime numbers which are in the array given
function primem(num){
if(num<=1) {
    return false;

}
for(let i = 2; i<= Math.sqrt(num);i++)
{ if(num %i==0)
{ return false;
}
}
return true;
}
function getprimenumbers(arr){
    const primenumbers = [];
    for(let i=0;i< arr.length;i++){
        if(primem(arr[i])){
        primenumbers.push(arr[i]);}
    }
    return primenumbers;
}
const inputArray = [1,2,3,4,5,6,7,8,9]
console.log(getprimenumbers(inputArray))

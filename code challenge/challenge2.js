//this accepts two numbers which are -5 and 30 and generates arrays which are bettwen them
function arrayGenerator(a ,z ){
    let array = []
    for(i = a; i<= z; i++){
        array.push(i)
    }
    return array;
}
console.log(arrayGenerator(-5,30));

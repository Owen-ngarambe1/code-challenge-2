  // this swaps from upper case to lower case or lower case to upper case
  function swapCase(str){
    return str.split('').map(str => {
        if (str = str.toUpperCase()){
            return str.toLowerCase()
        }else{
            return str.toUpperCase()
        }
    }).join('');
  }
  console.log(swapCase('ChaLLENge'))

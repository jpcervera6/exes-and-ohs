function XO(letters){
    let oCount = 0;
    let xCount = 0;
    for(i=0; i<letters.length; i++){
        if(letters.toUpperCase().charAt(i) == 'O'){
            oCount++;
            
        }else{
            if(letters.toUpperCase().charAt(i) == 'X'){
                xCount++;
            } else{
                continue;
            }
        }
    }
    let result;
    if(oCount === xCount){
      result = true;
        
    }else{
      result = false;
    }
    console.log(result);
}

XO();

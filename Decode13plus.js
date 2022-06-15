function rot13(str) {

    let auxArr = str.split(" ")
    //console.log(auxArr)
    let decodeFinal =[];
    auxArr.forEach(item =>{
    
     let decode = "";
    for(let i = 0 ; i < item.length;i++){
      //console.log(item.charCodeAt())
     if((item[i].charCodeAt() >= 65 && (item[i].charCodeAt()) <=90)){
      if((item[i].charCodeAt() + 13)<= 90 ){
    decode +=(String.fromCharCode((item[i].charCodeAt() + 13)))
      }else{
        decode +=(String.fromCharCode((item[i].charCodeAt() - 13)))
        
      }}else{
         decode +=String.fromCharCode(item[i].charCodeAt())
      }
    }
    decodeFinal.push(decode)
    })
    
    console.log(decodeFinal.join(" "))
      return decodeFinal.join(" ");
    }
    
    rot13("SERR PBQR PNZC");
    rot13("SERR CVMMN!")
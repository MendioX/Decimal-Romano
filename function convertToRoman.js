function convertToRoman(num) {
 
 //console.log(num-(num % 10))
let descompuestos= descomponerNro(num) 
 //console.log(descompuestos)

const romanValue= {

  1 : "I",
  4:  "IV",
  5:  "V",
  9:  "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
}

let llaves = Object.keys(romanValue);
//console.log(llaves)
//console.log("k"+"hu")
let str = "";
descompuestos.forEach(item =>{

let itemAux = item;
let match = 0;
while(itemAux > 0){
 let i =0;
while(itemAux >= llaves[i]){
  match = llaves[i];
  
  i++;
}
itemAux =itemAux -match;
//console.log(romanValue[match])
str +=romanValue[match];
}

   
 })

console.log(str)
 return str;
}


function descomponerNro(num){

let arrAux = [];
if(num < 100){
//arrAux.push("hola")
arrAux.push(num-num%10)
arrAux.push(num%10)
}
//nros entre 100 y 999
   if(num >= 100 && num < 1000){
   arrAux.push(num-(num%100))
   arrAux.push((num%100)-(num % 10))
    arrAux.push((num % 10))
   }
 //nros mayores a 1000  
   if(num >= 1000){
    arrAux.push(num - (num%1000))
    arrAux.push((num%1000)-num%100)
    arrAux.push(num%100 -(num % 10))
    arrAux.push((num % 10))
   }

//console.log(arrAux)
return arrAux;
}

//descomponerNro(49);
convertToRoman(350);



const a =document.querySelector.bind(document);
const aa =document.querySelectorAll.bind(document);

let value1 = 0;
let value2 = 0;
let value3 = 0;
let result = 0;

let GetButtonvalue1 = () => {

  try {
 let Tvalue = parseInt(a('.value1').dataset.value);
 value1 +=Tvalue;
 let Getinput = a('.one');
 Getinput.placeholder = `${value1}`;



  } catch (error) {
   alert(error.message)
  }

}

let GetButtonvalue2 = () => {

 try {
   
let Tvalue = parseInt(a('.value2').dataset.value);
value2 +=Tvalue;
let Getinput = a('.two');
Getinput.placeholder = `${value2}`;



 } catch (error) {
   alert(error.message)
   console.log(error.message)
 }


}

let GetButtonvalue3 = () => {

 try {

 let Tvalue =parseInt(a('.value3').dataset.value);
 value3 +=Tvalue;
 let Getinput =a('.three');
 Getinput.placeholder = `${value3}`;


   
 } catch (error) {
   alert(error.message)
   console.log(error.message)
 }



}

let CalculatePrice = () => {


try {
console.log(value1);
console.log(value2);
console.log(value3);

if (value1 !== 0 ) {
   result = result + value1
   
}
if (value2 !== 0 ) {
   result = result + value2
   
}
if (value3 !== 0 ) {
   result = result + value3
   
}

let resultdiv =document.querySelector('.showMyResult');
resultdiv.innerHTML = `${result}`



} catch (error) {
   console.log(error.message)
}


}
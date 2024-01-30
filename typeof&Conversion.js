// data types (primitive data types)
// string "Abhimanyu"
// number 2, 4, 5.6 
// booleans 0,1 true,false
// undefined
// null 
// BigInt
// Symbol


// typeof operator 


let age = 22; 
let firstName = "Abhimanyu";
console.log(typeof age);
console.log(typeof firstName);

// // convert number to string. 
// // 22 -> "22"
age = age + "";
console.log(typeof age); 


// convert string to number.
// just add "+" before string   
firstName = +"Abhimanyu";
console.log(typeof firstName);

let num = 54;
num = String(num);    //convert number to string by String()
console.log(typeof num);


let age0 = "18";
age0 = Number(age0);  // convert string to number by Number()
console.log(typeof age0);

// question-16

// a) isEven function
const isEven = (n) => n % 2 === 0;
console.log(isEven(4)); 
console.log(isEven(3)); 

// b) Ternary operator
let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";
console.log(result); 

// c) greet function
const greet = (name) => console.log(`Hello, ${name ? name : "Guest"}`);
greet("Alice"); 
greet();        

//question-17
//a marge aaray using separate opertor
const arr1 = [1, 2, 3,] ;
const arr2 = [4, 5];

const merged = [...arr1, ...arr2];
console.log(merged); 
//b) Function using rest operator to sum numbers
function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); 

//c) Object destructuring (multi-level)
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const { name, address: { city, pin } } = user;

console.log(name);
console.log(city); 
console.log(pin);

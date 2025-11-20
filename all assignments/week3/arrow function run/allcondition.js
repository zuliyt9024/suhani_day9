// question-19


// 1. Template Literals + Expressions
// a)
console.log(`5 + 7 = ${5 + 7}`);

// b) Multi-line string
const multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine);

// c) Full name
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);


// 2. Arrow Functions
// a) Arrow function
const square = n => n * n;
console.log(square(5));

// b) Why undefined
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); 

// c) Using normal function
const obj2 = {
  value: 50,
  test: function() { console.log(this.value); }
};
obj2.test(); 


// 3. Rest, Spread & Copying Objects
// a) Shallow copy
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log(productCopy);

// b) Merge objects
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

// c) maxValue function
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(1,5,3,9));


// 4. Destructuring & Optional Chaining
// a) Array destructuring
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

// b) Object destructuring
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c) Optional chaining
const info = {};
console.log(info?.details?.name); 


// 5. Scoping (let/var/const)
// a)
for (var i = 0; i < 3; i++) {}
console.log(i); 

// b)
for (let j = 0; j < 3; j++) {}

// 6. Ternary Operator – Practice
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

let number = -5;
let sign = number > 0 ? "Positive" : (number === 0 ? "Zero" : "Negative");
console.log(sign);


// 7. Spread, Rest & Arrays
// a)
const nums = [1,2,3];
const newNums = [...nums, 4, 5];
console.log(newNums);

// b)
const arr1 = ["x","y"];
const arr2 = ["z"];
const combined = [...arr1, ...arr2];
console.log(combined);

// c)
const printNames = (...names) => names;
console.log(printNames("A","B","C"));


// 8. Object Destructuring & Shorthand
// a)
const user = { id: 101, status: "active" };
const { id: userId, status } = user;
console.log(userId, status);

// b) Shorthand
const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);

// c) Object with method shorthand
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};
person.greet();


// 9. Template Literals (More Practice)
// a)
console.log(`Today is ${new Date().toDateString()}`);

// b)
const NAME = "Sam";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// 10. Arrow Function Shorthands
// a) One-line addition
const add = (a,b) => a + b;
console.log(add(3,7));

// b)
const isAdult = age => age >= 18;
console.log(isAdult(17));

// c)
const double = n => n * 2;
console.log(double(8));


// 11. Spread Operator (Arrays & Objects)
// a)
const arr3 = [1,2,3];
const cloneArr = [...arr3];
console.log(cloneArr);

// b)
const arrWith100 = [100, ...arr3];
console.log(arrWith100);

// c)
const objA = { x: 1, y: 2 };
const objB = { y: 5, z: 3 };
const mergedObj = { ...objA, ...objB };
console.log(mergedObj);


// 12. Optional Chaining (More Practice)
const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user3.address?.city); 
console.log(user3.job?.title); 

// Prevent runtime error
const deepObj = {};
console.log(deepObj.a?.b?.c); 

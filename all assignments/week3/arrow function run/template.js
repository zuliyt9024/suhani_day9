//question-15
// a) Template literals
const username = "Alex";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);

// b) Object shorthand
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

// c) Arrow function shorthand
const getFullName = (first, last) => `${first} ${last}`;

console.log(student);
console.log(getFullName("John", "Doe"));
student.greet();


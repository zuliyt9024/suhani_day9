//question-13
// a) Scoping Example

if (true) {
  let x = 10;
  var y = 20;
}

console.log("Value of y (var):", y); 
try {
  console.log("Value of x (let):", x); 
} catch (error) {
  console.log("Error accessing x:", error.message);
}


// b) Optional Chaining Example

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log("Email:", profile.user?.details?.email); 
console.log("Phone:", profile.user?.details?.phone); 

// c) Optional Chaining Prevent Runtime Error

const data = {
  settings: {
    theme: "dark"
  }
};

console.log("Layout mode:", data.settings?.layout?.mode); 

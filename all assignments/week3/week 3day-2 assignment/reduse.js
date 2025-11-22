///question-13

const products =["electronics","clothing", "electronics", "toys", "clothing", "toys"];
const countproducts =products.reduce((acc,item)=>{
     acc[item]=(acc[item]|| 0)+1;
     return acc;
}, {});
console.log(countproducts);
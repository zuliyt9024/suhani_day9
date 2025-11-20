// question-13

const people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: { name: "Broadway", number: 123 }
    }
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 }
    }
  }
];

const res=people.map((item)=>{
    // console.log(`${item.address.city}`
    console.log(`${item.name} lives in ${item.address.city} on ${item.address.street.name }  ${item.address.street.number}`)
})


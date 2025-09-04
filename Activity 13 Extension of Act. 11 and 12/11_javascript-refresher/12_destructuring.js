const person = {
  name: "Elmer",
  age: 20
};

const { name, age } = person;
console.log(name, age);

const hobbies = ["reading", "coding"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

function printName({ name }) {
  console.log(name);
}
printName(person);
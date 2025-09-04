const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

const user = { name: "Elmer", age: 20 };
const newUser = { ...user, hobby: "coding" };
console.log(newUser);

function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));
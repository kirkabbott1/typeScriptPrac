console.log("it works");

enum Color {
  Gray,
  Green =100,
  Blue
}

let myColor: Color = Color.Blue;
// console.log(myColor);

const multiplyNumbers = (number1: number, number2: number) => console.log(number1);
multiplyNumbers(5, 10);

// rest & spread
console.log("reast and spread");
const numbers = [1, 5, 99, -5];
console.log(Math.max(...numbers));

function makeArray(name: string, ...args: number[]) {
  return {name, args};
}
console.log(makeArray("kirk", 2,3,4,5));

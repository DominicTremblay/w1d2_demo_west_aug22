// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.


// get command-line arguments => process.argv
const args = process.argv.slice(2);
console.log("args:", args);

// Edge case: check if there are at least 2 command-line arguments


// define an accumulator => keeping track of the sum
let total = 0;

// iterate through the command-line arguments
// c-style loop => (let i=0; i < args.length; i++) {} => less readable
// forEach loop => forEach((el,index) => {}) => index, break, continue do not work
// for of loop => for (let nb of args) {} => no index

for (let nb of args) {
  // typecasting a value => convert the string into a number
  total += Number(nb);
  console.log("nb", nb, "total:", total, "type:", typeof nb);
}


// Edge case: check if args is a number
// Edge case:  if it's not an number throw an error

// Edge case: check if the number is a whole number

// print out the sum

console.log("Total:", total)

const expenses = [
  { description: 'Groceries', amount: 20 },
  { description: 'Gas', amount: 40 },
  { description: 'Dinner', amount: 60 },
  { description: 'Movie', amount: 30 },
];
// (i) For loop
console.log("(i): Using for loop:");
for (let i = 0; i < expenses.length; i++) {
  console.log(`Expense: ${expenses[i].description}, Amount: ${expenses[i].amount}`);
}
// (ii) forEach method
console.log("\n(ii): Using forEach method:");
expenses.forEach(expense => {
  console.log(`Expense: ${expense.description}, Amount: ${expense.amount}`);
});
// (iii) for...of loop
console.log("\n(iii): Using for...of loop to print descriptions:");
for (const expense of expenses) {
  console.log(expense.description);
}
// (iv) map method
console.log("\n(iv): New array with only amounts:");
const amountsArray = expenses.map(expense => expense.amount);
console.log(amountsArray);
// (v) filter method
console.log("\n(v): New array with amounts >= 30:");
const filteredExpenses = expenses.filter(expense => expense.amount >= 30);
console.log(filteredExpenses);
// (vi) reduce method
console.log("\n(vi): Total amount of all expenses:");
const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
console.log(totalAmount);
// (vii) Chained map, filter, and reduce methods
console.log("\n(vii): Final result of chained operations:");
const finalResult = expenses
  .map(expense => expense.amount * 2)
  .filter(amount => amount > 60)
  .reduce((total, amount) => total + amount, 0);
console.log(finalResult);













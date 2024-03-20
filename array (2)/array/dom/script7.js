let hereIsMyDiv = document.getElementById("FirstDiv")
console.log(hereIsMyDiv, "here is my div");
// querySelector()

let querySelectorExample = document.querySelector(".para")
console.log(querySelectorExample, "query selector");

// querySelectorAll()
let querySelectorAllExample =document.querySelectorAll(".para")
console.log(querySelectorAllExample);

// getElementsByClassName()

let getElementsByClassNameExample = document.getElementsByClassName(".heading2")
console.log(getElementsByClassNameExample);

// getElementsByName() 
let getElementsByNameExample = document.getElementsByName("textInput")
console.log(getElementsByNameExample);

// ForEach:The forEach method is available for arrays in JavaScript and allows you to iterate over
//  each element of the array.
// For...of Loop:The for...of loop is introduced in ECMAScript 2015(ES6) and provides a
//  more concise way to iterate over iterable objects, including arrays.

// Map Method:The map method creates a new array by applying a function to each element of the original array.


// .map(function (currentValue, index, array) {
// return element for newArray
// });

// The reduce method reduces an array to a single value by applying a function to each element and
// accumulating the results

// reduce(function (accumulator, currentValue, index, array) {
// return the updated accumulator.It takes an array and a callback function as arguments, and it returns a single value
// }, initialValue);

// The reduce() method in JavaScript is a higher-order function that iterates over all elements in an array, 
// accumulating them into a single value.






// For loop


// for(initial , condition , increment/decrement){

// }
// for (let index = 0; index < item.length; index++) {
  
    
// }

// ForEach

let listItems = ["item 1 ", "item 2", "itm 3", "item 4", "item 5"] // 252
listItems.forEach(element => {
    console.log(element);
});
// For of Loop  
for (const items of listItems) {
    console.log(items, "for of loop example");
}

// Map method 


console.log(listItems.map((item , index)=>{
    return ` ${item} - ${index}`
    // return item
}));


const stdOject = [
    {name: "umar", section: 2 },
    { name:  "shagufta" , section: 2},
   { name: "mehnaz", section: 1},
   { name : "saima", section: 2}
]

console.log(stdOject);
let section1Stds = stdOject.filter((std)=>{
    return std.section === 2
}).map((section1)=>{
    return ` ${section1.name} -  section: ${section1.section}`
})
console.log(section1Stds, "std name");
let section2Stds = stdOject.filter((std)=>{
    return std.section === 1
}).map((section2)=>{
    return ` ${section2.name} - section: ${section2.section}`
})

console.log(section2Stds, "std name");


//  reduce(function (accumuator, currentValue) {
   
//  }, initialValue);


 let num1 = [2,3,4,6,9,10,13]

 let reduceExample = num1.reduce((accumuator, num1)=>{
    return accumuator + num1
 }, 10)

 
console.log(reduceExample, "reduce example");
 let reduceExample2 = num1.reduce((accumuator, num1)=>{
    return accumuator + num1
 }, 0)
console.log(reduceExample2, "reduce example");


// . indexOf():
// Definition: Returns the first index at which a given element is found in the array, or - 1 
// if it is not present.

// 5. unshift():
// Definition: Adds one or more elements to the beginning of an array and returns the new length of the array.

// 7. slice():
// Definition: Extracts a section of an array and returns a new array.

// 8. splice():
// Definition: Changes the contents of an array by removing or replacing existing elements and 
// / or adding new elements.
// find():
// Definition: Returns the first element in an array that satisfies a provided testing function.

// filter()
4,10

// indexof()


let webDevStudents= ["shakeela", "mehnaz", "daniyal", "umar", "umair", "ilyas"];
console.log(webDevStudents.indexOf("umar"));
console.log(webDevStudents.length);

// unshift()
console.log(webDevStudents.unshift("hasnain", "farhan"));
console.log(webDevStudents);

//  slice() [start , end ]
console.log(webDevStudents.slice(1,4))

// splice() [start, delete , end]

console.log(webDevStudents.splice(4,0, "saima", "Ilyas Ahmed"));
console.log(webDevStudents);

// find()

let alphabets = ["a","b","c","d","e","c","f","c"]
let findExample = alphabets.find((index)=>{
    return index === "c"
})
console.log(findExample , "find example");


// find((index)=>{

// })

// filter()

filterExample = alphabets.filter((index)=>{
    return index === "c"
})
console.log(filterExample, "FILTER EXAMPLE");












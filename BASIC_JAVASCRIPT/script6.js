// For loop


// for(initial , condition , increment/decrement){

// }
// for (let index = 0; index < item.length; index++) {
//     const element = item[index];
//     console.log(element);
//     console.log(element.length);
    
// }

// ForEach

let listItems = ["item 1 ", "item 2", "itm 3", "item 4", "item 5"]
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
}));






















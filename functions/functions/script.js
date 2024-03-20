function functionName(){
    let name = "ALI"
    console.log(name);
    // block of code ya statement
}

 
functionName();



// Function Expression

let name = function myName(){
    let lName = "AHMAD"
    console.log(lName);
}
console.log(name());



// Function Parameters and Arguments

function sumOfTwoNumbers(a, b ) {  // a = 2, b= 10 2 +  10  = 12
    return a + b
}

console.log(sumOfTwoNumbers(2,10));


function stdGrades(marks){
    if (marks >= 40 && marks <=50) {
        return "C"
    } else if(marks > 50 && marks <= 60 ) {
        return "B"
    } else if(marks > 80 && marks <= 95 ) {
        return "A+"
    } else{
        console.log("sorry you're fail!");
    }


}

console.log(stdGrades(35));

// 1. Check weather conditions
let isSunny = true;
let isRainy = false;
let isCloudy = true;

if (isRainy || isCloudy) {
    console.log("Bring an umbrella");
}

if (isSunny && !isRainy) {
    console.log("Enjoy the sunshine");
}

// 2. Check eligibility to vote
let age = 20;

if (age > 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

// 3. Recommend clothing based on weather
let weather = "sunny";

if (weather === "sunny") {
    console.log("Recommend wearing light clothing");
} else if (weather === "rainy") {
    console.log("Recommend bringing an umbrella");
} else if (weather === "cold") {
    console.log("Recommend wearing a jacket");
}

// 4. Print corresponding day of the week
let day = 5;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input");
}

// 5. Function to check even or odd
function checkEvenOdd(number) {
    if (typeof number !== "number" || !Number.isInteger(number)) {
        return "Invalid";
    }
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(7)); // Example usage

// 6. Higher order function with callback
function greetUser(name, callback) {
    callback(name);
}

function sayHello(name) {
    console.log("Hello, " + name + "!");
}

greetUser("User", sayHello); // Example usage

// 7. Array operations
let favoriteFruits = ["apple", "banana"];
console.log(favoriteFruits[1]); // Print second element

console.log(favoriteFruits.length); // Number of elements

let additionalFruits = ["orange", "kiwi"];
let allFruits = favoriteFruits.concat(additionalFruits); // Concatenation

favoriteFruits.push("pear"); // Add new fruit to the end
console.log(favoriteFruits);

favoriteFruits.pop(); // Remove last element
console.log(favoriteFruits);

favoriteFruits.shift(); // Remove first element
console.log(favoriteFruits);

favoriteFruits.unshift("grapes"); // Add "grapes" to beginning
console.log(favoriteFruits);
// defining variables and assigning values
let firstName = "Susan";
let surname = "Sun";
let age = 20;
let numb1 = 25;
let numb2 = 9;
let additionResult = numb1 + numb2;
let subtractResult = numb1 - numb2;

// return the output to the console
console.log(firstName + " " + surname + " is " + age + " years old.");
console.log(numb1 + " + ", numb2 + " = ", additionResult);
console.log(numb1 + " - ", + numb2 + " = ", subtractResult);

// changing the value of the variables
firstName = "John";
age = 25;
console.log("the new name is " + firstName);
console.log("the new age is " + age);

// creating an array 
let weather = ["sun", "rain", "snow", "wind", "fog", "cloud"];

// accessing and outputing the second and thir items of the array
console.log("the 2nd value of the array is: " + weather[2]);
console.log("the 3rd value of the array is: " + weather[3]);

// create a variable that stores a player's score
let playerScore = 0;

// create a function that adds one to the playerScore variable whenever the function is called
function addingScore() {
    return playerScore + 1;
}

// create a function that displays the player's score
function displayScore() {
    return "Player's score: " + addingScore(); // playerScore++
}

console.log(displayScore());

// a variable to output the message
var message;

// check if the playerScore value is odd or even
function isEven(displayScore) {
    if (displayScore % 2 == 0) {
        return message = "This value is even.";
    }
    else {
        return message = "This value is odd.";
    }
}

console.log("the value of the player's score is: " + displayScore() + ". " + isEven());




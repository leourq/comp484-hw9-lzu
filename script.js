// Part 1: Date Display

// get the current date
let today = new Date();

// get the month, day, and year
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

// add a zero if the month or day is a single digit
if (month < 10) {
    month = "0" + month;
}

if (day < 10) {
    day = "0" + day;
}

// creates the date message
let dateMessage = "Today is " + month + "/" + day + "/" + year;

// displays the date on the webpage
document.getElementById("dateOutput").textContent = dateMessage;





// Part 2: Number Conversion and Validation

// creates four string variables
let value1 = "7";
let value2 = "200.5";
let value3 = "hi";
let value4 = "360";

// converts each string into a number
let number1 = Number(value1);
let number2 = Number(value2);
let number3 = Number(value3);
let number4 = Number(value4);

// checks if each value is NaN or an integer
let result1 = "Original: " + value1 + " | Converted: " + number1 +
    " | isNaN: " + Number.isNaN(number1) +
    " | isInteger: " + Number.isInteger(number1);

let result2 = "Original: " + value2 + " | Converted: " + number2 +
    " | isNaN: " + Number.isNaN(number2) +
    " | isInteger: " + Number.isInteger(number2);

let result3 = "Original: " + value3 + " | Converted: " + number3 +
    " | isNaN: " + Number.isNaN(number3) +
    " | isInteger: " + Number.isInteger(number3);

let result4 = "Original: " + value4 + " | Converted: " + number4 +
    " | isNaN: " + Number.isNaN(number4) +
    " | isInteger: " + Number.isInteger(number4);

// displays all four results 
document.getElementById("numberConversionOutput").innerHTML =
    "<p>" + result1 + "</p>" +
    "<p>" + result2 + "</p>" +
    "<p>" + result3 + "</p>" +
    "<p>" + result4 + "</p>";





// Part 3: Math and Number Formatting

// three grade scores
let grade1 = 80;
let grade2 = 90;
let grade3 = 50;

// calculate the total and average
let totalScore = grade1 + grade2 + grade3;
let averageScore = totalScore / 3;

// displays the results 
let mathResults = "<p>Grade 1: " + grade1 + "</p>" +
    "<p>Grade 2: " + grade2 + "</p>" +
    "<p>Grade 3: " + grade3 + "</p>" +
    "<p>Total Score: " + totalScore + "</p>" +
    "<p>Average Score: " + averageScore.toFixed(2) + "</p>";

document.getElementById("mathOutput").innerHTML = mathResults;





// Part 4: Conditional Messages

// checks if the third converted value is valid
let validationMessage;

if (Number.isNaN(number3)) {
    validationMessage = "The third value is not a valid number.";
} else {
    validationMessage = "The third value is a valid number.";
}

// checks if the average grade is passing
let gradeMessage;

if (averageScore >= 70) {
    gradeMessage = "The average grade is passing.";
} else {
    gradeMessage = "The average grade is not passing.";
}

// displays the messages 
document.getElementById("numberConversionOutput").innerHTML +=
    "<p>" + validationMessage + "</p>";

document.getElementById("mathOutput").innerHTML +=
    "<p>" + gradeMessage + "</p>";
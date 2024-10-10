document.write("<h1>Chapter 14-16</h1>");


// Question : 01 Declare an empty array using JS literal notation to store
// student names in future.

let studentNames = [];

// Question : 02 Declare an empty array using JS object notation to store
// student names in future.

 studentNames = new Array();

// Question : 03 Declare and initialize a strings array.

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Question : 04 4. Declare and initialize a numbers array.
 
let numbers = [10, 20, 30, 40, 50];

// Question : 05  Declare and initialize a boolean array.


let booleanArray = [true, false, true, false, true];

// Question : 06 . Declare and initialize a mixed array.

var mixedArray = [42, "Hello", true, null, 3.14];

// // Question : 07 Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


document.write("<h2>Question 07:</h2>");


// Declare and initialize the array
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Display the heading
document.write("<h3>Available Education Qualifications in Pakistan:</h3>");

// Display the list of qualifications
document.write("<ul>");

// Loop through the array and display each qualification
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + (i + 1) + ". " + qualifications[i] + "</li>");
}

// Close the unordered list
document.write("</ul>");


// Question 08 : Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

document.write("<h2>Question 08:</h2>");


// Store student names in an array
let studentNames1 = ["Laiba", "Zunaira", "Eman"];

// Store scores of the students in another array
let scores = [400, 350, 450]; // Assume these are the scores out of 500

// Total marks for each student
let totalMarks = 500;

// Displaying the results
document.write("<h2>Student Scores and Percentages</h2>");
document.write("<table border='1'><tr><th>Student Name</th><th>Score</th><th>Percentage (%)</th></tr>");

// Loop through the students and display their names, scores, and percentages
for (let i = 0; i < studentNames1.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100; // Calculate percentage
    document.write("<tr><td>" + studentNames1[i] + "</td><td>" + scores[i] + "</td><td>" + percentage.toFixed(2) + "</td></tr>"); // Display in table format
}

// Close the table
document.write("</table>");


// Question : 09 Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired
// position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

document.write("<h2>Question 09:</h2>");
document.write("<h3>Color Array Manipulation</h3>");

        // Initialize the array with color names
        var colors = ["Red", "Green", "Blue", "Yellow"];
        document.write("<p>Initial colors: " + colors.join(", ") + "</p>");

        // a. Ask the user to add a color at the beginning
        var firstColor = prompt("What color do you want to add to the beginning?");
        colors.unshift(firstColor);
        document.write("<p>Colors after adding at the beginning: " + colors.join(", ") + "</p>");

        // b. Ask the user to add a color at the end
        var lastColor = prompt("What color do you want to add to the end?");
        colors.push(lastColor);
        document.write("<p>Colors after adding at the end: " + colors.join(", ") + "</p>");

        // c. Add two more colors to the beginning
        colors.unshift("Purple", "Orange");
        document.write("<p>Colors after adding two more at the beginning: " + colors.join(", ") + "</p>");

        // d. Delete the first color in the array
        colors.shift();
        document.write("<p>Colors after deleting the first color: " + colors.join(", ") + "</p>");

        // e. Delete the last color in the array
        colors.pop();
        document.write("<p>Colors after deleting the last color: " + colors.join(", ") + "</p>");

        // f. Ask the user for an index to add a color
        var indexToAdd = prompt("At which index do you want to add a color?");
        var colorToAdd = prompt("Enter the color name to add:");
        colors.splice(indexToAdd, 0, colorToAdd);
        document.write("<p>Colors after adding color at index " + indexToAdd + ": " + colors.join(", ") + "</p>");

        // g. Ask the user for an index and how many colors to delete
        var indexToDelete = prompt("At which index do you want to delete color(s)?");
        var numberToDelete = prompt("How many colors do you want to delete?");
        colors.splice(indexToDelete, numberToDelete);
        document.write("<p>Colors after deleting " + numberToDelete + " color(s) from index " + indexToDelete + ": " + colors.join(", ") + "</p>");

//Question 10 : Write a program to store student scores in an array & sort the array in ascending order 
// using Array’s sort method.

document.write("<h2>Question 10:</h2>");


document.write("<h3>Student Scores Sorting</h3>");

  
        // Step 1: Store student scores in an array
        var studentScores = [85, 92, 76, 88, 95, 69, 73, 91];

        // Step 2: Sort the array in ascending order
        studentScores.sort(function(a, b) {
            return a - b; // For ascending order
        });

        // Step 3: Display the sorted scores in the browser
        document.write("<p>Sorted Student Scores: " + studentScores.join(", ") + "</p>");
 
 //Question 11 : Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

document.write("<h2>Question 11:</h2>");

document.write("<h3>Selected Cities</h3>");

 // Step 1: Initialize an array with city names
 var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio"];

 // Step 2: Copy 3 array elements from cities array to selectedCities array
 var selectedCities = [];
 selectedCities.push(cities[0]); // Copy first city
 selectedCities.push(cities[1]); // Copy second city
 selectedCities.push(cities[2]); // Copy third city

 // Step 3: Display the selected cities
 document.write("<p>Selected Cities: " + selectedCities.join(", ") + "</p>");

 // Question 12 : Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

document.write("<h2>Question 12:</h2>");

document.write("<h3>Joined String</h3>");

 // Step 1: Initialize the array
 var arr = ["This ", "is ", "my ", "cat"];

 // Step 2: Create a single string using the join method
 var joinedString = arr.join(""); // Join with no separator

 // Step 3: Display the result
 document.write("<p>" + joinedString + "</p>");


 //Question: 13  Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


document.write("<h2>Question 13:</h2>");

document.write("<h3>FIFO-First In First Out</h3>");

let computerParts = ["keyboard", "mouse", "printer" , "monitor"];

document.write("<h4>Devices : </h4> " +computerParts );

let fristOut = computerParts.shift();
document.write("<h5>Out :</h5> " +fristOut );

fristOut=computerParts.shift();
document.write("<h5>Out :</h5> " +fristOut );

fristOut=computerParts.shift();
document.write("<h5>Out :</h5> " +fristOut);

fristOut=computerParts.shift();
document.write("<h5>Out :</h5> " +fristOut );

//Question : 14 Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

document.write("<h2>Question 14:</h2>");

document.write("<h3>Last InFirst Out</h3>");

computerParts = ["keyboard", "mouse", "printer" , "monitor"];

document.write("<h4>Devices : </h4> " +computerParts );

let newArray = computerParts.pop();
document.write("<h5>Out :</h5> " +newArray);

newArray = computerParts.pop();
document.write("<h5>Out :</h5> " +newArray );

newArray = computerParts.pop();
document.write("<h5>Out :</h5> " +newArray );

newArray = computerParts.pop();
document.write("<h5>Out :</h5> " +newArray );


//Question : 15 Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

document.write("<h2>Question 15:</h2>");

document.write("<h3>Select Your Phone Manufacturer</h3>");

// Step 1: Store phone manufacturers in an array
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Step 2: Create a dropdown/select menu
document.write("<select>");

// Step 3: Loop through the manufacturers and create an option for each
for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
}

document.write("</select>"); 



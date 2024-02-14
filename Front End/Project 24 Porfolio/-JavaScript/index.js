// -----freecodeamp.org javascript course -----
// javascript starts its way at the top and work its way downward (when reading)

// document.getElementById("count").innerText = 5
// change the count el i the html to refelct the new count

// camelCase
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el"); // passsing an arguement
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

console.log("Lets count the people who are entering the subway");

// recap of what you have learned so far -
// script tags, variables. number, strings, console.log(), functions, the document object model (DOM), document.GetElementById ad pasing the element in as a string, innerText, textContent

/*
let count = 5;
let count = count + 5;
console.log(count);
*/

// create a a variable, bonusPoints. Initialize it as 50. Increase it to 100
// decrease it down to 25, and the finally indrease it to 70
// console.log the value each step

let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints = bonusPoints + 50;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
console.log(bonusPoints);

bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

// in index.html
// listen for clicks on the increment button
// increment the count variabkl when the button is clicked
// change the count-el in the html to reflect the new count

function increment() {
  console.log("The button was clicked");
}

// Setting up the race
function countdown() {
  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
  console.log(1);
}

countdown();

// Go!
// players are running the race
// race is finished!
// get ready for a new race

// create a function (you decide the name) that logs out the number 42 to the console
// call/invoke the function
function boardLogger() {
  console.log(42);
}

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// //create a function that logs out the sum of all the lap times
function logLapTotal() {
  let totalTime = lap1 + lap2 + lap3;
  console.log(totalTime);
}
console.log(logLapTotal);

logLapTotal();
let lapsCompleted = 0;

// create a function that increments the lapsCompleted varriable with one
// run it three times

function incrementLap() {
  lapsCompleted = lapsCompleted + 1;
}
incrementLap();
incrementLap();
incrementLap();

console.log(lapsCompleted);

let username = "per";
let messsage = "you have three new notifications";

let messageToUser = messsage + "," + username + "!";

console.log(username + "" + message + "!");
console.log(messageToUser);

//variable practice
// create two variables, firstName and lastName
let firstName = "Lee";
let lastName = "Coper";
//concatenate the two cariable into a third variable called fullName
let fullName = firstName + "" + lastName;
//log fullName to the console
console.log(fullName);

// create a fucntion that log out "hi ther linda! when called"
function greetLinda() {
  console.log(greetLinda + "," + name + "!");
}
greetLinda();

// incrementing and decrementing
// create two functions, add3Points() and remove1Point(), and have them annd/remove points to/from the myPoints variable
let myPoints = 3;
function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints += 1;
}

add3Points();
add3Points();
add3Points();
remove1Point;
remove1Point;

// call the functions to that the line below logs out 10
console.log(myPoints);

// strings and numbers repetitions
// try to predict what each of the lines will log out
console.log("2" + 2); // "22"
console.log(11 + 7); // 18
console.log(6 + "5"); // "65"
console.log("My Points" + 5 + 9); // "My Points: 59"
console.log(2 + 2); // 4
console.log("11" + "14"); // "1114"

// imagine that you are working on an ecccomerce website that sells shoes
// when the user clicks the purcchase button, rendor out
// "something went wrong, pleas try again" in the paragraph
// that has the id="error"

let errorParagraph = document.getElementById("error");
console.log(errorParagraph);

function purchase() {
  console.log("button was clicked");
  errorParagraph.textContent = "something went wront, please try again";
}

// if else statement pracitice with age

let age = 21;

if (age <= 20) {
  console.log("You can not enter the nightclub!");
} else {
  console.log("Welcome to the nightclub!");
}

//more if else practice

let yourage = 150;

if (yourage < 100) {
  console.log("you are not eligible");
} else if (yourage === 100) {
  console.log("here is your birthday card from the kinds");
} else {
  console.log("not eligible, you have already gotten one");
}

// practice with arrays - the first item of the array is a [0] index ans so on...

let featuredPosts = [
  "Check out my netflix clone",
  "Here is code for my project",
  " I've just relaunched my portfolio",
];
// if logged out featureedPost.lenght the output will be a 3

let skateTricks = ["kickflip", "ollie", "360 flip"];

let experience = [
  "Pizza Delivery Driver",
  "Landscape Designer at MowGreen",
  "Straight A student at Noralk Community College",
];

let goals = [
  "become financially free",
  "start a family",
  "become a major devloper in the tech space",
  "make a maximum of 3 million",
];

for (let i = 0; i < 5; i += 1) {
  console.log(goals);
}

// do not be dry, meeaning do no repeat yourself
console.log(featuredPosts[2]);
console.log(skateTricks[2]); // 360 flip
console.log(experience[2]); // Landscape Designer at MowGreen
console.log(goals[1]); // start a family

// array  - ordered list fof items = composite / complex data types
// create an array that describes yourself. Use the three primitive data types that you bave learned
// it should contain your name, age, number, and whether you like to skate or not (boolean)

let about = ["Lee Cooper", 22, true];

console.log("hello!");

about.push(24); // method or function on an object (similar to about.push)
console.log(about);

let brands = [7, 4, 8];
brands.push(9);

let messages = [
  "how is it going",
  "im great how are you",
  "all good, been coding a lot recently",
];

let newMessage = "same here!";

messages.push(newMessage); // pushed the new method to the array (same here!)
console.log(messages);

// how you can remove the last item in an array! google it

messages.pop(); // removes the last item in an array

console.log(messages);

// counting to ten in javascript! (using for loops)

// we need to specify
// where is the finish line?
// what's the step size we should usee?

//   start.        finish.      step size
for (let count = 1; count < 21; count += 1) {
  console.log(count);
}

// loop practice
// in this case the for loop is counting to 5, starting from 1, counting 1 at a time (rate)

for (let i = 0; i < 6; i += 1) {
  console.log(i);
}

// create a for loop that counts from 10 to 100 in steps of 10
// use console.log to log out the number

for (let i = 10; i < 101; i += 10) {
  console.log(i);
}

// combining for loops and arrays

let card = [7, 3, 9, 4, 6];

// creeate a for loop that logs out all the cards in the array
// use cards.length to specify how long the loop should run

for (let i = 0; i < card.length; i++) {
  console.log(card);
}
// this prints all of the items in the array

let sentence = ["hello ", "my ", "name ", "is ", "lee "];
let randomEl = document.getElementById("random-el"); //just a placeholder

// render the sentence in the random-el paragraph using a for lop and .textContent

for (let i = 0; i < sentence.length; i++) {
  randomEl.textContent += sentence[i];
}
// this wil print the sentence

let player1Time = 105;
let player2Time = 102;

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

let fastestRace = getFastestRaceTime();
console.log(fastestRace);

// write a function that returns the totoal race time
// call.invoke the function and store the returned calue in a new variable/
// finally lof the variable out
function getTotalRaceTime() {
  return player1Time + player2Time;
}

let totalTime = getTotalRaceTime();
console.log(totalTime); // we would get 207 to return to the console

// what does math.random() do?
// your answer: it generates a random number between 0 and 1 (not including 1) ex: 0.0012314235

let randomNumber = Math.random() * 6;
console.log(randomNumber);
// math.random * 6 will give us a number from: 0 to 5.9999999

let flooredNumber = math.floor(27.3333);
console.log(flooredNumber);
// what does math.floor do to positive numbers
// your answer: it will remove the decimals from the number

// combining math.floor and math.random

// let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber); - this will return any number from 1-6

// using logical operators && || -> or opeerator

let hasCompletedCourse = true;
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate == true) {
  givesCertificate();
}

function generateCertificate() {
  console.log("Generating your certificate......");
}

let hasSolvedChallenge = false;
let hasHintsLeft = false;

// create an if statement that checks that both variables are false
// if so, run the showSolution() function

if (hasSolvedChallenge == true || givesCertificate === true) {
  showSolution();
}

function showSolution() {
  console.log("Showing the solution....");
}

// create two boolean variables, likesDocumenteries and likesstartups
// use an OR (||) statement to call recommenedMovie if either of those variable are true

let likesDocumenteries = true;
let likesstartups = true;

if (likesDocumenteries === true || likesstartups === true) {
  recommendMovie();
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!");
}

// intro to objects - objects store data in depth - composite / complex data type
// key calue pairs

let course = {
  title: "learn css grids for free",
  lessons: 16,
  creator: "Lee Cooper",
  length: 60,
  level: 0 - 3,
  isFree: true,
  tags: ["html", "css"],
};

// the dot notation to refer to an object
console.log(course.length); // logs 60 to the console
console.log(course.tags); // logs out the tag array - bracket notation has certain use cases

// create an object that represents an dairbnb castle listing
// it should contain at least one boolean, one string, one number, and one array
// log out at least two of the keys using dot notation

let castle = {
  title: "live like a king",
  price: 190,
  isSuperhost: true,
  images: ["img/castle1.png", "img/castle2.png"],
};

console.log(castle.price); // prints 190
console.log(castle.isSuperhost); // prints true - boolean value

// extra practce !!!
// creata a person object that contains three keys: name, age, and country.
// use youself as an example to set the values for name, age, and country

// create a function, logData(), that uses the person object to create a
// string in the following format:
// "lee is 22 years old and lives in connecticut"

// call teh logData() function to verify that it works

let person = {
  name: "Lee Cooper",
  age: 22,
  country: "United States",
};

function logData() {
  console.log(
    person.name + " is " + person,
    age + " years old and lives in the " + person.country
  );
}

console.log(logData);

// practicing if else statements (keep coding!!!!!)

let yearsWorked = 20; // based on

if (yearsWorked < 6) {
  console.log(
    "You need to find something that you are good at and stick with it (niche)"
  );
} else if (yearsWorked < 10) {
  console.log(
    "You have found the job you want but need to have at least 10 years of experience to be considered an expert"
  );
} else if (yearsWorked === 10) {
  console.log(" Congrats, you are at a high level in your field");
} else if (yearsWorked > 10) {
  console.log(
    "You have reached a point in your career where you may start to feel a little burnt out, its though becasue you have earned a little more thatn half a million dollars"
  );
}

// using for loops to log the follwing to the console:
// the 5 largest countries in the world - china, india, unites states, indonesia, pakistan

let largeCountries = [
  "China",
  "India",
  "United States",
  "Indonesia",
  "Pakistan",
];

for (let i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i]);
}

largeCountries.pop(0); // removes the first item in the array (0)
largeCountries.push("Africa"); // replaces pakistan with africa
largeCountries.shift();
largeCountries.unshift("China");

// use push() and pop() and their counterparts unshift() & shift() google how to use unshift and shift

// practice using logical operators

let dayOfMonth = 13;
let weekday = "Friday";

// if it is friday the 13th log out - this day might be creepy
// use the logical and operator -> &&

if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("this day might be creepy");
}

// the difference between const and let in javascript

let myName = "lee";
const credits = 45;

credits = credits - 10;

// if possible, us const, if no use let. (if the variable is reassigned, it must stay a let, otherwise it can be a const)
// which vvariables below shpuld be changes from let to const?
//the customer wants to order some stuff, here are some of the details:
const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 Days";

// it turns out to be a bit more comples
shippingCost = 15;
shippingTime = "7-14 Days";

//calculate the full price
const fullPrice = basePrice - discount + shippingCost;

// now we notify the cusstomer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime);

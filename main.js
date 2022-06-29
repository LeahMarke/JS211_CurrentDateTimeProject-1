// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.
const numToString = () => {
  let num = 15;
  let text = num.toString();
  console.log(text, num);
  document.getElementById(
    "num-to-str"
  ).innerHTML = `The typeof ${text} is ${typeof text}`;
};

// Write a JavaScript program to convert a string to the number.
const stringToNum = () => {
  let string = "25";
  let newNumber = Number(string);
  console.log(string, newNumber);
  document.getElementById(
    "str-to-num"
  ).innerHTML = `The typeof ${newNumber} is ${typeof newNumber}`;
};
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
const diffDataTypes1 = () => {
  let dataType = true;
  let whatType = typeof dataType;
  console.log(dataType, whatType);
  document.getElementById(
    "different-datatypes-1"
  ).innerHTML = `The typeof ${dataType} is ${whatType}`;
};
// * Null
const diffDataTypes2 = () => {
  let dataType = null;
  let whatType = typeof dataType;
  console.log(dataType, whatType);
  document.getElementById(
    "different-datatypes-2"
  ).innerHTML = `The typeof "dataType;" is ${whatType}`;
};

// * Undefined
const diffDataTypes3 = () => {
  let dataType;
  let whatType = typeof dataType;
  console.log(dataType, whatType);
  document.getElementById(
    "different-datatypes-3"
  ).innerHTML = `The typeof "let dataType;" is ${whatType}`;
};

// * Number
const diffDataTypes4 = () => {
  let dataType = 30;
  let whatType = typeof dataType;
  console.log(dataType, whatType);
  document.getElementById(
    "different-datatypes-4"
  ).innerHTML = `The typeof ${dataType} is ${whatType}`;
};

// * NaN
const diffDataTypes5 = () => {
  let dataType = 0 / 0;
  let whatType = typeof dataType;
  console.log(dataType, whatType);
  document.getElementById(
    "different-datatypes-5"
  ).innerHTML = `The typeof 0/0 is ${dataType}`;
};

// * String
const diffDataTypes6 = () => {
  let dataType = "30";
  let whatType = typeof dataType;
  console.log(dataType, whatType);
  document.getElementById(
    "different-datatypes-6"
  ).innerHTML = `The typeof "${dataType}" is ${whatType}`;
};

// Write a JavaScript program that adds 2 numbers together.
const addTwoNum = () => {
  let x = 2;
  let y = 3;
  let sum = x + y;
  console.log(sum);
  document.getElementById(
    "add-two-num"
  ).innerHTML = `The sum of ${x} plus ${y} is ${sum}`;
};

// Write a JavaScript program that runs only when 2 things are true. && and
const bothAreTrue = () => {
  let x = 1;
  let y = 10;
  if (x >= 1 && y >= 1) {
    console.log(true);
    document.getElementById("both-true").innerHTML = true;
  }
};
// Write a JavaScript program that runs when 1 of 2 things are true.|| or
const oneIsTrue = () => {
  let x = 1;
  let y = 10;
  if (x >= 5 || y >= 5) {
    console.log(true);
    document.getElementById("one-is-true").innerHTML = true;
  }
};

// Write a JavaScript program that runs when both things are not true.
const bothAreFalse = () => {
  let x = 1;
  let y = 10;
  if (x !== "1" && y !== "10") {
    console.log("both are false");
    document.getElementById("both-false").innerHTML = "Both are false";
  }
};
// ***************************
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24

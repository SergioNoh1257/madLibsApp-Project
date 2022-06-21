"use strict";

//Questions and data for ask to user
let questionArray = [
  "enter an age",
  "enter a number",
  "enter an Internet Forum name",
  "enter a name of a special character",
  "enter a lower number than question 2",
  "enter an action"
];
let userInputs = [];
let numberOfQuestions = 6;
let questionCounter = 0;

// Loop for ask to user
for (let i = numberOfQuestions; i > 0; i--)
{
  userInputs.push(prompt("Please " + questionArray[questionCounter] + `, ${i} questions left`));
  questionCounter++;
}

// History
let originalStory = `<h2>Once upon a time there was a ${userInputs[0]} year old programmer who was debugging a bug on line ${userInputs[1]} of his code.<h2>

<h2>He searched that line but found nothing.</h2>

<h2>He researched on the Internet, asked in ${userInputs[2]} to be able to solve his problem but nobody found his mistake.</h2>

<h2>Until he discovered that a ${userInputs[3]} caused an error on line ${userInputs[4]} and that broke the code, he solved it and seeing that it worked, he was happy and went to ${userInputs[5]} to celebrate.</h2>`
;

alert("All done!, Ready for your totally-acurate, not-all confusing history?");

// Write History
console.log(originalStory);
document.write(originalStory);

/* Original Story

Once upon a time there was a 15 year old programmer who was debugging a bug on line 45 of his code.

He searched that line but found nothing.

He researched on the Internet, asked in forums to be able to solve his problem but nobody found his mistake.

Until he discovered that a semicolon caused an error on line 20 and that broke the code, he solved it and seeing that it worked, he was happy and went to buy a coffee to celebrate.

*/

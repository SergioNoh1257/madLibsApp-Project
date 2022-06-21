"use strict";

let userInputs = [];

//Original Story
let originalStory = `Once upon a time there was a ${userInputs[0]} year old programmer who was debugging a bug on line ${userInputs[1]} of his code.

He searched that line but found nothing.

He researched on the Internet, asked in ${userInputs[2]} to be able to solve his problem but nobody found his mistake.

Until he discovered that a ${userInputs[3]} caused an error on line ${userInputs[4]} and that broke the code, he solved it and seeing that it worked, he was happy and went to ${userInputs[5]} to celebrate.`;

// Number of questions and description
let numberOfQuestions = 6;
let questionArray = [
  "enter a age",
  "enter a number",
  "enter a Internet Forum name",
  "enter a type of bug",
  `enter a number bigger than ${userInputs[1]}`,
  "enter a action"
];

for (let i = numberOfQuestions; i >= 0; i--)
{
  console.log(i);
}

/* Original Story

Once upon a time there was a 15 year old programmer who was debugging a bug on line 45 of his code.

He searched that line but found nothing.

He researched on the Internet, asked in forums to be able to solve his problem but nobody found his mistake.

Until he discovered that a semicolon caused an error on line 20 and that broke the code, he solved it and seeing that it worked, he was happy and went to have a coffee to celebrate.

*/

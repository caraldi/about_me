'use strict';

var userGreet = prompt('Hello, what\'s your name?');
var userName = userGreet.charAt(0).toUpperCase() + userGreet.slice(1).toLowerCase();
console.log('User is:', userName);
alert('Welcome to my page, ' + userName + '! Here you can take a little quiz to see how well you know me. Click "OK" to continue and try it out!');

var numCorrect = 0;

var musicQuestionAnswer = prompt('Do I play an instrument?').toLowerCase();
var musicCorrect = (musicQuestionAnswer === 'no' || musicQuestionAnswer === 'n');
var musicIncorrect = (musicQuestionAnswer === 'yes' || musicQuestionAnswer === 'y');

if (musicCorrect) {
  alert('Unfortunately, that\'s right.');
  console.log('User response: correct');
} else if (musicIncorrect) {
  alert('I wish! I failed to learn how to play any despite taking lessons in violin, guitar, and piano.');
  console.log('User response: incorrect');
} else {
  alert('Try again with a simple "yes" or "no" reponse - if you don\'t know, just guess!');
  console.log('User response: invalid');
}

if (musicCorrect) {
  numCorrect++;
  console.log('Number correct:', numCorrect);
}

var pilotQuestionAnswer = prompt('Have I ever flown an airplane?').toLowerCase();
var pilotCorrect = (pilotQuestionAnswer === 'yes' || pilotQuestionAnswer === 'y');
var pilotIncorrect = (pilotQuestionAnswer === 'no' || pilotQuestionAnswer === 'n');

if (pilotCorrect) {
  alert('Yes, I have! It\'s been about ten years though, so I\'m not sure how much I would remember now.');
  console.log('User response: correct');
} else if (pilotIncorrect) {
  alert('I flew solo when I was 18, actually! My family is really into aviation.');
  console.log('User response: incorrect');
} else {
  alert('Try again with a simple "yes" or "no" reponse - if you don\'t know, just guess!');
  console.log('User response: invalid');
}

if (pilotCorrect) {
  numCorrect++;
  console.log('Number correct:', numCorrect);
}

var petQuestionAnswer = prompt('Do I have any pets?').toLowerCase();
var petCorrect = (petQuestionAnswer === 'yes' || petQuestionAnswer === 'y');
var petIncorrect = (petQuestionAnswer === 'no' || petQuestionAnswer === 'n');

if (petCorrect) {
  alert('You\'re right! I have a very spoiled Texas Heeler named Remy.');
  console.log('User response: correct');
} else if (petIncorrect) {
  alert('I\'m actually very much a dog owner - take a look inside my car and you\'d know immediately!');
  console.log('User response: incorrect');
} else {
  alert('Try again with a simple "yes" or "no" reponse - if you don\'t know, just guess!');
  console.log('User response: invalid');
}

if (petCorrect) {
  numCorrect++;
  console.log('Number correct:', numCorrect);
}

var childrenQuestionAnswer = prompt('Do I have any children?').toLowerCase();
var childrenCorrect = (childrenQuestionAnswer === 'no' || childrenQuestionAnswer === 'n');
var childrenIncorrect = (childrenQuestionAnswer === 'yes' || childrenQuestionAnswer === 'y');

if (childrenCorrect) {
  alert('Nailed it!');
  console.log('User response: correct');
} else if (childrenIncorrect) {
  alert('Unless you count fur-children, no motherhood for me!');
  console.log('User response: incorrect');
} else {
  alert('Try again with a simple "yes" or "no" reponse - if you don\'t know, just guess!');
  console.log('User response: invalid');
}

if (childrenCorrect) {
  numCorrect++;
  console.log('Number correct:', numCorrect);
}

var athleticQuestionAnswer = prompt('Do I enjoy any athletic activities?').toLowerCase();
var athleticCorrect = (athleticQuestionAnswer === 'yes' || athleticQuestionAnswer === 'y');
var athleticIncorrect = (athleticQuestionAnswer === 'no' || athleticQuestionAnswer === 'n');

if (athleticCorrect) {
  alert('Of course I do! Skiing, hiking, and paddleboarding are my favorites.');
  console.log('User response: correct');
} else if (athleticIncorrect) {
  alert('How dare you, I\'m not that out of shape!');
  console.log('User response: incorrect');
} else {
  alert('Try again with a simple "yes" or "no" reponse - if you don\'t know, just guess!');
  console.log('User response: invalid');
}

if (athleticCorrect) {
  numCorrect++;
  console.log('Number correct:', numCorrect);
}

alert('Okay, ' + userName + ', so far you\'ve gotten ' + numCorrect + ' facts correct, but now I want you to try to read my mind. Click OK to give it a shot!');

var randomNum = Math.floor(Math.random() * 11);
console.log('The number is:', randomNum);

var userGuess = prompt('I\'m thinking of a number between 0-10 and you will have a total of four attempts to get it correct. What do you think it is?');
userGuess = Number(userGuess);
console.log('User guess is:', userGuess, typeof userGuess, typeof randomNum);


for (var i = 0; i < 4; i++) {
  console.log(i);
  if (i = 4) break;
}

var turns = i;
console.log('Number of turns:', turns);
var guessCorrect = (userGuess === randomNum);

while (i <= 4) {
  if (guessCorrect) {
    alert('You got it, you must have psychic powers!');
    turns = 0;
    console.log(guessCorrect);
    break;
  } else if (userGuess > randomNum) {
    prompt('Your number is too big! You have ' + turns + ' attempts left.');
    turns = turns - 1;
    console.log('Turns remaining:', turns);
    break;
  } else if (userGuess < randomNum) {
    prompt('Your number is too small! You have ' + turns + ' attempts left.');
    turns = turns - 1;
    console.log('Turns remaining:', turns);
    break;
  }
}

if (guessCorrect) {
  numCorrect++;
  console.log('Number correct:', numCorrect);
}
//
//   var statesQuestionAnswer = prompt('Okay, one last question: I currently live in Oregon, but which other states have I also lived in?');
//   var statesCorrect = [Florida, Alaska];

if (numCorrect === 7) {
  alert('All ' + numCorrect + ' correct, nicely done, ' + userName + '! You must know me very well, or maybe you are just an excellent guesser!');
} else if (numCorrect >= 3) {
  alert(numCorrect + ' correct out of 7 isn\'t too bad, ' + userName + ', but maybe we should get to know each other a little better!');
} else {
  alert(numCorrect + ' correct out of 7 is pretty bad, ' + userName + '! You must not know me at all!');
}

'use strict';

alert('Welcome to my page! Here you can take a little quiz to see how well you know me. Click "OK" to continue and try it out!');

var musicQuestionAnswer = prompt ('Do I play an instrument?').toLowerCase();

if (musicQuestionAnswer === 'yes' || musicQuestionAnswer === 'y') {
  alert('I wish! I failed to learn how to play any despite taking lessons in violin, guitar, and piano.');
} else if (musicQuestionAnswer === 'no' || musicQuestionAnswer === 'n') {
  alert('Unfortunately, that\'s right.');
} else {
  alert('Try again with a simple "yes" or "no" reponse - if you don\'t know, just guess!');
}

var pilotQuestionAnswer = prompt ('Have I ever flone an airplane?').toLowerCase();

if (pilotQuestionAnswer === 'yes' || pilotQuestionAnswer === 'y') {
  alert('Yes, I have! It\'s been about ten years though, so I\'m not sure how much I would remember now.');
} else if (pilotQuestionAnswer === 'no' || pilotQuestionAnswer === 'n') {
  alert('I flew solo when I was 18, actually! My family is really into aviation.');
} else {
  alert('Try again with a simple "yes" or "no" reponse - if you don\'t know, just guess!');
}

var petQuestionAnswer = prompt ('Do I have any pets?').toLowerCase();

if (petQuestionAnswer === 'yes' || petQuestionAnswer === 'y') {
  alert('You\'re right! I have a very spoiled Texas Heeler named Remy.');
} else if (petQuestionAnswer === 'no' || petQuestionAnswer === 'n') {
  alert('I\'m actually very much a dog owner - take a look inside my car and you\'d know immediately!');
} else {
  alert('Try again with a simple "yes" or "no" reponse - if you don\'t know, just guess!');
}

var childrenQuestionAnswer = prompt ('Do I have any children?').toLowerCase();

if (childrenQuestionAnswer === 'yes' || childrenQuestionAnswer === 'y') {
  alert('Unless you count fur-children, no motherhood for me!');
} else if (childrenQuestionAnswer === 'no' || childrenQuestionAnswer === 'n') {
  alert('Nailed it!');
} else {
  alert('Try again with a simple "yes" or "no" reponse - if you don\'t know, just guess!');
}

var athleticQuestionAnswer = prompt ('Do I enjoy any athletic activities?').toLowerCase();

if (athleticQuestionAnswer === 'yes' || athleticQuestionAnswer === 'y') {
  alert('Of course I do - skiing, hiking, and paddleboarding are my favorites!');
} else if (athleticQuestionAnswer === 'no' || athleticQuestionAnswer === 'n') {
  alert('How dare you, I\'m not that out of shape!');
} else {
  alert('Try again with a simple "yes" or "no" reponse - if you don\'t know, just guess!');
}

// var randomNum = Math.floor(Math.random() * 11);
// console.log('the number is:', randomNum);
//
// for (var i = 0; i < 4; i++) {
//   var userGuess = prompt('Guess a number from 0-10.');
//   userGuess = Number(userGuess);
//   console.log('User guess is:', userGuess, typeof userGuess, typeof randomNum);
//   if (randomNum === userGuess) {
//     alert('You got it!');
//   } else {
//     alert('Nope, try again!');
//   }
// }

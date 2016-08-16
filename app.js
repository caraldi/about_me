'use strict';

var musicQuestionAnswer = prompt('Do I play an instrument?');
musicQuestionAnswer = musicQuestionAnswer.toLowerCase();

switch(musicQuestionAnswer) {
case 'yes':
  alert('I only wish - I failed to learn how to play any despite taking lessons in violin, guitar, and piano.');
  console.log('Alerted user they were incorrect');
  break;
case 'no':
  alert('Unfortunately, that\'s right.');
  console.log('Alerted user they were correct');
  break;
default:
  alert('Try again with a simple [yes] or [no] reponse - if you don\'t know, just guess!');
  console.log('Alerted user only [yes] or [no] response is valid');
}

var relationshipQuestionAnswer = prompt('Am I currently in a relationship?');
relationshipQuestionAnswer = relationshipQuestionAnswer.toLowerCase();

switch(relationshipQuestionAnswer) {
case 'yes':
  alert('You\'re right! I currently have a stellar boyfriend.');
  console.log('Alerted user they were correct');
  break;
case 'no':
  alert('Wrong, turns out I am currently committed to someone.');
  console.log('Alerted user they were incorrect');
  break;
default:
  alert('Try again with a simple [yes] or [no] reponse - if you don\'t know, just guess!');
  console.log('Alerted user only [yes] or [no] response is valid');
}

var petQuestionAnswer = prompt('Do I have a pet?');
petQuestionAnswer = petQuestionAnswer.toLowerCase();

switch(petQuestionAnswer) {
case 'yes':
  alert('You\'re right! I have a very spoiled Texas Heeler named Remy.');
  console.log('Alerted user they were correct');
  break;
case 'no':
  alert('I\'m actually very much a dog owner - take a look inside my car and you\'d know immediately!');
  console.log('Alerted user they were incorrect');
  break;
default:
  alert('Try again with a simple [yes] or [no] reponse - if you don\'t know, just guess!');
  console.log('Alerted user only [yes] or [no] response is valid');
}

var childrenQuestionAnswer = prompt('Do I have any children?');
childrenQuestionAnswer = childrenQuestionAnswer.toLowerCase();

switch(childrenQuestionAnswer) {
case 'yes':
  alert('Unless you count fur-children, no motherhood for me!');
  console.log('Alerted user they were incorrect');
  break;
case 'no':
  alert('Nailed it!');
  console.log('Alerted user they were correct');
  break;
default:
  alert('Try again with a simple [yes] or [no] reponse - if you don\'t know, just guess!');
  console.log('Alerted user only [yes] or [no] response is valid');
}

var athleticQuestionAnswer = prompt('Do I enjoy any athletic activities?');
athleticQuestionAnswer = athleticQuestionAnswer.toLowerCase();

switch(athleticQuestionAnswer) {
case 'yes':
  alert('Of course I do - skiing, hiking, and paddleboarding are my favorites!');
  console.log('Alerted user they were correct');
  break;
case 'no':
  alert('How dare you, I\'m not that out of shape!');
  console.log('Alerted user they were incorrect');
  break;
default:
  alert('Try again with a simple [yes] or [no] reponse - if you don\'t know, just guess!');
  console.log('Alerted user only [yes] or [no] response is valid');
}

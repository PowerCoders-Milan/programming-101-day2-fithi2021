//insert your pseudocode below
/*
*The user has to guess a number from the computer
*The user can ask a question 
*create a variable to store the number from the user
*create a variable to store the random number 1-100
*the computer should tell me if i guess the number
*saying the number is higher than yours / the number is lower than
*yours
*finally yes it is

*/

//insert your code below
var randomNum, guess;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


randomNum = mathRandomInt(1, 100);
guess = window.prompt('Enter the number');
while (guess != randomNum) {
  if (guess < randomNum) {
    guess = window.prompt('your number is less than mine');
  }
  if (guess > randomNum) {
    guess = window.prompt('your number is higher than mine');
  }
}
window.alert('congra');
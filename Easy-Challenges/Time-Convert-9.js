/*
Challenge -
Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.


Sample Test Cases -

input : 126
output : "2:6"


input : 45
output : "0:45"

*/

function TimeConvert(num) {
  var hour;
  var minute;
  var time;

  if (num / 60 >= 1) {
    hour = Math.trunc(num / 60);
    minute = num % 60;
    time = hour + ":" + minute;
  } else {
    time = "0:" + num;
  }

  return time;
}

// keep this function call here
TimeConvert(readline());

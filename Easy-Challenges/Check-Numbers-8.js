/*
Challenge -
Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.

Sample Test Cases -

input : 3 & num2 = 122
output : "true"


input : 67 & num2 = 67
output : "-1"

*/


function CheckNums(num1,num2) {
  if ( num1 >= num2 ) {
    return "-1";
  } else {
    return "true";
  }
}


// or with a ternary expression



function CheckNums(num1, num2) {
  return num1 >= num2 ? "-1" : "true";
}

// keep this function call here
CheckNums(readline());




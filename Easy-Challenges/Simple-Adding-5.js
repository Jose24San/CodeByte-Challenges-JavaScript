/*
Simple Adding
  Using the JavaScript language, have the function SimpleAdding(num) add up all the
  numbers from 1 to num. For the test cases, the parameter num will be any number
  from 1 to 1000.

  same test cases
  input 12  - Output 78

  input 140 - Output 9870
*/



function SimpleAdding(num) {
    var completedAdding;
    var initial = 1;

    for(var i = 2; i <= num; i++) {
        completedAdding =  initial += i;
    }

    return completedAdding;
}


console.log(SimpleAdding(10));


// keep this function call here
//SimpleAdding(readline());
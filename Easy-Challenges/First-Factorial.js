/*
 Question:

 Have the function FirstFactorial (num) take the num parameter being passed and return the factorial of it(ie. num = 4, return 4 * 3 * 2 * 1). For the test cases, the range will be between 1 and 18;
 */

function FirstFactorial(num) {


    if (num === 0) {
        return "not a valid number";
    } else {
        var multiplier = 1;

        for(var i = 1; i <= num; i++) {
            multiplier *= i;

        }

        // code goes here
        return multiplier;
    }


}

// keep this function call here
FirstFactorial(readline());
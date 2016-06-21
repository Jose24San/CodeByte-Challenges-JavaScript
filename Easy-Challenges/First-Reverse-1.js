/*
 Question:

 Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

 */


function FirstReverse(str) {

    var newString = "";
    for (var i = str.length - 1; i >= 0; i--){
        newString += str[i];

    }
    return newString;

}

// keep this function call for CoderByte to check it
FirstReverse(readline());
/*

 Letter Capitalize
 Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

 same test cases
 input "hello world"  - Output "Hello World"

 input "i ran there" - Output "I Ran There"

*/


function LetterCapitalize(str) {
    var arraysOfStrings = str.split(" ");
    var finalArray = [];
    var temp;

    for(var i = 0; i < arraysOfStrings.length; i++) {

        temp = arraysOfStrings[i][0].toUpperCase() + arraysOfStrings[i].substring(1);
        finalArray.push( temp );
    }


    return finalArray.join(" ");
}

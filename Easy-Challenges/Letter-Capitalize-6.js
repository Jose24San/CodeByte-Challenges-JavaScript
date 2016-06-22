/*

 Letter Capitalize
 Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

 same test cases
 input "hello world"  - Output "Hello World"

 input "i ran there" - Output "I Ran There"

*/


function LetterCapitalize(str) {
    var stringOfArrays = str.split(" ");
    var finalArray = [];
    var temp;

    for(var i = 0; i < stringOfArrays.length; i++) {

        temp = stringOfArrays[i][0].toUpperCase() + stringOfArrays[i].substring(1);
        finalArray.push( temp );
    }


    return finalArray.join(" ");
}

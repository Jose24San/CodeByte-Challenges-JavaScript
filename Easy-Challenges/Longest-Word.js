
/*
 Question:

  Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

 */

function longestString(string) {

    // turn string into a array of individual strings
    var stringsArray = string.split(" ");

    //array with all symbols removed
    var simplifiedArray = [];

    // loop through each string and remove special symbols
    for(var j = 0; j < stringsArray.length; j++) {
        simplifiedArray.push(stringsArray[j].replace(/[^A-Za-z\d_-]+/g, "") );
    }

    var longestLength = 0;
    var longestString;
    for (i = 0; i < simplifiedArray.length; i++){

        // set longesString based off of the length
        if (simplifiedArray[i].length > longestLength){
            var longestLength = simplifiedArray[i].length;
            var longestString = simplifiedArray[i];
        }
    }
    return longestString;
}

// keep this function call here
longestString(readline());
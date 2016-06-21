/*
 Question:

Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then
 capitalize every vowel in the new string (a,e,i,o,u) and return this modified string.

 */


function LetterChanges(str) {
    var convertedString = '';

    for (var i = 0; i <= str.length - 1; i++) {



        // check to see char code is only letters
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 122 ||
            str.charCodeAt(i) >= 90 && str.charCodeAt(i) <= 97  ) {

            // if it is a z make it become an a
            var temp = str.charCodeAt(i) + 1;
            if ( temp === 123 ){
                temp = 97;
            }

            // if vowel capitalise
            if (temp === 97 || temp === 101 || temp === 105 || temp === 111 || temp === 117) {
                temp = temp - 32;
            }

            convertedString +=  String.fromCharCode(temp);

        } else {
            // if char code is not a letter then leave it alone
            convertedString += str[i];
        }


    }
    return convertedString;

}

// keep this function call here
LetterChanges(readline());
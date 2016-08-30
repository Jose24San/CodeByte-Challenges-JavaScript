/*

 Simple symbols
 Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

 Sample Test Cases
 Input:"+d+=3=+s+"
 Output:"true"

 Input:"f++d+"
 Output:"false"
*/

function SimpleSymbols(string) { 
	
	//check to see if a lowercase or captial letter has a "+" symbol before it "or" if a lowercase or capital letter has a "+" after it. If either of those two case are true then return true. Before return the value I then invert it with the ! so that its returning true and false for the test cases written above. 
	return ! /(^|[^+])[a-zA-Z]|[a-zA-Z]([^+]|$)/g.test(string);
         
}
   
// keep this function call here 
SimpleSymbols(readline());                            

                           
  
/**
 * Created by alex on 07-Mar-16.
 */
var Weird = {
    /*
     Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
     The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

     Examples:
     toWeirdCase( "String" );//=> returns "StRiNg"
     toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
     */
    toWeirdCase: function (str) {
        var isOdd = function (num) {
            return num % 2;
        };

        var wordsArray = str.split(' ');
        var weirdArray = [];

        for(j = 0; j < wordsArray.length; ++j) {
            var word = wordsArray[j];

            var weirdStr = '';
            for(i = 0; i < word.length; ++i) {
                var symbol = word[i];

                symbol = isOdd(parseInt(i)) ? symbol.toLowerCase() : symbol.toUpperCase();

                weirdStr += symbol;
            }
            weirdArray.push(weirdStr);
        }

        return weirdArray.join(' ');
    }
};
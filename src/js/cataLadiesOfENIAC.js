/**
 * Created by alex on 05.03.16.
 */
var Ladies = {
    /*
     Comprised of a team of five incredibly brilliant women, "The ladies of ENIAC" were the first “computors” working at the University of Pennsylvania’s Moore School of Engineering (1945). Through their contributions, we gained the first software application and the first programming classes! The ladies of ENIAC were inducted into the WITI Hall of Fame in 1997!

     Write a function which reveals "The ladies of ENIAC" names, so that you too can add them to your own hall of tech fame!

     To keep: only alpha characters and exclamation marks.
     To remove: odd numbers between 1 and 10 and these characters: %$&/£?@

     Result should be all in uppercase.
     */
    radLadies: function (name) {
        //reveal the rad ladies of ENIAC!
        var arr = ['%','$','&','/','£','?','@'];

        var isOdd = function (num) {
            return num % 2;
        };

        var encodedName = '';

        for(i = 0; i < name.length; ++i) {
            symbol = name[i];
            if (arr.indexOf(symbol) == -1 && !isOdd(parseInt(symbol))){
                encodedName += symbol;
            }
        }

        return encodedName.toUpperCase();
    }

};
/**
 * Created by alex on 05.03.16.
 *
 */

var arrayObj = {
    /*
     Given an array of integers, calculate the Average of these numbers.
     Main challenge is to write shortest and compact function for it.

     For example: var a = [0, 1, 2];
     avg(a) // output should be 1

     Output of function will be also checked in tests, however most important is to write the shortest possible function as test will check length of written function. Input will always be valid.

     Notes:
     - don't change name of function;
     - don't use new ES6 functions as Babel anyway compiles them;
     - don't use Math.floor and etc, as arrays in test return interger;
     - most important DON'T CHEAT;
     */
    avg: function (arr) {
        var sum = 0;
        for (i = 0; i < arr.length; ++i) {
            sum += arr[i];
        }
        return sum / arr.length;
    }
};
/**
 * Created by alex on 07-Mar-16.
 */
describe('WeIrD StRiNg CaSe', function () {

    describe('toWeirdCase', function () {
        it('String should be StRiNg', function () {
            expect(Weird.toWeirdCase("String")).toBe("StRiNg");
        });

        it('Should return the correct value for multiple words', function(){
            expect(Weird.toWeirdCase('This is a test')).toBe('ThIs Is A TeSt');
        });
    });

});
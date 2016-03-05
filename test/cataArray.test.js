/**
 * Created by alex on 05.03.16.
 */
describe('arrayObj', function () {

    describe('avg', function () {
        it('avg [0, 1, 2] should be 1', function () {
            expect(arrayObj.avg([0, 1, 2])).toBe(1);
        });
    });

    describe('avg', function () {
        it('avg [0, 1, 2, 3, 4] should be 2', function () {
            expect(arrayObj.avg([0, 1, 2, 3, 4])).toBe(2);
        });
    });

});
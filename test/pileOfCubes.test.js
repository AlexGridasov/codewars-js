/**
 * Created by alex on 8/3/16.
 */
describe('Pile of Cubes', function () {

    describe('findNb', function () {
        it('Number of cubes should be 2022', function () {
            expect(PileOfCubes.findNb(4183059834009)).toBe(2022);
        });
        it('Number of cubes should be -1', function () {
            expect(PileOfCubes.findNb(24723578342962)).toBe(-1);
        });
        it('Number of cubes should be 4824', function () {
            expect(PileOfCubes.findNb(135440716410000)).toBe(4824);
        });
        it('Number of cubes should be 3568', function () {
            expect(PileOfCubes.findNb(40539911473216)).toBe(3568);
        });
    });

});
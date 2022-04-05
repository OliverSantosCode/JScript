let { addition, subtraction }  = require('./function');

describe('Mathematical Operators:\n', () => {
    xtest('Addition Operator', () => {
        expect(addition(3,3)).toBe(6);
    });

    test('Subtraction Operator', () => {
        expect(subtraction(9,3)).toBe(6);
});
});
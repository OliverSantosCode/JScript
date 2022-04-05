let { addition, subtraction, multiplication }  = require('./function');

describe('Mathematical Operators:\n', () => {

    test('Addition Operator', () => {
        expect(addition(3,2)).toBe(5);
    });

    test('Subtraction Operator', () => {
        expect(subtraction(9,3)).toBe(6);
    });

    test('Multiplication Operator', () => {
        expect(multiplication(3,3)).toBe(9);
    });
    
});
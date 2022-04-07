let { addition, subtraction, multiplication, division, rest }  = require('./function');

describe('Mathematical Operators:\n', () => {

    test('· Addition Operator.', () => {
        expect(addition(3,2)).toBe(5);
    });

    test('· Subtraction Operator.', () => {
        expect(subtraction(9,3)).toBe(6);
    });

    test('· Multiplication Operator.', () => {
        expect(multiplication(3,3)).toBe(9);
    });

    test('· Division Operator.', () => {
        expect(division(10,2)).toBe(5);
    });

    test('· Rest Division.', () => {
        expect(rest(10,3)).toBe(1);
    });
    
});
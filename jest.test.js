const sum = require('./function');

require('./function');

describe('Mathematical Operators:\n', () => {
    test('Addition Operator', () => {
        expect(sum(2,3)).toBe(5);
    });
});
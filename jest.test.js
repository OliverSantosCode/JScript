const books = require('./array');
const { addition, subtraction, multiplication, division, rest, pair, odd }  = require('./function');
const ages = require('./ifelse');
const book = require('./switch');
const age = require('./ternary');
const num = require('./while');

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

    test('· Pair Number.', () => {
        expect(pair(34,2)).toBe(0);
    });

    test('· Odd Number', () => {
        expect(odd(11,2)).toBe(1);
    });
    
});

describe(`Array Books: ${books}\n`, () => {

    test('Array.', () => {
        expect(books).toEqual(['Maths', 'Programming', 'Economics', 'History', 'Python', 'TypeScript']);
    });
});

describe(`Switch Book: ${book}\n`, () => {

    test('Switch.', () => {
        expect(book).toEqual(book? String(book) : (void 0));
    });
});

describe('While Number:\n', () => {

    test('While.', () => {
        expect(num).toEqual(Number(num));
    });
});

describe('Ifelse Number:\n', () => {

    test('Ifelse.', () => {
        expect(ages).toEqual(Number(ages));
    });

    test('Ifelse.', () => {
        expect((ages < 18) || ages > 18).toBe(true);
    });

});

describe(`Ternary Age: ${age}\n`, () => {

    test('Ternary.', () => {
        expect((age < 18) || age >= 18).toBe(true);
    });

});
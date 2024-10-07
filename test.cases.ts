import assert from 'assert';
import { beforeEach, describe, it } from 'node:test';

describe('String Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    it('should return 0 for an empty string', () => {
        assert.strictEqual(calculator.add(""), 0);
    });

    it('should return the number itself when only one number is passed', () => {
        assert.strictEqual(calculator.add("1"), 1);
    });

    it('should return the sum of two numbers', () => {
        assert.strictEqual(calculator.add("1,2"), 3);
    });

    it('should return the sum of any amount of numbers', () => {
        assert.strictEqual(calculator.add("1,2,3,4"), 10);
    });

    it('should handle new lines between numbers', () => {
        assert.strictEqual(calculator.add("1\n2,3"), 6);
    });

    it('should handle custom delimiters', () => {
        assert.strictEqual(calculator.add("//;\n1;2"), 3);
    });

    it('should throw an exception for negative numbers', () => {
        assert.throws(() => calculator.add("1,-2,3,-4"), /negative numbers not allowed: -2, -4/);
    });
});

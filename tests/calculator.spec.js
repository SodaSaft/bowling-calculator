import * as Calculator from '../src/calculator';

describe('calculator.js', () => {
    describe('calculateGameScore', () => {
        it('should return the score for the worst game ever', () => {
            // A toddler playing without the fences up
            const frames = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
            const expectedScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            expect(Calculator.calculateGameScore(frames)).toStrictEqual(expectedScore);
        });

        it('should return the score for a game with only spares and one strike', () => {
            // This has never happened
            const frames = [[1, 9], [2, 8], [3, 7], [4, 6], [5, 5], [6, 4], [7, 3], [8, 2], [9, 1], [0, 10], [10]];
            const expectedScore = [12, 25, 39, 54, 70, 87, 105, 124, 134, 154];

            expect(Calculator.calculateGameScore(frames)).toStrictEqual(expectedScore);
        });

        it('should return the score for a regular game', () => {
            // I wish I was this good
            const frames = [[6, 2], [5, 5], [7, 0], [10], [10], [5, 0], [7, 3], [9, 0], [9, 1], [5, 3]];
            const expectedScore = [8, 25, 32, 57, 72, 77, 96, 105, 120, 128];

            expect(Calculator.calculateGameScore(frames)).toStrictEqual(expectedScore);
        });

        it('should return the score for a perfect game', () => {
            // The guy your girlfriend says not to worry about...
            const frames = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10], [10], [10]];
            const expectedScore = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300];

            expect(Calculator.calculateGameScore(frames)).toStrictEqual(expectedScore);
        });
    });
});

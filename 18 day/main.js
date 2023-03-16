
const children = 3;
const candy = 10;

function candies(children, candy) {
    const rest = candy % children 
    return candy - rest
}

/**
* Test Suite 
*/
describe('candies()', () => {
    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;
        
        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });

    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 4;
        const candy = 15;
        
        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(12);
    });
});
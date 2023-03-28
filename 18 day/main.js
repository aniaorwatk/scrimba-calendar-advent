
const children = 3;
const candy = 10;

function candies(children, candy) {
    const rest = candy % children 
    return candy - rest
}

function candies2(children, candy) {
    const candyForChild = Math.floor(candy / children )
    return candyForChild * children
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

    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;
        
        // act
        const result = candies2(children, candy);

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
        const result = candies2(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(12);
    });

    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 17;
        
        // act
        const result = candies2(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(15);
    });
});
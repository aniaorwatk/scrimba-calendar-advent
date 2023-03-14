
function insertDashes(arr) {

    let str = arr
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            result += str[i]
        } else {
            if (str[i + 1] !== " " && i < str.length - 1) {
                result += str[i] + "-"
            }
            else {
                result += str[i]
            }

        }
    }
    return result
}
insertDashes("aba caba")

/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";

        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});
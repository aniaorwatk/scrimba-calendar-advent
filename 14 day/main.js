function countVowelConsonant(str) {
  const vowel = ["a", "e", "i", "o", "u", "y"];
  let array = [...str]
  let value = array.map(item => {
    if (item === vowel.find(it => item === it)) {
      return item = 1
    } else {
      return item = 2
    }
  }).reduce((a, b) => a + b, 0)

  return value
}

countVowelConsonant('abcde')

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
  it('returns total of vowels(1) and consonants(2) to be added', () => {
    // arrange
    const value = 'abcdee';

    // act
    const result = countVowelConsonant(value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(9);
  });
});

describe('countVowelConsonant()', () => {
  it('returns total of vowels(1) and consonants(2) to be added', () => {
    // arrange
    const value = 'abcdeebc';

    // act
    const result = countVowelConsonant(value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(13);
  });
});
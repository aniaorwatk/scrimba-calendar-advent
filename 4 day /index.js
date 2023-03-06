/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

// first solution

const whisper = (text) => {
    const smal = text.toLowerCase()
    const text2 = new Array(...smal).filter(item => {
        return item !== "!"
    })
    text2.unshift("shh... ")
    if (text2[1].includes("!")) {
        text2[1].pop()
    }
    let sentence = ""
    for (let i = 0; i < text2.length; i++) {
        sentence += text2[i]
    }
    return sentence
}

//second solution

const whisper2 = (text) => {
    const smal = text.toLowerCase()
    let sentence = `shh... ${smal}`
    if (sentence.endsWith("!")) {
      return  sentence.slice(0,-1)
    }
    return sentence 
}



console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));

console.log(whisper2("PLEASE STOP SHOUTING."));
console.log(whisper2("MA'AM, this is a Wendy's!"));
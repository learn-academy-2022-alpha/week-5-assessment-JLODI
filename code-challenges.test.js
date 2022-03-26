// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { yieldExpression, NUMBER_UNARY_OPERATORS } = require("@babel/types")
const { nodeInternals } = require("stack-utils")
const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codedMessage", () => {
    it("Takes in a string and returns coded message", () => {
      expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

//   FAIL  ./code-challenges.test.js
//   codedMessage
//     ✕ takes in a string and returns coded message (1 ms)

//   ● codedMessage › takes in a string and returns coded message

//     ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// function that takes in a string
// define empty string
// itterates through each character on the string
// check if character is a, e, i or o and capitals and converts accordingly to new string
// else, push character as is to new string
// return new string

const codedMessage = (string) => {
    let newString = ""
    for (let i = 0; i < string.length; i++){
        if(string[i] === "A" || string[i] === "a" ){
            newString += "4"
            }
        else if(string[i] === "E" || string[i] === "e" ){
            newString += "3"
            }
        else if(string[i] === "I" || string[i] === "i" ){
            newString += "1"
            }
        else if(string[i] === "O" || string[i] === "o" ){
            newString += "0"
            }
        else {
            newString += string[i]
        }
    }
return newString
}

// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns coded message (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.501 s, estimated 1 s


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("wordsWithLetter", () => {
    it("Takes in an array of words and single letter, returns words with that letter", () => {
      expect(wordsWithLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(wordsWithLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

//   FAIL  ./code-challenges.test.js
//   wordsWithLetter
//     ✕ Takes in an array of words and single letter, returns words with that letter (1 ms)

//   ● wordsWithLetter › Takes in an array of words and single letter, returns words with that letter

//     ReferenceError: wordsWithLetter is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// define function that takes in an array and a letter
// itterates through the array
// downcase the word
// check if the word in the array contains the letter
// if yes, pushes to new array
// if no, doesn't push to new array
// return new array with only words that contain the letter

const wordsWithLetter = (array, letter) => {
    return array.filter((value) => value.toLowerCase().includes(letter) === true)
}

// PASS  ./code-challenges.test.js
// wordsWithLetter
//   ✓ Takes in an array of words and single letter, returns words with that letter (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouseChecker", () => {
    it("Takes in an array of 5 numbers and checks for one pair and three of a kind", () => {
      expect(fullHouseChecker(hand1)).toEqual(true)
      expect(fullHouseChecker(hand2)).toEqual(false)
      expect(fullHouseChecker(hand3)).toEqual(false)
    })
  })

//   FAIL  ./code-challenges.test.js
//   fullHouseChecker
//     ✕ Takes in an array of 5 numbers and checks for one pair and three of a kind (1 ms)

//   ● fullHouseChecker › Takes in an array of 5 numbers and checks for one pair and three of a kind

//     ReferenceError: fullHouseChecker is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// create function that takes in array of 5 numbers
// create an empty object
// itterates through the array
// check if value in object doesn't exist
// if yes define as key in object, if not move on to next step
// add + 1 to the value of the key which is named after the number in the array
// when itteration function done, check if there are 3 of a kind for one key and a pair for the other
// return if true or false

const fullHouseChecker = (array) => {
    var countHolder = {}
    for (let i = 0; i < array.length; i++){
        var key = array[i].toString()
        if(!(key in countHolder) === true){
            countHolder[key] = 0;
        }
        countHolder[key] += 1;
    }

    return (Object.values(countHolder).includes(2) &&
        Object.values(countHolder).includes(3))
}

// console.log(fullHouseChecker(hand1))
// console.log(fullHouseChecker(hand2))
// console.log(fullHouseChecker(hand3))

// PASS  ./code-challenges.test.js
// fullHouseChecker
//   ✓ Takes in an array of 5 numbers and checks for one pair and three of a kind (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns coded message (2 ms)
// wordsWithLetter
//   ✓ Takes in an array of words and single letter, returns words with that letter (1 ms)
// fullHouseChecker
//   ✓ Takes in an array of 5 numbers and checks for one pair and three of a kind (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

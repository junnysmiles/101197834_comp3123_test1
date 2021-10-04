// Lab Test 1 - Full Stack Development (COMP 3123)
// Jun Yan Gan - 101197834


// Question 1 - ES6 Features
// Create a script with a function named lowerCaseWords that takes a mixed array as input.
// The function will do the following: return a promise that i resolved or reject,
// filter the non-string and lower case the remaining words

lowerCaseWords = (array) => {
    const newArr = array.filter(e => typeof e == 'string')
    const lowerCaseArr = newArr.map(e => e.toLowerCase())

    let promise = new Promise(function(resolve, reject) {
        if(lowerCaseArr)
            resolve(`Success! Here is the new array: ${array}`)
        else
            reject("Failure")
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const newArr = mixedArray.filter(e => typeof e == 'string')
const lowerCaseArr = newArr.map(e => e.toLowerCase())

console.log(lowerCaseArr)

console.log(lowerCaseWords(mixedArray))

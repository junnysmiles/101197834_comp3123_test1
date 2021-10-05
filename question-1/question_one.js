// Lab Test 1 - Full Stack Development (COMP 3123)
// Jun Yan Gan - 101197834


// Question 1 - ES6 Features
// Create a script with a function named lowerCaseWords that takes a mixed array as input.
/* The function will do the following: return a promise that is resolved or rejected,
    filter the non-string and lower case the remaining words */

// Creating lowerCaseWords function and taking array as input
lowerCaseWords = (array) => {
    // Initializing a new array to push the updated elements after doing the following...
    let newArr = []

    // Promise to resolve or reject, filter the non-strings and lower case the words
    let promise = new Promise(function(resolve, reject) {
        // Going through each element in the array
        for (let i = 0; i < array.length; i++) {
            // If statement to find type of (string) in the element, then if it is a string, push the elements to the new array initialized
            if (typeof array[i] === "string") {
                // Push the string elements to the new array, then lowercase
                newArr.push(array[i].toLowerCase())
            }
        }
        // Resolve
        if (array.length > 0) {
            resolve(newArr)
        }
        // Reject
        else {
            reject("There are no strings in the array.")
        }
    });
    return promise;
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

// Handling the promise
lowerCaseWords(mixedArray).then(result => {
    console.log(result)
}), error => console.log(error)

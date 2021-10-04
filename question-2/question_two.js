// Lab Test 1 - Full Stack Development (COMP 3123)
// Jun Yan Gan - 101197834


// Question 1 - Promises
// Given the script file callbacks.js, write a script that does the following:
// Create a method resolvedPromise that is similar to delayedSuccess and resolves
// a message after a timeout of 500ms.
// Create a method rejectedPromise that is similar to delayedException and rejects 
// an error message after a timeout of 500ms.
// Call both promises separately and handle the resolved and reject results and then output to the console.

let resolvedPromise = new Promise((resolve) => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        resolve(success)
    }, 500)
})

let rejectedPromise = new Promise(function(reject) {

})

resolvedPromise.then(success => {
    console.log(success)
})
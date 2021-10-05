// Lab Test 1 - Full Stack Development (COMP 3123)
// Jun Yan Gan - 101197834


// Question 1 - Promises
// Given the script file callbacks.js, write a script that does the following:
/* Create a method resolvedPromise that is similar to delayedSuccess and resolves
    a message after a timeout of 500ms. */
/* Create a method rejectedPromise that is similar to delayedException and rejects 
    an error message after a timeout of 500ms. */
/* Call both promises separately and handle the resolved and reject results and then output to the console. */

// Resolved Promise method
let resolvedPromise = new Promise((resolve) => {
    // Setting timeout to resolve success message after 500ms
    setTimeout(() => {
        // Setting success message and resolving it
        let success = {'message': 'delayed success!'}
        resolve(success)
    }, 500)
})

// Rejected Promise method
let rejectedPromise = new Promise((reject) {
    setTimeout(() => {
        let error = {'error': 'delayed exception!'}
        reject(error)
    }, 500)
})

// Handling both promises
resolvedPromise.then(success => {
    console.log(success)
})

rejectedPromise.then(error => {
    console.log(error)
})
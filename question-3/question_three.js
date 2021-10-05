// Lab Test 1 - Full Stack Development (COMP 3123)
// Jun Yan Gan - 101197834


// Question 3 - File Module
// Create a script that will do the following:
/* Remove Log Files
    - Remove all the files from the Logs directory, if exists
    - Output the file names to delete
    - Remove the Logs directory
*/
/* Create Log Files
    - Create a Logs directory, if it does not exist
    - Change the current process to the new Logs directory
    - Create 10 log files and write some text into the file
    - Output the files names to console
*/
/* Hint: Use the fs module and path module, and the process current working directory to build directory path.
    It is acceptable, to have a remove.js script and separate add.js script */

// Including File System Module
let fs = require('fs')

// Including Process Module
let process = require('process')

// Setting path module for the log directory
const logDir = './logs'

// Create the new directory
let add = () => {
    try {
        // Checks if the directory exists
        if(!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir);
            console.log(`${logDir} already exists.`);
        }
        else {
            console.log(`${logDir} already exists.`)
        }
    } catch (err) {
        console.log(err)
    }

    process.chdir(logDir)
    
}
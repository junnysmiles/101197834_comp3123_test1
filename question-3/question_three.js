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

// Including Path Module
let path = require('path')

// Setting path module for the log directory
const logDir = './question-3/logs'

// Add Function - Create the new directory, create log files and output on console 
let add = () => {
    // Checks if the directory exists, if not, it will create it
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
        console.log(`${logDir} created.`)
    } else {
        console.log(`${logDir} already created.`)
    }

    // Change directory into the log directory
    process.chdir(logDir)

    // For loop to create each file up to 10, so 9 files
    for (let i = 0; i < 10; i++) {
        // Create and write in the file
        fs.writeFileSync(`log${i}.txt`, `log ${i} file`)

        // Output all file names to console
        console.log(`log${i}`)
    }
}

// I am unsure as to why it is not deleting the directory or files... I am positive this is correct:

// Remove Log Files function
let remove = () => {
    // If statement to make sure the directory exists
    if (fs.existsSync(logDir)) {
        // Change to the log directory
        process.chdir(logDir)

        // Reads and returns log directory
        fs.readdirSync(process.cwd(), (error, files) => {
            // For each statement to iterate through each file to delete
            files.forEach((file) => {
                fs.unlink(file, function(error) {
                    if(error) {
                        console.log(`Error deleting file ${file}`)
                    }
                    console.log(`Deleting files... ${file}`)
                });
            });
        });
    }
}

add()
remove()
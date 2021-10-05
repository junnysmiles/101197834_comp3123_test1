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
    // Checks if the directory exists
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
        console.log(`${logDir} created.`)
    }

    process.chdir(logDir)

    for (let i = 0; i < 10; i++) {
        fs.writeFileSync(`log${i}.txt`, `log ${i} file`, function(error) {
            if (error) {
                console.log(`Error creating 'log${i}.txt' file.`)
            } else {
                console.log(`Success creating 'log${i}.txt' file.`)
            }
        });
    }
    fs.readdirSync(logDir).forEach(file => {
        console.log(file)
    })
}

// Remove Log Files function
let remove = () => {
    if (fs.existsSync(logDir)) {
        process.chdir(logDir);
        fs.readdir(process.cwd(), (err, files) => {
            files.forEach((file) => {

                fs.unlink(file, function(err) {
                    if(err) {
                        console.log(`Error deleting file '${file}'`)
                    } else {
                        console.log(`delete files ${file}`)
                    };
                });
            });
        });
    };
}

add()
remove()
// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
// Solved with assistance from the bootspot Xpert AI! I didn't understand how to make the inquirer prompts into an array

const questions = [ 
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'What is a description of the project?',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Usage information?',
},
{
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines?',
},
{
    type: 'input',
    name: 'testing',
    message: 'What are the test instructions?',
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPL v3', 'Apache 2.0', 'BSD 3-Clause'],
},
{
    type: 'input',
    name: 'user',
    message: 'What is your github username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email?',
}];

//const fileName = 'dist/README.md';

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMeContent = generateMarkdown(data);
    fs.writeFileSync(fileName,readMeContent);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
            writeToFile('./dist/README.md', answers);
        
    });
}

// Function call to initialize app
init();

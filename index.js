const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        questions
    },
  ])
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project name',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description1',
        message: 'What inspired you to design your project?',
    },
    {
        type: 'input',
        name: 'description2',
        message: 'What problem is your project intended to solve?',
    },
    {
        type: 'input',
        name: 'description3',
        message: 'What did working on this project teach you about software development?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps need to be taken to install your project?',
    },
    {
        type: 'input',
        name: 'uses',
        message: 'Provide instructions for using your application.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, with links to their Github, assets used requiring attribution, and links to any tutorials referenced.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Provide details regarding the applicable software license.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filename = 'README.md';
    fs
};

// TODO: Create a function to initialize app
function init() {
    addEventListener('keypress');
}

// Function call to initialize app
init();

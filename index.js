// Validation for user input provided is in the proper expected format???

const inquirer = require(`inquirer`);
const fs = require(`fs`);

const questions = [
    {
        type: `input`,
        message: `What is the manager's name?`,
        name: `name`,
    },
    {
        type: `input`,
        message: `What is their ID number?`,
        name: `idNum`,
    },
    {
        type: `input`,
        message: `What is their e-mail?`,
        name: `email`,
    },
    {
        type: `input`,
        message: `What is their office number?`,
        name: `officeNum`,
    },
    {
        type: `list`,
        message: `Who else would you like to add to your team?`,
        name: `teamMembers`,
        choices: ["Engineer", "Intern", "Finished"]
    },
    {
        type: `input`,
        message: `What is their GITHUB username?`,
        name: `gitName`,
    },
    {
        type: `input`,
        message: `What school did they attend?`,
        name: `school`,
        
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`README.md`, data, (err) =>
    err ? console.error(err) : console.log(`README generated`));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(generateMarkdown(data));
    })
}

// Function call to initialize app
init();
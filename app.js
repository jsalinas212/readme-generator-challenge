const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generate-readme.js');

const promptReadme = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: repoInput => {
                if (repoInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'repoName',
            message: 'What is the name of your repository?',
            validate: repoInput => {
                if (repoInput) {
                    return true;
                } else {
                    console.log('Please enter a valid repository name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'headline',
            message: 'Please provide a project headline.',
            validate: headlineInput => {
                if (headlineInput) {
                    return true;
                } else {
                    console.log('Please enter a valid repository name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your project.',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a valid repository name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "(Optional) Provide steps to install your project.",
            name: 'installation'
        },
        {
            type: 'input',
            message: "(Optional) Provide example usage for your project.",
            name: 'usage'
        },
        {
            type: 'input',
            message: "(Optional) How can others contribute to your project?",
            name: 'contributing'
        },
        {
            type: 'input',
            message: "(Optional) Are there any test cases for your project you would like to list?",
            name: 'testing'
        },
        {
            type: 'list',
            message: "(Optional) Choose a license for your project.",
            name: 'license',
            choices: [
                "Apache",
                "Creative Commons Zero",
                "ISC",
                "MIT",
                "Unlicense",
                "Open",
                "GNU",
                "Beer"
            ]
        }
    ]);
};

function writeReadmeFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Succuessfully generated readme file');
    });
}

const writeFiAs = util.promisify(writeReadmeFile);

async function start() {
    try {
        const responses = await promptReadme();
        console.log('Generating readme.md file.');

        const md = generateMarkdown(responses);
        await writeFiAs('readme_example.md', md);
    } catch (err) {
        console.log(err);
    }
};

start();
const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your Github username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Enter your github Username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'The title of your project:',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Required. Include a project title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'A description of your project:',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Required. Include a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How to use your project:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select an open source license:',
            choices: ['MIT license', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
        },
        {
            type: 'list',
            name: 'badgeColor',
            message: 'Select a badge colour:',
            choices: ['brightgreen', 'yellow', 'orange', 'red', 'blue', 'lightgrey'],
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Add guidelines for others to contribute to your development:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your application with examples of how to run them:',
        },
    ]);

const createBadgeURL = (license, badgeColor) => {
    const url = `https://img.shields.io/badge/license-${license}-${badgeColor}`;
    const badgeURL = encodeURI(url);
    return badgeURL;
};


const generateReadME = (answers, badgeURL) => {
    const { email, title, githubUsername, description, installation, usage, license, contributions, tests } = answers;
    return `# ${title}
## Description
${description}

![License](${badgeURL})
----------

## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

----------

## Installation
${installation}

----------

## Usage
${usage}

-----------
## License
This project is licensed under:
${license}

-------------
## Contributing
${contributions}

--------------
## Tests
${tests}

------------
## Questions
If you have any questions on this application or would like more information, you can reach me via...    
Email: ${email}    
Github: https://github.com/${githubUsername}
`;
};


promptUser()
    .then((answers) => {
        let badgeURL = createBadgeURL(answers.license, answers.badgeColor);
        const readMETemplate = generateReadME(answers, badgeURL);
        fs.writeFileSync('ProfessionalREADME.md', readMETemplate);
    })
    .then(() => console.log('Congrats. You have successfully created your ReadMe file'))
    .catch((err) => console.error(err));
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
      message: 'Your project title:',
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
      message: 'A description of you project:',
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
      message: 'Installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How to use your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select an open source license for your application:',
      choices: ['MIT license, GNU AGPLv3, Mozilla Public License 2.0, Apache License 2.0, Boost Software License 1.0, The Unlicense']
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Add guidelines on how to contribute to your development:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Write tests for your application with examples on how to run them:',
    },
  ]);


  const generateReadME = (answers) => {
    const { email, title, githubUsername, description, installation, usage, license, contributions, tests  } = answers;
    return `# ${title}
## Description
${description}

License badge here
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
Description of the license chosen

-------------
## Contributing
${contributing}

--------------
## Tests
${tests}

------------
## Questions
If you have any questions on this application or would like more information, you can reach me via...
Email: ${githubUsername}
Github: github.com/${githubUsername}
`;
};


promptUser()
  .then((answers) => {
    const readME = generateReadME(answers);
    fs.writeFileSync(readME);
    //writeFileAsync('index.html', generateHTML(answers));
  })
  .then(() => console.log('Successfully created your ReadMe file'))
  .catch((err) => console.error(err));
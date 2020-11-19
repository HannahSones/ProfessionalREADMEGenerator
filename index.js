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
      name: 'github username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'Your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'A description of you project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'useage',
      message: 'How to use your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license for your application:',
      choices: '[MIT license, another one]'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Add guidelines on how to contribute to your development:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Write tests for your application with examples on how to run them:',
    },
  ]);


// Basic template for ReadME file
`# Title
## Description
Add description here

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
Text added here.

----------

## Usage
* When the Weather Dashboard is first loaded, the dashboard is empty and the forecast containers don't appear until a city has been searched.
* Once a user searches for a cityleared, information from local storage is cleared, and the page is refreshed to display a new, blank page.

-----------
## License
Choose a license from a list of options

-------------
## Contributing
Text added here.

--------------
## Tests

------------
## Questions
Github username is added with link to profile
Email address
`
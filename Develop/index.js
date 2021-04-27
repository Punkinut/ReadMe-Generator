const enquirer = require('enquirer');
const fs = require('fs');

let questions = [
"What it the title of your project?", 
"What is your GitHub username?",
"What is your email?",
"Which license will you require for this repository?",
"What was your motivation for this task?",
"Why did you build this project?",
"What problem does it solve?",
"What did you learn?",
"Explain how to INSTALL your application (press arrow keys to navigate through steps)",
"Explain how to USE your application (press arrow keys to navigate through steps)",
"Which code of conduct would you like to include in your contribution section? ",
"Please add some final instructions on how to run tests on your application (if not applicable press enter)",
"What is your GitHub url?"];

const [ q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13] = questions;

enquirer
    .prompt([
        {
            type: 'input',
            message: q1,
            name: "project"
        },
        {
            type: 'input',
            message: q13,
            name: "githubURL"
        },
        {
            type: 'input',
            message: q2,
            name: "github"
        },
        {
            type: 'input',
            message: q3,
            name: "email"
        },
        {
            type: 'select',
            message: q4,
            name: "license",
            choices: ["MIT License", "Apache License 2.0", "GNU General Public License"]
        },
        {
            type: 'input',
            message: q5,
            name: "desc1"
        },
        {
            type: 'input',
            message: q6,
            name: "desc2"
        },
        {
            type: 'input',
            message: q7,
            name: "desc3"
        },
        {
            type: 'input',
            message: q8,
            name: "desc4"
        },
        {
            type: 'form',
            message: q9,
            name: "install",
            choices: [
                { name: 'instStep1', message: 'Step One:'},
                { name: 'instStep2', message: 'Step Two:'},
                { name: 'instStep3', message: 'Step Three:'}
            ]
        },
        {
            type: 'form',
            message: q10,
            name: "use",
            choices: [
                { name: 'use1', message: 'How do I access the main functionality?: '},
                { name: 'use2', message: 'How did you implement this main feature?: '},
            ]
        },
        {
            type: 'select',
            message: q11,
            name: "contribution",
            choices: ["Contributor Covenant", "Citizen Code Of Conduct"]
        },
        {
            type: 'input',
            message: q12,
            name: "tests"
        },
    ])
    .then((response) => {
        const { project, github, email, license, desc1, desc2, desc3, desc4, install, use, contribution, tests, githubURL } =  response;
        //  If inputs blank omit the section
        let readmeText = `
# ${project}
## Description
- ${desc1}
- ${desc2}
- ${desc3}
- ${desc4}
## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Questions](#Questions)
## Installation
- ${install.instStep1}
- ${install.instStep2}
- ${install.instStep3}
## Usage
- ${use.use1}
- ${use.use2}
## Contribution

## Running Tests
${tests}
## Questions
If you wish to inquire about my application, below is my contact information 👇  
${github} | ${githubURL}  
Email | ${email}`

        fs.writeFile("README.md", readmeText, (err) => 
        err ? console.log(err) : console.log("Your file has been created!"))
    });
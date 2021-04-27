const enquirer = require('enquirer');
const fs = require('fs');

let questions = [
"What it the title of your project?", 
"What is your GitHub username?",
"What is your email?",
"Which liscence will you require for this repository?",
"What was your motivation for this task?",
"Why did you build this project?",
"What problem does it solve?",
"What did you learn?",
"Press enter to explain your installation in three steps (press enter)",
"Step One:",
"Step Two:",
"Step Three:",
"Please provide some steps on how to use this appliaction",
"Which code of conduct would you like to include in your contribution section? ",
"Please add some final instructions on how to run tests on your application (if not applicable press enter)"];

const [ q1, q2, q3, q4, q5, q6, q7 ] = questions;

enquirer
    .prompt([
        {
            type: 'input',
            message: q1,
            name: "project"
        },
    ])
    .then((response) => {
        const { project } =  response;
        console.log(project )
    });
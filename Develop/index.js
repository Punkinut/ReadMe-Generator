const enquirer = require('enquirer');
const fs = require('fs');

let questions = [
"What it the title of your project?", 
"What is your GitHub username?",
"What is your email?",
"Give me a brief description on the project you are working on.",
"Give an explanation on how to install your application.",
"Please provide some steps on the usage of this appliaction"];

const [ qOne, qTwo, qThree, qFour, qFive, qSix ] = questions;

enquirer
    .prompt([
        {
            type: 'input',
            message: qOne,
            name: "project"
        },
    ])
    .then((response) => {
        const { project } =  response;
        console.log(project)
    });
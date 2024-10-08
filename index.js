// TODO: Include packages needed for this application
import inquirer from 'inquirer'; 
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
  
        {
            type: "Title",
            message: "Please provide your project title",
            name:"title"
                },  

            {
                type: "input",
                message: "Please provide a short description of your project",
                name:"description"
                    },  

                {
                type: "input",
                message: "Please provide a instalation of your project",
                name:"installation"
                    },


                {
                    type: "input",
                    message: "Please provide usage information",
                    name:"usage"
                        },


                    {
                        type: "input",
                        message: "Please provide contrubutors ",
                        name:"contrubutors"
                            },

                            {
                                type: "input",
                                message: "What is the test instruction?",
                                name:"tests"
                                    }, 

                    {
                type: "list",
                message:"Please choose the licenses",
                name:"license",
                choices:['Appache 2.0',
                        'MIT',
                        'BSD 2',
                        'BSD 3',
                        'N/A'],
                        },
                        
                {
                    type: "input",
                message: "Please Provide your email address",
                name:"email"
                    },

                    {
                        type: "input",
                    message: "Please provide github username",
                    name:"username"
                        },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Success!');
    }
});

}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers) => { console.log(answers);
     writeToFile('newREADME.md', generateMarkdown(answers));
});
}

// Function call to initialize app
init();

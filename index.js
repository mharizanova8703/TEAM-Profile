const inquirer = require('inquirer')
const fs = require('fs')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const path = require('path')

const teamMember = []
function startPromp() {
  // Promping Manager questions
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the managers name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the managers id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the managers email?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the managers email?',
    },
  ])
  .then(answers => {
            var { name, id, email, officeNumber } = answers;
            var manager = Manager(name, id, email, officeNumber);
            memberTeam.push(manager);

            //Creating a function to start adding more team member after promp Questions 
            startTeam();
  })
}
function startTeam(){

}


function prompEng() {
    inquirer
    .prompt([
        {
                type: "input",
                name: "name",
                message: "What is the Engineer's name?"
            },
        {
                type: "input",
                name: "id",
                message: "What is the Engineer's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Engineer's email?"
            },
              {
                type: "input",
                name: "github",
                message: "What is the Engineer's Github username?"
              }
    ])
    .then(answers => {
            var {name, id, email, github} = answers;
            var engineer = Engineer(name, id, email, github);
            teamMember.push(engineer);
        })

}

startPromp()
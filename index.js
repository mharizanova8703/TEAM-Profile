const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const path = require('path')

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

const teamMember = []
function startPromp() {
  // Promping Manager questions
  inquirer
    .prompt([
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
        message: 'What is the managers office number?',
      },
    ])
    .then((answers) => {
      var { name, id, email, officeNumber } = answers
      var manager = new Manager(name, id, email, officeNumber)
      teamMember.push(manager)

      //Creating a function to start adding more team member after promp Questions
      startTeam()
    })
}
function startTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'command',
        message: 'Would you like to add more team members?',
        choices: ['Add an Engineer', 'Add an Intern', 'Make team'],
      },
    ])
    .then((answers) => {
      // create a switch statement to choose between engineer, intern, or build team
      statement = answers.command

      switch (statement) {
        case 'Add an Engineer':
          prompEng()
          break
        case 'Add an Intern':
          prompInt()
          break
      }
    })
}

function prompEng() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's ID?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's Github username?",
      },
    ])
    .then((answers) => {
      var { name, id, email, github } = answers
      var engineer = new Engineer(name, id, email, github)
      teamMember.push(engineer)
      //Creating a function to start adding more team member after promp Questions
      startTeam()
    })
}

function prompInt() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the Interns name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the Interns id?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the Interns email?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is the school name?',
      },
    ])
    .then((answers) => {
      var { name, id, email, school } = answers
      var intern = new Intern(name, id, email, school)
      teamMember.push(intern)

      startTeam()
    })
}

startPromp()

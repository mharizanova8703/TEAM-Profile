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
}

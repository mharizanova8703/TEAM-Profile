const inquirer = require('inquirer')
const fs = require('fs')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const path = require('path')

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

const render = require('./src/template.js')

const teamMember = []

function startPromp() {
  // Creating function to Promp Manager questions
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
      console.log('member team', teamMember)

      //Creating a function to start adding more team member after promp Questions
      //startTeam()
      nextOne()
    })
}
const anotherOne = [
  {
    type: 'list',
    name: 'nextEmployee',
    message:
      'Select the type of team member you would like to add next, if you are done select "Done" to generate your team ',
    choices: ['Engineer', 'Intern', 'Done'],
  },
]
function nextOne() {
  inquirer.prompt(anotherOne).then((response) => {
    // .prompt([
    //  {
    //   type: 'list',
    // name: 'command',
    // message: 'Would you like to add more team members?',
    // choices: ['Add an Engineer', 'Add an Intern', 'Create the team'],
    //},
    // ])
    //.then((answers) => {
    // statement = answers.command

    switch (response.EEnginmployee) {
      case 'Add an Engineer':
        prompEng()
        break

      case ' Add an Intern':
        prompIntern()
        break

      case 'Create the team':
        makeTeam()
    }
  })
  // use inquirer to ask them what they want tot add to the team and use a switch function...depending on what they choose fire off that prompEnd,you prompManager, promptIntern
  // when you dont want to add anymore team members fire off the generateHTML function which will pass the teammembers array to another file where you will have to dynamically create bootstrap cards and append them to a dynamically created html
}
//Creating a function to promp the Engineer name,id,email,username
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
    .then((responce) => {
      // var { name, id, email, github } = answers
      var engineer = new Engineer(
        responce.name,
        responce.id,
        responce.email,
        responce.github,
      )
      teamMember.push(engineer)
      console.log('member team', teamMember)
      nextOne()
    })
}
//creating a function to promp intern name,id,email,school name
function prompIntern() {
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
    .then((responce) => {
      var intern = new Intern(
        responce.name,
        responce.id,
        responce.email,
        responce.school,
      )
      teamMember.push(intern)
      console.log('member team', teamMember)
      nextOne()
    })
}
//function renderTeam() {
//if (!fs.existsSync(OUTPUT_DIR)) {
//  fs.mkdirSync(OUTPUT_DIR)
// }
//fs.writeFileSync(outputPath, render(teamMember), 'utf8')

startPromp()

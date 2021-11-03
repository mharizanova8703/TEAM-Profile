# TEAM Profile
 # Screenshot 
 
 <img width="1390" alt="Screen Shot 2021-11-03 at 10 42 12 AM" src="https://user-images.githubusercontent.com/85656320/140082464-9ea3d4a5-5e88-4b92-acc3-35dc7035ccb3.png">

 
 
# Instructions
This is a software engineering team generator command line application.The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests.When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

# Demo

<img width="414" alt="Screen Shot 2021-11-03 at 10 50 03 AM" src="https://user-images.githubusercontent.com/85656320/140084186-888de30f-8cae-4db7-a7db-d52322f79b10.png">





 # User Story
 
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

Some guidelines how we can deliver the project:

* install npm init package.json (Run npm init.
Fill out the prompts to create your package. json.)
* npm install inquirer (npm install inquirer) 
*  npm install jest (npm install --save-dev jest)
*  Basic file setup (classes in lib, test in a test folder)
*  .gitignore 
  

```md
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

# Test
Application uses Jest by running npm test in command line.
# Collaboration
* Special thanks to @djdyer
*  Reference for help with the switch function : Tutor, Ta
*  Reference for help render HTML: AskBCS (learning Asistant)
*  Reference  for help : https://www.w3schools.com/js/js_switch.asp


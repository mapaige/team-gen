const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const employeeDB = [];
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');

function getUserInput() {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'role',
				choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
			},
		])
		.then(function (userInput) {
      switch(userInput.role){
        case "Manager" :
          addManager()
          break 
        case "Engineer" :
          addEngineer()
          break
        case "Intern" :
          addIntern()
          break
        case "Exit" :
           createTeam()
        break
      }
    });
}
   function addManager(){
     inquirer.prompt([
      {
        type: "input",
        message : "What is your name?",
        name: "name"
      } ,
        {
          type: "input",
          message : "What is your ID?",
          name: "id"
        },
        {
          type: "input",
          message: "What is your email address?",
          name: "email"
        },
        {
        type:"input",
        message: "What is your office id number?",
        name: "officeNumber"
      },
     ]).then(function(userInput){
          const newManager = new Manager(userInput.name,userInput.id,userInput.email,userInput.officeNumber)
          employeeDB.push(newManager)
          getUserInput()
     })
   }

   function addEngineer(){
     inquirer.prompt([
     {
      type: "input",
      message : "What is your  engineers' name?",
      name: "name"
    } ,
      {
        type: "input",
        message : "What is your engineers' ID?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your engineers' email address?",
        name: "email"
      },
      {
      type:"input",
      message: "What is your engineers' Github profile?",
      name: "gitHub"
    },
  ]).then(function(userInput){
    const newEngineer = new Engineer(userInput.name,userInput.id,userInput.email,userInput.gitHub)
    employeeDB.push(newEngineer)
          getUserInput()
  })
}
   function addIntern(){
    inquirer.prompt([
      {
       type: "input",
       message : "What is your interns' name?",
       name: "name"
     } ,
       {
         type: "input",
         message : "What is your interns' ID?",
         name: "id"
       },
       {
         type: "input",
         message: "What is your interns' email address?",
         name: "email"
       },
       {
       type:"input",
       message: "What is your interns' school name?",
       name: "schoolName"
     },
   ]).then(function(userInput){
    const newIntern = new Intern(userInput.name,userInput.id,userInput.email,userInput.schoolName)
    employeeDB.push(newIntern)
          getUserInput()
   })
 }
 

   function  createTeam(){
     console.log(employeeDB)
     const cards = render(employeeDB)
     fs.writeFile(outputPath, cards, function(err){
       if (err) throw (err)
       console.log("Success!")
     })
   }


   getUserInput()

// const intern() => {
//   return inquirer.prompt([
//     {
//      type: "list",
//      name: "name",
//      message: "Enter Interns' name:"

//      },
//      {
//        type: "input",
//        name :"id",
//        message: "Enter the interns' email address?"
//      },
//     {
//        type: "input",
//        name: "id",
//        message: "What school does the intern attend?",

//      },r
//    {
//     type: "input",
//     name : "office number ",
//     message: "What is the engineers' github profile?",

//     },
//     {
//       type: "list",
//       name: "role",
//       choices: ["Engineer", "Intern", "Exit"]

//     },

// }

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");



function getUserInput() {
  
  return inquirer.prompt([
      {     
       type: "list",
       name: "role",
       choices: ["Engineer", "Intern", "Manager"],
       
       },
      {
         type: "input",
         name: "id",
         message: "What is your employee id?",
        
       },
     {
      type: "input",
      name : "email",
      message: "What is your email?",

      },
    
])
}

  
  
 


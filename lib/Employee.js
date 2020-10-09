// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name,id,email){
    this.name = name;
        this.id = id;
    this.email = email;
  }
  getName(){
    return this.name
  }
  getId(){
    return this.id
  }
  getEmail(){
    return this.email
  }
  getRole(){
    if (this.title === undefined) {
    return "Employee";
  }

  return this.title;
  }
}


 module.exports = Employee;


//  name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'
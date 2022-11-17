const Employee = require(`./employee`);

class Intern extends Employee {
    constructor(name, ID, email, school) {
        this.school = school
        super(name, ID, email);
    }
    getSchool() {}
    getRole() {
        //Overridden to Intern
    }
}
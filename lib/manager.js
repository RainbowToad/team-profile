const Employee = require(`./employee`);

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        this.officeNumber = officeNumber
        super(name, ID, email);
    }
    getOfficenum() {}
    getRole(){
        //Overridden to return "Manager"
    }
}
const Employee = require(`./employee`);

class Engineer extends Employee {
    constructor(name, ID, email, github) {
        this.github = github;
        super(name, ID, email);
    }
    
    getHub() {}
    getRole() {
        //Overiddent to Engineer
    }

}
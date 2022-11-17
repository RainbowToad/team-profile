const Employee = require(`./employee`);

class Engineer extends Employee {
    constructor(github) {
        this.github = github
    }
    getHub() {}
    getRole() {
        //Overiddent to Engineer
    }

}
import StudentBuilder from "./StudentBuilder";

export default class Student {

    name: string;
    age: number;
    mobile: number;

    constructor(b: StudentBuilder){
        this.name = b.getName();
        this.age = b.getAge();
        this.mobile = b.getMobile();    
    }

    static getBuilder(): StudentBuilder {
        return new StudentBuilder();        
    }       
}


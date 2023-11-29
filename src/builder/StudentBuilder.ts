import Student from "./Student";

export default class StudentBuilder {

    name: string;
    age: number;
    mobile: number;

    // Ideally this has to be private and needs to be part of 
    // Student class itself. However, in typescript defining 
    // inner class seems not possible
    // Need to check
    constructor(){
        this.name = "";
        this.age = 0;
        this.mobile = 0;
    }

    setName(name: string): StudentBuilder{
        this.name = name;
        return this;
    }

    setMobile(mobile: number): StudentBuilder{
        this.mobile = mobile;        
        return this;
    }

    setAge(age: number): StudentBuilder{
        this.age = age;        
        return this;
    }

    getName(): string{
        return this.name;
    }

    getAge(): number{
        return this.age;
    }

    getMobile(): number{
        return this.mobile;
    }


    validate() :boolean{
        if(this.name === '' || this.age == 0 ){
            return false;
        }

        return true;
    }

    build(): Student {
        if(!this.validate()){
            throw new Error("Missing values");
        }

        return new Student(this);
    }
}



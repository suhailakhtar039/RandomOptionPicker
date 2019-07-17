class Person{
	constructor(name='Anonymous',age=0){
		this.name=name;
		this.age=age;
	}
	getGreetings(){
		return `Hi, I am ${this.name}!`
	}
	getDescription(){
		return `${this.name} is ${this.age} year(s) old.`;
	}
};

class Student extends Person{
	constructor(name,age,major){
		// console.log("testing constructor")
		super(name,age);
		this.major=major;
	}
	hasMajor(){
		if(this.major)
		{
			// console.log("inside brackets")
			return true;
		}
		return false;
	}
	getDescription(){//overwriting
		// console.log("testing");
		let description=super.getDescription();
		if(this.hasMajor()){
			description+=` Their major is ${this.major}.`
		}
		return description;
	}
}
const other=new Student("Suhail Akhtar",19);
console.log(other.getDescription());
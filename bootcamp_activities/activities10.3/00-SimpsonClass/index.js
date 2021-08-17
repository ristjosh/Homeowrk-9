class Simpsons {

	constructor(firstName) {
		this.firstName = firstName
		this.lastName = "Simpson";
		this.street = "Evergreen Terrace";
	};

	printName(justFirst) {
		if (justFirst) {
			console.log(this.firstName);
		}
		else {
			console.log(this.firstName + ' ' + this.lastName);
		}
	}
}

const homer = new Simpsons("Homer");
const lisa = new Simpsons("Lisa");

homer.printName(true);
lisa.printName();
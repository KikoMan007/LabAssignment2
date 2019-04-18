

class Greeter {
    
    firstName: string; 
    lastName: string; 
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName; 
}
showGreeting() {
    console.log('from showGreeting this.firstName:', this.firstName, 'this.lastName:', this.lastName)
}
}
const greeter = new Greeter('Michael', 'Asavamedhi');
greeter.showGreeting();

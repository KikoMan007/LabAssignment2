class HelloWorld {

    public firstName: String;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log('Hello World!' + 'My name is ' + this.firstName + ' ' + this.lastName);
    }

}

const myHelloClassInstance = new HelloWorld('Michael', 'Asavamedhi');
myHelloClassInstance.sayHello();
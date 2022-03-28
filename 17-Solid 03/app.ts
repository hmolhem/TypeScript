class Parent{
    name: string;
    print():string{
        return `name is ${this.name}`;
    }
    // sayHi():string{
    //     return `${this.name} say Hi.`
    // }
}

interface IUser{
    sayHi():string;
}

class User extends Parent, implements IUser{
    sayHi(): string {
        return `${this.name} say Hi.`;
    }

}


class Car extends Parent{

}

class Person extends Parent, implements IUser{
    sayHi(): string {
        return `${this.name} Hi, How is it going.`;
    }

}
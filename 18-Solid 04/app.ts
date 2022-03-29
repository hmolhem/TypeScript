// I: Interface Segregation Principle
interface IManage{
    add();
    remove();
    // edit();
}

interface IUser extends IManage {
    edit();
    
}
// use all method in interface
class User implements IUser{
    edit() {
        throw new Error("Method not implemented.");
    }
    add() {
        throw new Error("Method not implemented.");
    }
    remove() {
        throw new Error("Method not implemented.");
    }

}

// use onle two add and remove method
class Car implements IManage{
    add() {
        throw new Error("Method not implemented.");
    }
    remove() {
        throw new Error("Method not implemented.");
    }

}

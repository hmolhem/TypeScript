interface IUser{
    name: string;
    sureName: string;
    id: number;
    print():string;
}

interface IManage{
    add():void;
    edit():void;
}
class Person implements IUser, IManage{
    add(): void {
        throw new Error("Method not implemented.");
    }
    edit(): void {
        throw new Error("Method not implemented.");
    }
    name: string;
    sureName: string;
    id: number;
    print(): string {
        return this.name + this.sureName;
    }
}

class  Car implements IManage{
    add(): void {
        throw new Error("Method not implemented.");
    }
    edit(): void {
        throw new Error("Method not implemented.");
    }

}

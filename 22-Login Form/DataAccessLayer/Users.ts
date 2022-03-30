import {UserModel} from "../view/user-model";

export class Users{
    lsvUsers: UserModel[] = [
        {name: "Hossein", password: "molhem"},
        {name: "Maryam", password: "sanjari"}
    ];

    findUser(user:UserModel){
        return this.lsvUsers.find(item =>{
            return item.name == user.name && item.password == user.password
        })
    }

}
import {UserManage} from "./database/user";
import {Human} from "./views/human";
{
    let h:Human = new Human();
    h.name = "Hossein";
    h.sureName = "Molhem";
    let u: UserManage = new UserManage();
    // debugger
    u.add(h);
    u.read().forEach(item =>{
        document.getElementById("name").innerText += " " +item.name;
    })
}
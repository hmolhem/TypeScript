
import {Users} from "./DataAccessLayer/Users"
import {ValidUser} from "./valid/info-valid"
import {UserModel} from "./view/user-model"
{
    let save = () => {
        let name = document.getElementById('name')['value'];
        let password = document.getElementById('password')['value'];

        if(new ValidUser().validUser(name, password)){
            let model = new UserModel();
            model.name = name;
            model.password = password;
            let user = new Users().findUser(model);
            if (user != undefined){
                alert("شما با موفقیت لاگین کردید.");
            }else{
                alert("کاربر یافت نشد.");
            }
        }else{
            alert("خطای اعتبار سنجی");
        }
    }

}
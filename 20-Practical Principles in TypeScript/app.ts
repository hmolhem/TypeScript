import { User } from "./User";
import * as C from "./car";

{
  let user: User = new User();
  user.name = "Hossein";
  document.getElementById("name").innerText = user.name;

  let c: C.Car2.Car = new C.Car2.Car();
  c.name = "PRID";
  document.getElementById("car").innerText = c.name;
}

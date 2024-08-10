import { Asset }  from "./asset.js"
import { Login }  from "./login.js"
import { Logout } from "./logout.js"
import { Text }   from "./text.js"

class Main{
  constructor(){
    new Login()
    new Logout()
    this.asset()
  }
  asset(){
    new Asset(["talk"]).promise.then((()=>{
      this.init()
    }))
  }
  init(){
    new Text()
  }
}

switch(document.readyState){
  case "complete":
  case "interactive":
    new Main()
  break
  default:
    window.addEventListener("DOMContentLoaded", (()=>new Main()))
}
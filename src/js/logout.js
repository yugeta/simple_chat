import { Login } from "./login.js"

export class Logout{
  constructor(){
    this.set_event()
  }

  get logout_button(){
    return document.querySelector(`button[name="logout"]`)
  }

  set_event(){
    this.logout_button.addEventListener("click", this.click.bind(this))
  }

  click(){
    localStorage.removeItem(Login.localStorage_key)
    new Login()
  }
}
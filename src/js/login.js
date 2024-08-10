
export class Login{
  constructor(){
    this.set_event()
    this.check_name()
  }

  static localStorage_key = "simple_chat_name"

  get send_button(){
    return document.querySelector(`button[name="name_send"]`)
  }

  get name_input(){
    return document.querySelector(`input[name="my_name"]`)
  }

  get my_name(){
    return localStorage.getItem(Login.localStorage_key)
  }

  set_event(){
    if(this.send_button){
      this.send_button.addEventListener("click" , this.click_button.bind(this))
    }
  }

  click_button(){
    if(!this.name_input.value){
      alert("名前を入力してください。");
      return;
    }
    this.save_name(this.name_input.value)
    this.check_name()
  }

  save_name(name){
    localStorage.setItem(Login.localStorage_key, name)
  }

  check_name(){
    if(this.my_name){
      document.body.setAttribute("type" , "input")
      this.view_name()
    }
    else{
      document.body.setAttribute("type" , "name")
      this.clear_name()
    }
  }

  get name_elms(){
    return document.querySelectorAll(".name")
  }
  get name_attrs(){
    return document.querySelectorAll("[data-user]")
  }

  view_name(){
    for(const elm of this.name_elms){
      if(elm.tagName === "INPUT"){
        elm.value = this.my_name
      }
      else{
        elm.textContent = this.my_name
      }
    }
    for(const elm of this.name_attrs){
      elm.setAttribute("data-user", this.my_name)
    }
  }

  clear_name(){
    for(const elm of this.name_elms){
      if(elm.tagName === "INPUT"){
        elm.value = ""
      }
      else{
        elm.textContent = ""
      }
    }
    for(const elm of this.name_attrs){
      elm.setAttribute("data-user", "")
    }
  }
}
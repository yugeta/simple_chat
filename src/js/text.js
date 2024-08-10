import { Login }   from "./login.js"
import { Asset }   from "./asset.js"
import { Convert } from "./lib/convert.js"

export class Text{
  static last_time = null

  constructor(){
    this.set_event()
    this.load_text()
  }

  get elm_button(){
    return document.querySelector(`button[name="send"]`)
  }

  get elm_text(){
    return document.querySelector(`input[name="text"]`)
  }

  get my_name(){
    return localStorage.getItem(Login.localStorage_key)
  }

  get php(){
    return "main.php"
  }

  set_event(){
    this.elm_button.addEventListener("click" , this.click.bind(this))
  }

  click(){
    if(!this.elm_text.value){
      alert("テキストが入力されていません。")
      return
    }
    this.send()
  }

  send(){
    const query = {
      mode : 'save_text',
      name : this.my_name,
      text : this.elm_text.value,
    }
    const xhr = new XMLHttpRequest()
    xhr.withCredentials = true
    xhr.open('POST' , this.php , true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.onload = this.sended.bind(this,query)
    const query_string = Object.entries(query).map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join('&')
    xhr.send(query_string)
  }

  sended(data, e){
    const res = JSON.parse(e.target.response)
    console.log(res)
    if(res.status === "success"){
      this.view(res.datas)
      this.clear()
    }
  }

  load_text(){
    const query = {
      mode : 'load_text',
      last_time : Text.last_time || "",
    }
    const xhr = new XMLHttpRequest()
    xhr.withCredentials = true
    xhr.open('POST' , this.php , true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.onload = this.loaded_text.bind(this)
    const query_string = Object.entries(query).map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join('&')
    xhr.send(query_string)
  }

  loaded_text(e){
    const res = JSON.parse(e.target.response)
    console.log(res)
    if(res.status === "success"){
      this.view(res.datas)
    }
    this.next()
  }

  get chat_area(){
    return document.querySelector(`#chat .talks`)
  }

  view(datas){
    if(!datas || !datas.length){return}
    for(const data of datas){
      data.user_type = data.name === this.my_name ? "mine" : "";
      const html = new Convert(Asset.datas["talk"]).double_bracket(data)
      this.chat_area.insertAdjacentHTML("beforeend" , html)
      Text.last_time = data.datetime
    }
    this.chat_area.scrollTop = this.chat_area.scrollHeight
  }

  clear(){
    this.elm_text.value = ""
  }

  next(){
    setTimeout(this.load_text.bind(this) , 3000)
  }
}
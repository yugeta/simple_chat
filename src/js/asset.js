

export class Asset{
  static datas = {}

  constructor(files){
    this.files = files
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject  = reject
      this.load()
    })
  }

  load(){
    if(!this.files || !this.files.length){
      this.finish()
      return
    }
    const file = this.files.shift()
    const path = `asset/${file}.html`
    const xhr = new XMLHttpRequest()
    xhr.withCredentials = true
    xhr.open('GET' , path , true)
    xhr.setRequestHeader("Content-Type", "text/html")
    xhr.onload = this.loaded.bind(this , file)
    xhr.send()
  }

  loaded(file, e){
    const html = e.target.response
    Asset.datas[file] = html
    window.requestAnimationFrame(this.load.bind(this))
  }

  finish(){
    this.resolve()
  }
}
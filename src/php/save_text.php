<?php

class SaveText{
  var $datas = [];
  var $options = [];

  function __construct($options=[]){
    $this->options = $options;
    $this->make_dir();
    $this->datas = $this->save_text($options["name"], $options["text"]);
  }

  function make_dir(){
    if(is_dir(Common::$data_dir)){return;}
    mkdir(Common::$data_dir , 0777 , true);
  }

  function save_text($name=null, $text=null){
    $path = Common::get_path();
    $data = [
      "name" => $name,
      "text" => $text,
      "datetime" => date("Y-m-d H:i:s"),
    ];
    $text = json_encode($data , JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    file_put_contents($path , $text.PHP_EOL , FILE_APPEND | LOCK_EX);

    return [$data];
  }
}
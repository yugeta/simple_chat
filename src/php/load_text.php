<?php

class LoadText{
  var $datas = [];
  var $options = [];

  function __construct($options=[]){
    $this->options = $options;
    $this->datas = $this->data_load();
  }

  function data_load(){
    $path = Common::get_path();
    if(!is_file($path)){return;}
    $file_text = file_get_contents($path);
    if(!$file_text){return;}
    // $lines = array_filter(explode(PHP_EOL, $file_text));
    $datas = explode(PHP_EOL, $file_text);
    $lines = $this->filter(array_filter($datas));
    if(!count($lines)){return;}
    return json_decode("[".implode(",",$lines)."]" , true);
  }

  function filter($datas=[]){
    // $this->options["last_time"] = "";
    $this->options["last_time"] = isset($this->options["last_time"]) ? $this->options["last_time"] : "";
    $new_datas = [];
    for($i=0; $i<count($datas); $i++){
      if(!$datas[$i]){continue;}
      $d = json_decode($datas[$i],true);
      if($d && $d["datetime"] && $this->options["last_time"] && $this->options["last_time"] >= $d["datetime"]){continue;}
      $new_datas[] = $datas[$i];
    }
    return $new_datas;
  }
}
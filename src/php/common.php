<?php

class Common{
  public static $data_dir  = "data";
  public static $data_file = "chat.log";
  public static function get_path(){
    return Common::$data_dir ."/". Common::$data_file;
  }

}
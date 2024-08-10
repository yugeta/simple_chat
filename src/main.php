<?php

/**
 * SimpleChat
 * Create : 2024-08-10
 * Author : Yugeta.Koji
 */

require_once "php/common.php";

$start_time = microtime(true);

switch(@$_POST["mode"]){

  // データロード
  case "load_text":
    require_once "php/load_text.php";
    $res = new LoadText($_POST);
    $data = [
      "status"  => $res->datas ? "success" : "error",
      "datas"   => $res->datas,
      "options" => $res->options,
      "time"    => microtime(true) - $start_time,
    ];
    echo json_encode($data , JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
  break;


  // データセーブ
  case "save_text":
    require_once "php/save_text.php";
    $res = new SaveText($_POST);
    $data = [
      "status"  => $res->datas ? "success" : "error",
      "datas"   => $res->datas,
      "options" => $res->options,
      "time"    => microtime(true) - $start_time,
    ];
    echo json_encode($data , JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
  break;

}


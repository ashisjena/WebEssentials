<?php
header("Content-Type: application/json; charset=UTF-8");
$value = $_GET["http://www.omdbapi.com/?t=kong&y=2017&plot=full"];
"myFunction(".$value.")";
?>
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: Post');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With ');


    $server = "localhost";
    $dbname = "takscom";
    $dbusername = "root";
    $password = "";

    $con = mysqli_connect($server, $dbusername, $password, $dbname);

    if(!$con){
        die("DataBase Connect is: ".mysqli_connect_error());
    } 

    ?>

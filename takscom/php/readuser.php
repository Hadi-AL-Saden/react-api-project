<?php
// include_once "./connection.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$dsn='mysql:host=localhost;dbname=takscom';

try {
    $db=new PDO($dsn,'root','');
    // echo 'connected';
} catch (PDOException $err) {
    echo "error accoured, erros message is :". $err->getMessage();
}


$read=$db->prepare("SELECT * FROM user");
$read->execute();
$info=$read->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($info));


?>
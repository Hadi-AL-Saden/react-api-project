<?php
include_once "./connection.php";


$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$pass = $_REQUEST['pass'];





$sql = "INSERT INTO user(name, email, phone, pass) VALUES('$name', '$email', '$phone', '$pass')";

mysqli_query($con,$sql);

$con->close();







?>
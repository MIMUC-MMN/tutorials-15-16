<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<?php
$db_name = 'repetition';

$db_create_query = "CREATE DATABASE IF NOT EXISTS $db_name";
$c = new mysqli('localhost','demouser','demopw');

if($c->connect_error){
    die('could not connect to DB server');
}

$c->query($db_create_query);
if($c->error){
    die($c->error);
}

$c->select_db($db_name);

$create_table_query = "CREATE TABLE IF NOT EXISTS phones (id INTEGER PRIMARY KEY AUTO_INCREMENT, model VARCHAR(255) NOT NULL, manufacturer VARCHAR(255) NOT NULL )"

?>

</body>
</html>
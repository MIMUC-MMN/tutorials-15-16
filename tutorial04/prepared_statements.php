<?php

$host = "localhost";

$user = '<INSERT_USER_HERE>';

$password = "<INSERT_DB_PASSWORD_HERE>";

$db = "<INSERT_DB_NAME_HERE>";

// $c is then a mysqli object representing the connection to the database.
$c = new mysqli($host,$user,$password,$db);

// note: there is a question mark at the end (wildcard)
$query = "SELECT lastName FROM people WHERE firstName=?";


// prepare the statement.
// the returned object is a "statement object"
// http://php.net/manual/de/mysqli.prepare.php
$statement = $c->prepare($query);

$name = "Sam";

// the first parameter indicates that $name is a String.
$statement->bind_param("s", $name);

// now, execute the query
$statement->execute();

// the result needs to be bound to a variable
$statement->bind_result($lastNameResults);

// fetch the actual values;
$statement->fetch();
<?php
header('content-type: application/json');

$correctLyrics = "never gonna give you up never gonna let you down never gonna run around and desert you";
$submittedLyrics = strtolower(trim($_POST['lyrics']));



$response = array();

$response['correct'] = $correctLyrics;
$response['submitted'] = $submittedLyrics;
$response['result'] = strcmp($correctLyrics,$submittedLyrics);
echo json_encode($response);

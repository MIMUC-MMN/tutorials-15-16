<?php
/**
 * Created by PhpStorm.
 * User: tobias
 * Date: 11.11.2015
 * Time: 18:35
 */


// this is meta information to facilitate parsing on the receiving end.
header('content-type','application/json');


$artists = array("The Rolling Stones", "The Beatles", "Red Hot Chili Peppers", "Käptn Peng");

$jsonArtist = json_encode($artists);

echo $jsonArtist;
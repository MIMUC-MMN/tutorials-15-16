<?php

// this is meta information to facilitate parsing on the receiving end.
header('Content-Type: application/json');

$artists =
    array("artists"
        =>array("The Rolling Stones",
            "The Beatles",
            "Red Hot Chili Peppers",
            "Käptn Peng"));

$jsonArtist = json_encode($artists);

echo $jsonArtist;
<?php
/**
 * this file will tell the browser that it's okay that the host might mismatch.
 * It uses the CORS (cross origin resource sharing) paradigm.
 * The trick is to add a simple header to the response.
 * Source: http://enable-cors.org/server_php.html
 */

header("Access-Control-Allow-Origin: *");

echo "You can load me from anywhere!";
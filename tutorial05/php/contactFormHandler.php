<?php
if (isset($_POST['firstName']) &&
    isset($_POST['lastName'])) {
    $response =
            array("status" => "OK",
                "info" => array(
                    "firstName" => $_POST['firstName'],
                    "lastName" => $_POST['lastName']));
    if(isset($_POST['message'])) {
        // this is where you do something
        // with the message, e.g. send it by email.
    }
} else {
    $response = array("status" => "missingParameter");
}
header("Content-type: application/json");
echo json_encode($response);
?>
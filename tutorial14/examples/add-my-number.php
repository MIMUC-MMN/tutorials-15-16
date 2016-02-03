<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<?php
if(isset($_POST['add'])) {
    $currentCounter = 0;
    echo "$currentCounter + " . $_POST['add'] . " = " . ($currentCounter + $_POST['add']);
    $currentCounter += $_POST['add'];
}
?>
<form method="POST" action="add-my-number.php">
    <input type="number"
           placeholder=""
           name="add">
    <input type="submit"
           name="submit"
           value="Add">
</form>
</body>
</html>
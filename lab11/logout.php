session_start();
<?php
//setcookie("Username", "", -1);
unset($_SESSION['Username']);
header("Location: ".$_SERVER['HTTP_REFERER']);
?>
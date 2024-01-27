<?php
echo "check";
session_start();
echo $_SESSION['OTP']." ";
echo "name ".$_SESSION['name'];
echo "email ".$_SESSION['email'];
echo "pass".$_SESSION['password'];
echo "dir ".$_SESSION['img_dir'];


?>
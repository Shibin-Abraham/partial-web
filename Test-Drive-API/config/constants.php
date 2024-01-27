<?php
define('SITEURL','http://localhost/Test-Drive-API/');//this is siturl

        define('HOSTNAME','localhost');
        define('DB_USERNAME','root');
        define('DB_PASSWORD','');
        define('DB_NAME','test_drive_management');

    $conn = mysqli_connect(HOSTNAME, DB_USERNAME, DB_PASSWORD);
    $db_conn = mysqli_select_db($conn,DB_NAME);
    //echo $conn;
?>
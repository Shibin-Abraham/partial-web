<?php
echo "hello";

$to_email = "s@gmail.com";
$subject = "Simple Email Test via PHP";
$body = "Hi, Your OTP is 45369";
$headers = "From: test drive ";

if (mail($to_email, $subject, $body, $headers)) {
    echo "Email successfully sent to $to_email...";
} else {
    echo "Email sending failed...";
}

?>
<?php
$to = "your-email@example.com";
$subject = "Test Email";
$message = "This is a test email from your server.";
$headers = "From: noreply@example.com";

if(mail($to, $subject, $message, $headers)){
    echo "Mail sent successfully!";
} else {
    echo "Mail failed to send.";
}
?>

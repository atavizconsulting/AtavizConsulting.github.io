<?php 

$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailheader = "From: ".$name."<".$email.">\r\n";

$recipient = "atavizconsulting@gmail.com";

mail($recipient, $company, $message, $mailheader)
or die("Error!");



?>
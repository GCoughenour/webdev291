<?php

if(isset($_POST['submit'])){
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $emailfrom = $_POST['email'];
    $message = $_POST['message'];

    $emailTo = "gcoughenour@lcmail.lcsc.edu";
    $headers = "From: ".$emailFrom;
    $txt = "You have received an email from ".$firstName.$lastName.".\n\n".$message;

    mail($emailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");

}
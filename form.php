<?php

if (isset($_POST['submit'])) {

  $type = $_POST['selected-topic'];
  $phoneCall = $_POST['phonecall'];
  $name = $_POST['name'];
  $number = $_POST['phoneno'];
  $time = $_POST['selected-time'];
  $mail = $_POST['email'];
  $message = $_POST['msg'];

  $mailTo = "kontakt@luceclinic.pl";
  $headers = "Luce Clinic - Masz nową wiadomość";
  $txt = "Temat: ".$type.".\n\n Rozmowa telefoniczna: ".$phoneCall.".\n\n Wiadomość od: ".$name.".\n\n Numer telefonu: ".$number.".\n\n Preferowany godziny kontaktu telefonicznego: ".$time.".\n\n Adres email: ".$mail.".\n\n Treść wiadomości: ".$message;


  mail($mailTo, $headers, $txt, $headers);
  header("Location: index.html");
}


?>
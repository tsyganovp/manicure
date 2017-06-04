<?php
$recepient = "tsyganov.p@gmail.com";
$sitename = "VelvetHands";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
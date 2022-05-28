<?php




$emails = new EmailController();

$data = $emails->getRegEmails();


echo $data;
<?php

class EmailController
{


    public function getEmail()
    {
        $email = new Email();
        $recipent = $_POST['recipents'];
        $title = $_POST['title'];
        $message = $_POST['message'];
        $email->sendEmail($recipent, $title, $message);
    }

    public function getRegEmails()
    {
        $regEmail = new Email();

        $sender = $_POST['sender'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $status = $_POST['status'];
        $time = $_POST['time'];
        $idSender = $_POST['idSender'];
        $regEmail->RegEmails($sender, $email, $message, $status, $time, $idSender);
    }

    public function getUserEmail()
    {
        $allMails = new Email();

        $id = $_POST['id'];

        $allMails->getAllEmails($id);
    }
}

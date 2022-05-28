<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
class Email extends db
{


    public function sendEmail($recipent, $title, $message)
    {
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;
            $mail->Username   = 'kamishwrath@gmail.com';                     //SMTP username
            $mail->Password   = '#@NFOB56kamishwrath';                               //SMTP password
            $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
            $mail->isHTML();                                  //Set email format to HTML

            //Recipients
            $mail->setFrom('no-reply@example.com');
            $mail->Subject = $title;
            $mail->Body    = $message;
            $mail->addAddress($recipent);     //Add a recipient

            //Content
            // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }



    public function RegEmails($sender, $email, $message, $status, $time, $idSender)
    {
        $data = new response();

        $sql = "INSERT INTO `generate_emails`(sender, email, message, status, time,send_id) VALUES ('{$sender}','{$email}','{$message}','{$status}','{$time}','{$idSender}')";
        $query = $this->connect()->query($sql);
        if ($query) {
            $data->responses(201, 'success');
        }
    }


    public function getAllEmails($id)
    {
        $data = new response();

        $sql2 = "SELECT * FROM `generate_emails` WHERE send_id = '{$id}'";
        $query2 = $this->connect()->query($sql2);


        if ($query2) {
            $row = $query2->fetch_assoc();

            echo(json_encode(array([
                "sender" => $row['sender'],
                "email" => $row['email'],
                "message" => $row['message'],
                "status" => $row['status'],
                "time" => $row['time'],
            ])));
        }
    }
}

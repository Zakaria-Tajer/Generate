<?php
session_start();

class ClientController
{


    public function registerController()
    {
        function gen_uid($l = 10)
        {
            return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyz"), 0, $l);
        }

        $clientRegistration = new Client();
        $first_name = $_POST['firstName'];
        $last_name = $_POST['LastName'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirm_password = $_POST['confirmationPassword'];
        $unique_id = $_POST['unique_id'];
        $status = 'Active';

        $clientRegistration->register($first_name, $last_name, $email, $password, $confirm_password, $unique_id, $status);
    }


    public function getLoggedClient()
    {
        $data = new response();

        $client = new Client();

        $email = $_POST['email'];
        $password = $_POST['password'];

        if (!empty($email) && !empty($password)) {

            $client->Login($email, $password);
        } else {
            $data->responses(400, 'All fields are required');
        }
    }

    public function getUsernameAndImage()
    {
        $auth = new Auth();
        $token = $_POST['token'];
        $auth->decodeToken($token);
    }

    public function getCred()
    {

        $clientCred = new Client();
        $email = $_POST['email'];
        $clientCred->credential($email);
    }

    public function getUpadtedCred()
    {
        $data = new response();
        $clientUpadatedCred = new Client();

        $email = $_POST['email'];
        $number = $_POST['number'];
        $address = $_POST['address'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $zipCode = $_POST['zipCode'];
        $Country = $_POST['Country'];
        $client_id = $_POST['client_id'];

        if (!empty($email) && !empty($number) && !empty($address) && !empty($city) && !empty($state) && !empty($zipCode) && !empty($Country) && !empty($client_id)) {
            $clientUpadatedCred->updateCredential($email, $number, $address, $city, $state, $zipCode, $Country, $client_id);
        } else {
            $data->responses(400, 'All fields are required');
        }
    }
}

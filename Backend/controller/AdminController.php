<?php




class AdminController
{


    public function getAdminRegistration()
    {
        function gen_uid($l = 15)
        {
            return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyz"), 0, $l);
        }


        $clientRegistration = new Admin();
        $first_name = $_POST['firstName'];
        $last_name = $_POST['LastName'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirm_password = $_POST['confirmationPassword'];

        $clientRegistration->adminRegister($first_name, $last_name, $email, $password, $confirm_password, gen_uid(), gen_uid(6));
    }

    public function checkKey()
    {
        $ReferenceKey = new Admin();
        $Key = $_POST['Key'];
        if (!empty($Key)) {
            $ReferenceKey->getKey($Key);
        } else {
            echo 'Please fill out the field';
        }
    }



    public function getTheClients()
    {
        $allClients = new Admin();

        $allClients->getAllCLients();
    }


    public function getSuperUsers()
    {

        $newAdmins = new Admin();
        $FirstName = $_POST['FirstName'];
        $LastName = $_POST['LastName'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $role = $_POST['role'];
        $unique_id = $_POST['unique_id'];
        $img = null;

        $status = 'Offline now';
        $newAdmins->superUsers($FirstName, $LastName, $email, $password, $img, $status, $unique_id, $role);
    }

    public function superUsersVerifications()
    {
        $superUsersAuth = new Admin();
        $email = $_POST['email'];
        $password = $_POST['password'];
        $superUsersAuth->superUsersAuth($email, $password);
    }
}

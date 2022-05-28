<?php

class UserController {


    public function getUsersAuth()
    {
        $user = new response();
        $token = $_POST['token'];
        $user->isValid($token);
    }

}

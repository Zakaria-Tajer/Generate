<?php


$adminLogin = new AdminController();
$validate = $adminLogin->getLoggedClient();


echo $validate;
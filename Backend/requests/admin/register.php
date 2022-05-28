<?php


$registrationAdmin = new AdminController();
$register = $registrationAdmin->getAdminRegistration();

echo $register;


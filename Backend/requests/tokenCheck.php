<?php

$users = new UserController();
$valid = $users->getUsersAuth();

echo $valid;



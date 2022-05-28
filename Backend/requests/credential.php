<?php


$clientCredentials = new ClientController();
$credentials = $clientCredentials->getCred();

echo $credentials;
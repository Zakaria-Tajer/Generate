<?php
// include 'autoload.php';


$Logged = new ClientController();
$client = $Logged->getLoggedClient();

echo $client;
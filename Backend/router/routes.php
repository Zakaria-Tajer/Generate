
<?php
require 'vendor/autoload.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/plain; charset=utf-8');

header('Content-Type: application/json');

header("Access-Control-Allow-Methods: GET");

header("Allow: GET, POST, OPTIONS, PUT, DELETE");

header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Allow-Origin");
$router = new AltoRouter();



$router->map('POST', '/api/UserValid', '/tokenCheck');

$router->map('POST', '/api/user', '/register');
$router->map('POST', '/api/userLogin', '/login');
$router->map('POST', '/api/clientData', '/clientImage');
$router->map('POST', '/api/clientCredential', '/credential');
$router->map('POST', '/api/updateCredential', '/updateData');
$router->map('POST', '/api/Emailing', '/EmailSender');
$router->map('POST', '/api/getEmails', '/Emails');
$router->map('POST', '/api/allMails', '/AllMails');


// ? Admin routes
$router->map('POST', '/api/adminRegister', '/admin/register');
$router->map('POST', '/api/ReferenceKey', '/admin/keyChecker');
$router->map('POST', '/api/getClients', '/admin/getAllClients');
$router->map('POST', '/api/SuperUsers', '/admin/CreateSuperUsers');
$router->map('POST', '/api/SupersUsersLogin', '/admin/SuperUsersLogin');


































include 'matching.php';
?>
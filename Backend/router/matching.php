<?php
include 'autoload.php';

$match = $router->match();

if ($match !== null) {
    if (is_callable($match['target'])) {
        call_user_func_array($match['target'], $match['params']);
    } else {
        // $prams = $match['params'];
        include "requests/{$match['target']}.php";
    }
}

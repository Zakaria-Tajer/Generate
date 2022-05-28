<?php
// session_start();
spl_autoload_register("autoLoader");
function autoLoader($className){
    $paths = array(
        'Db/',
        'model/',
        'controller/',
        'helper/',
        'uploads/',
    );
    $extention = explode('\\', $className);
    $name = array_pop($extention);

    foreach($paths as $path){
        $file = sprintf($path."%s.php",$name);
        if(is_file($file)){
            include_once $file;
        }
    }


}

?>
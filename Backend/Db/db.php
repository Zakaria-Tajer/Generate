<?php

class db {

    protected $serverName;
    protected $username;
    protected $password;
    protected $dbName;


    protected function connect(){
        $this->serverName = 'localhost';
        $this->username = 'root';
        $this->password = '';
        $this->dbName = 'generate';

        $conn = new mysqli($this->serverName,$this->username,$this->password,$this->dbName);

        return $conn;
    }




}
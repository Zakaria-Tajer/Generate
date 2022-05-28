<?php


use Firebase\JWT\JWT;
use Firebase\JWT\Key;


class Auth
{
    private $secret_Key = 'deje#i93u2903u2j239ii#(9#)I()#I#()*#()#(#JDOD(#DJ_#O#)#';
    public function auth($firstName, $LastName, $email)
    {

        $date   = new DateTimeImmutable();
        $expire_at     = $date->modify('+60 minutes')->getTimestamp();
        $domainName = "http://localhost:3000/";
        $username   = $firstName . '' . $LastName;
        $request_data = [
            'iat'  => $date->getTimestamp(),
            'iss'  => $domainName,
            'nbf'  => $date->getTimestamp(),
            'exp'  => $expire_at,
            'userName' => $username,
            'email' => $email
        ];


        // $jwt = JWT::encode($request_data, $this->secret_Key, 'HS256');

        return  JWT::encode(
            $request_data,
            $this->secret_Key,
            'HS256'
        );
    }
    public function loginAuth($email)
    {
        $date   = new DateTimeImmutable();
        $expire_at     = $date->modify('+60 minutes')->getTimestamp();
        $domainName = "http://localhost:3000/";
        $request_data = [
            'iat'  => $date->getTimestamp(),
            'iss'  => $domainName,
            'nbf'  => $date->getTimestamp(),
            'exp'  => $expire_at,
            'email' => $email
        ];
        return  JWT::encode(
            $request_data,
            $this->secret_Key,
            'HS256'
        );
    }

    public function decodeToken($token)
    {
        $key = "deje#i93u2903u2j239ii#(9#)I()#I#()*#()#(#JDOD(#DJ_#O#)#";
        $data = new response();
        try {
            $decode = JWT::decode($token, new Key($key, 'HS256'));
            if($decode){
                echo $decode->email;
            }else {
                $data->responses(201,'decoded');
            }
        } catch (\Exception $e) {
            echo $e->getMessage();
        }
      
    }
}

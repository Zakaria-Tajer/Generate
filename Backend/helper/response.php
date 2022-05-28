<?php


class response
{
    public function responses($http_response_code, $response_body, $token = null, $data = null)
    {
        echo json_encode(["status" => $http_response_code, "bodyMessage" => $response_body, "token" => $token, "data" => $data]);
    }


    public function isValid($token)
    {

        if (isset($token)) {
            echo 'success';
        } else {
            echo 'failed';
        }
    }
}

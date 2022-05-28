<?php


class Client extends db
{


    public function register($first_name, $last_name, $email, $password, $confirm_password, $unique_id, $status)
    {
        $data = new response();
        $jwt = new Auth();

        if (!empty($first_name) && !empty($last_name) && !empty($email) && !empty($password) && !empty($confirm_password)) {
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $sql = "SELECT * FROM `generate_clients` WHERE email = '{$email}'";
                $query = $this->connect()->query($sql);
                $numRows = $query->num_rows;

                if ($numRows > 0) {
                    $data->responses(204, $email . ' Email Already Used');
                } else {
                    $hashedPsw = password_hash($password, PASSWORD_DEFAULT);
                    $hashedPswConfirmation = password_hash($confirm_password, PASSWORD_DEFAULT);

                    if (!preg_match("/^[a-zA-z]*$/", $first_name) && !preg_match("/^[a-zA-z]*$/", $last_name) && strlen($first_name) && strlen($last_name) > 4) {
                        $data->responses(204, 'Enter a valid name');
                    } else if (strlen($password) && strlen($confirm_password) < 8) {
                        $data->responses(204, 'password is too short');
                    } else if ($password !== $confirm_password) {
                        $data->responses(204, 'passwords not matching');
                    } else {
                        if (isset($_FILES['file'])) {
                            $img_name = $_FILES['file']['name'];
                            $img_TmpName = $_FILES['file']['tmp_name'];

                            $imgExtenion = explode('.', $img_name);
                            $Allowed = strtolower(end($imgExtenion));

                            $Extenion = array('jpg', 'jpeg', 'png', 'JPG');
                            $Clientrole = 'client';
                            if (in_array($Allowed, $Extenion) === true) {
                                $time = time();
                                $new_img_name = $time . $img_name;
                                if (move_uploaded_file($img_TmpName, 'uploads/' . $new_img_name)) {

                                    $sql1 = "INSERT INTO `generate_clients`(first_name, last_name, email, password, confirm_password,img,unique_id,status,role)
                                            VALUES ('{$first_name}','{$last_name}','{$email}','{$hashedPsw}','{$hashedPswConfirmation}','{$new_img_name}','{$unique_id}','{$status}','{$Clientrole}')";
                                    $query1 = $this->connect()->query($sql1);

                                    if ($query1) {
                                        $token = $jwt->auth($first_name, $last_name, $email);
                                        $data->responses(201, 'success', $token);
                                    } else {
                                        $data->responses(204, 'failed');
                                    }
                                } else {
                                    $data->responses(204, 'something went wrong');
                                }
                            } else {
                                $data->responses(204, 'You cannot upload this type of image');
                            }
                        }
                    }
                }
            }
        } else {
            $data->responses(204, 'All fields are required');
        }
    }



    public function Login($email, $password)
    {
        $data = new response();
        $jwt = new Auth();

        $sql2 = "SELECT * FROM `generate_clients` WHERE email = '{$email}'";
        $query2 = $this->connect()->query($sql2);

        $numRow = $query2->num_rows;
        // Todo: make num rows in a sepreate func
        if ($numRow > 0) {

            $row = $query2->fetch_assoc();
            if (password_verify($password, $row['password'])) {
                $token = $jwt->loginAuth($email, $password);
                $data->responses(201, 'success', $token);
            } else {
                $data->responses(400, 'Password Incorrect');
            }
        } else {
            $data->responses(400, 'Email or password dosnt match any account');
        }
    }

    public function credential($email)
    {
        $data = new response();
        $sql3 = "SELECT * FROM `generate_clients` WHERE email = '{$email}'";
        $query3 = $this->connect()->query($sql3);
        $NumberRows = $query3->num_rows;

        if ($NumberRows > 0) {
            $rows = $query3->fetch_assoc();
            $cred = [
                "first_name" => $rows['first_name'],
                "last_name" => $rows['last_name'],
                "id" => $rows['id'],
                "image" => $rows['img'] . trim('')
            ];
            $data->responses(201, 'success', '', $cred);
            return $data;
        }
    }


    public function updateCredential($email, $number, $address, $city, $state, $zipCode, $Country, $client_id)
    {
        $data = new response();
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $sql5 = "SELECT * FROM `generate_clients_info` WHERE email = '{$email}'";
            $query5 = $this->connect()->query($sql5);
            $numRows = $query5->num_rows;
            if ($numRows > 0) {
                $data->responses(400, $email . ' email already used');
            } else {
                $sql4 = "INSERT INTO `generate_clients_info`(email,contact_number,Adress,city,state,ZipCode,Country,clients_id) 
                VALUES('{$email}','{$number}','{$address}','{$city}','{$state}','{$zipCode}','{$Country}','{$client_id}')";

                $query6 = $this->connect()->query($sql4);

                if ($query6) {
                    $sqlUpdate = "UPDATE `generate_clients` SET email = '{$email}' WHERE id = '{$client_id}'";
                    $query7 = $this->connect()->query($sqlUpdate);
                    if ($query7) {
                        $data->responses(201, 'success');
                    } else {
                        $data->responses(400, 'Cannot update');
                    }
                } else {
                    $data->responses(400, 'Failed');
                }
            }
        }
    }
}

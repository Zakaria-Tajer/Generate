<?php




class Admin extends db
{


    public function adminRegister($first_name, $last_name, $email, $password, $confirm_password, $unique_id, $reference)
    {
        $jwt = new Auth();
        $data = new response();
        // SELECT * FROM `actions` JOIN `employee` on employee.id= actions.actionId;


        if (!empty($first_name) && !empty($last_name) && !empty($email) && !empty($password) && !empty($confirm_password)) {
            $hashedPsw = password_hash($password, PASSWORD_DEFAULT);
            $hashedPswConfirmation = password_hash($confirm_password, PASSWORD_DEFAULT);

            if (isset($_FILES['file'])) {
                $img_name = $_FILES['file']['name'];
                $img_TmpName = $_FILES['file']['tmp_name'];

                $imgExtenion = explode('.', $img_name);
                $Allowed = strtolower(end($imgExtenion));

                $Extenion = array('jpg', 'jpeg', 'png', 'JPG');
                $Admintrole = 'Admin';
                if (in_array($Allowed, $Extenion) === true) {
                    $time = time();
                    $new_img_name = $time . $img_name;
                    if (move_uploaded_file($img_TmpName, 'adminUploads/' . $new_img_name)) {

                        $sql1 = "INSERT INTO `generate_clients`(first_name, last_name, email, password, confirm_password,img,unique_id,role,reference_Id)
                    VALUES ('{$first_name}','{$last_name}','{$email}','{$hashedPsw}','{$hashedPswConfirmation}','{$new_img_name}','{$unique_id}','{$Admintrole}','{$reference}')";
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


    public function getKey($key)
    {
        $data = new response();
        $sql = "SELECT * FROM `generate_super_users` WHERE unique_id = '{$key}'";
        $query = $this->connect()->query($sql);
        $row = $query->fetch_assoc();

        if ($key == $row['unique_id']) {
            $data->responses(201,'success');
        } else {
            $data->responses(201,'Inccorect reference');
        }
    }


    public function getAllCLients()
    {
        $data = new response();

        $sql3 = "SELECT first_name, last_name, img, unique_id,role,email,status,id FROM `generate_clients`";
        $query3 = $this->connect()->query($sql3);
        $rows = $query3->num_rows;

        if ($rows > 0) {
            $array1 = array();
            while ($row = $query3->fetch_assoc()) {
                array_push($array1, $row);
            }
            print_r(json_encode($array1));
        }
    }



    public function superUsers($FirstName, $LastName, $email, $password, $img, $status, $unique_id, $role)
    {
        $data = new response();
        if (!empty($FirstName) && !empty($LastName) && !empty($email) && !empty($password)) {
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $sql4 = "SELECT * FROM `generate_super_users` WHERE email = '{$email}'";
                $query4 = $this->connect()->query($sql4);

                $numberRows = $query4->num_rows;

                if ($numberRows > 0) {
                    $data->responses(204, $email . ' Email Already Used');
                } else {
                    $hashedPsw = password_hash($password, PASSWORD_DEFAULT);
                    if (strlen($password) < 8) {
                        $data->responses(204, 'password is too short');
                    } else {
                        $sql5 = "INSERT INTO `generate_super_users` (FirstName, LastName, email, password,img ,status, unique_id, role) VALUES ('{$FirstName}','{$LastName}','{$email}','{$hashedPsw}','{$img}','{$status}','{$unique_id}','{$role}')";
                        $query5 = $this->connect()->query($sql5);

                        if ($query5) {
                            $data->responses(201, 'Success');
                        } else {
                            $data->responses(204, 'Something went wrong');
                        }
                    }
                }
            } else {
                $data->responses(204, "{$email} Not a valid email");
            }
        } else {
            $data->responses(204, 'All fields are required');
        }
    }

    public function superUsersAuth($email, $password)
    {
        $data = new response();
        $jwt = new Auth();

        $sql6 = "SELECT * FROM `generate_super_users` WHERE email = '{$email}'";
        $query6 = $this->connect()->query($sql6);

        $numRow = $query6->num_rows;
        if ($numRow > 0) {

            $row = $query6->fetch_assoc();
            if (password_verify($password, $row['password'])) {
                $token = $jwt->loginAuth($email, $password);
                $data->responses(201, 'success', $token);
            } else {
                $data->responses(400, 'Password Incorrect');
            }
        } else {
            $data->responses(400, 'Email or password dosent match any account');
        }
    }
}

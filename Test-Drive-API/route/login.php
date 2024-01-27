<?php include("../config/constants.php");
require '../vendor/autoload.php';

use Firebase\JWT\JWT;


if($_SERVER['REQUEST_METHOD'] == 'POST'){
       if(!empty($_POST['email'])){
              $email = $_POST['email'];
              $sql = "SELECT * FROM user WHERE email='$email'";
              $res = mysqli_query($conn,$sql);
              if(mysqli_num_rows($res) == 1){
                     if(!empty($_POST['password'])){
                            $password = $_POST['password'];
                            $row = mysqli_fetch_row($res);
                            $u_id =$row[0];
                            $email =$row[1];
                            $hased_password =$row[2];
                            $name =$row[3];
                            $img_dir =$row[4];
                            if(password_verify($password,$hased_password)){
                                   $response = array(
                                          "statuscode" => 200,
                                          "JWT" => generateJWT($u_id)
                                   );
                                   echo json_encode($response,JSON_PRETTY_PRINT);
                            }else{
                                   $response = array(
                                          "statuscode" => 401, // Invalid password
                                          "password" => true
                                   );
                                   echo json_encode($response,JSON_PRETTY_PRINT);
                            }
                     }else{
                            $response = array(
                                   "statuscode" => 406 // data not accept
                            );
                            echo json_encode($response,JSON_PRETTY_PRINT);
                     }
              }else{
                     $response = array(
                            "statuscode" => 401 // Invalid email
                     );
                     echo json_encode($response,JSON_PRETTY_PRINT);
              }
       }else{
              $response = array(
                     "statuscode" => 406 // data not accept
              );
              echo json_encode($response,JSON_PRETTY_PRINT);
       }
}else{
       $response = array(
              "statuscode" => 400 // 400 bad request
       );
       echo json_encode($response,JSON_PRETTY_PRINT);
}
function generateJWT($u_id){
       $secret_key = "$2y$10_EyOZEo885gDwK5dDmzU4P_Zh2b5OoZsVSeYq9Z2yywDjj7urseUAC-sVSeYq9Z_35hy3263tt4SG41uRnquwVWaq5Poqcx";
       $payload = [
              'iss'=>'localhost',
              'aud'=>'localhost',
              'exp'=>time()+10000,
              'data'=>[
                     'u_id'=>$u_id
              ],
              ];
       $jwt = JWT::encode($payload,$secret_key,'HS256');
       return $jwt;
}

?>
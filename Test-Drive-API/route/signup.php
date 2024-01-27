<?php
include("../config/constants.php");
session_start();
$target_dir = "../images/user_img/";
if($_SERVER['REQUEST_METHOD'] == 'POST'){
       $name = test_input($_POST['name']);
       $email = test_input($_POST['email']);
       $password = "";
       if(!empty($_POST['password'])){
              $password = password_hash($_POST['password'],PASSWORD_DEFAULT);
       }
       $target_file  = $target_dir.basename($_FILES['file']['name']);
              if(!empty($_POST['email'])&&!empty($_POST['name'])&&!empty($_POST['password'])&&!empty($_POST['confirm-pass'])){
                     $sql = "SELECT email FROM user WHERE email='$email'";
                     $res = mysqli_query($conn,$sql);
                     if(mysqli_num_rows($res)==0){
                            if(password_verify($_POST['confirm-pass'],$password)){
                                   if(move_uploaded_file($_FILES['file']['tmp_name'],$target_file)){
                                          $to_email = $email;
                                          $otp = rand(100000,999999); 
                                          $subject = "OTP Verifivation";
                                          $body = "Dear Customer, Your One Time Password (OTP) is $otp ,Do not share this OTP with anyone.";
                                          $headers = "From:"."Supporting Team";

                                          if (mail($to_email, $subject, $body, $headers)) {
                                                 $_SESSION['OTP'] = $otp;
                                                 $_SESSION['name'] = $name;
                                                 $_SESSION['email'] = $email;
                                                 $_SESSION['password'] = $password;
                                                 $_SESSION['img_dir'] = $target_file;
                                                 $response = array(
                                                        "statuscode" => 200 // otp sended to corresponding email
                                                 );
                                                 echo json_encode($response,JSON_PRETTY_PRINT);
                                          } else {
                                                 $response = array(
                                                        "statuscode" => 424 // email sending faild
                                                 );
                                                 echo json_encode($response,JSON_PRETTY_PRINT);
                                          }
                                   }else{
                                          $response = array(
                                                 "statuscode" => 500 //failed to upload file
                                          );
                                          echo json_encode($response,JSON_PRETTY_PRINT);
                                   }
                            }else{
                                   $response = array(
                                          "statuscode" => 403 // possword must be same
                                   );
                                   echo json_encode($response,JSON_PRETTY_PRINT);
                            }
                     }else{
                            $response = array(
                                   "statuscode" => 409 // email already exists 
                            );
                            echo json_encode($response,JSON_PRETTY_PRINT);
                     }
                    
              }else{
                     $response = array(
                            "statuscode" => 406 // data not acceptable (because data is empty)
                     );
                     echo json_encode($response,JSON_PRETTY_PRINT);
              }
}else{
       $response = array(
              "statuscode" => 400 // 400 bad request
       );
       echo json_encode($response,JSON_PRETTY_PRINT);
}

// test input function return clean(remove the unwanted contents) data
function test_input($data){
       $data = trim($data);
       $data = stripcslashes($data);
       $data = htmlspecialchars($data);
       return $data;
}
       
?>
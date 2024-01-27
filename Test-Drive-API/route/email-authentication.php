<?php include("../config/constants.php");
session_start();
$received_otp = 0;
if($_SERVER['REQUEST_METHOD'] == 'POST'){
       if(isset($_POST['otp'])){
              $received_otp = $_POST['otp'];
              if(isset($_SESSION['OTP'])&&isset($_SESSION['name'])&&isset($_SESSION['email'])&&isset($_SESSION['password'])&&isset($_SESSION['img_dir'])){
                     if($received_otp==$_SESSION['OTP']){
                            $email = $_SESSION['email'];
                            $password = $_SESSION['password'];
                            $name = $_SESSION['name'];
                            $img_dir = $_SESSION['img_dir'];
                            $sql = "INSERT INTO `user` (`u_id`, `email`, `password`, `name`, `img`, `auth`) VALUES (NULL, '$email', '$password', '$name', '$img_dir', '1');";
                            $res = mysqli_query($conn,$sql);
                            if($res == true){
                                   $response = array(
                                          "statuscode"=>200, //200 ok
                                          "email"=>$email
                                   );
                                   echo json_encode($response,JSON_PRETTY_PRINT);
                                   unset($_SESSION['OTP']);
                                   unset($_SESSION['email']);
                                   unset($_SESSION['password']);
                                   unset($_SESSION['name']);
                                   unset($_SESSION['img_dir']);

                            }else{
                                   $response = array(
                                          "statuscode"=>100 //100 oops
                                   );
                                   echo json_encode($response,JSON_PRETTY_PRINT);
                            }
                     }else{
                            $response = array(
                                   "statuscode"=>401 // invalid otp
                            );
                            echo json_encode($response,JSON_PRETTY_PRINT);
                     }
              }else{
                     $response = array(
                            "statuscode"=>440 // session expired
                     );
                     echo json_encode($response,JSON_PRETTY_PRINT);
              }
       }else{
              $response = array(
                     "statuscode" => 400 // 400 bad request
              );
              echo json_encode($response,JSON_PRETTY_PRINT);
       }
}else{
       $response = array(
              "statuscode" => 400 // 400 bad request
       );
       echo json_encode($response,JSON_PRETTY_PRINT);
}



?>
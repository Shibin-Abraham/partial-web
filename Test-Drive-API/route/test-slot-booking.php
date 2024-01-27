<?php include("../config/constants.php");
if($_SERVER['REQUEST_METHOD'] == 'POST'){
       $data = json_decode(file_get_contents("php://input"),true);
       $user_id = test_input($data['userId']);
       $car_id = test_input($data['carId']);
       $car_design_id = test_input($data['carDesignId']);
       $show_room_id = test_input($data['showRoomId']);
       $name = test_input($data['name']);
       $email = test_input($data['email']);
       $phone = test_input($data['phone']);
       $date = test_input($data['date']);
       $time = test_input($data['time']);
       header('Content-type: application/JSON');
       if(isset($data)&&(!empty($user_id))&&(!empty($car_id))&&(!empty($car_design_id))&&(!empty($show_room_id))&&(!empty($name))&&(!empty($email))&&(!empty($phone))&&(!empty($date))&&(!empty($time))){
              if($db_conn){
                     $sql = "SELECT name FROM user WHERE u_id=$user_id";//--------------jwt here------------
                     $res = mysqli_query($conn,$sql);
                     if(mysqli_num_rows($res)==1){
                            //$sql = "INSERT INTO test_slot VALUES('$user_id','$car_design_id','$show_room_id','$name','$email','$phone','$date','$time');";
                            $sql = "INSERT INTO `test_slot` (`s_id`, `u-id`, `car_design_id`, `showroom_id`, `full_name`, `email`, `phone`, `date`, `time`) VALUES (NULL, '$user_id', '$car_design_id', '$show_room_id', '$name', '$email', '$phone', '$date', '$time');";
                            $result = mysqli_query($conn,$sql);

                            if($result == true){
                                   $response = array(
                                          "statuscode"=>200 //200 ok
                                   );
                                   echo json_encode($response,JSON_PRETTY_PRINT);
                            }else{
                                   $response = array(
                                          "statuscode"=>100 //100 oops
                                   );
                                   echo json_encode($response,JSON_PRETTY_PRINT);
                            }
                     }else{
                            $response = array(
                                   "statuscode" => 406 // 406 not acceptable
                            );
                            echo json_encode($response,JSON_PRETTY_PRINT);
                     }

              }else{
                     $response = array(
                            "statuscode"=>503 //503 server under maintanance
                     );
                     echo json_encode($response,JSON_PRETTY_PRINT);
              }
       }else{
              $response = array(
                     "statuscode" => 406 // 406 not acceptable
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
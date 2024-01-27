<?php include("../config/constants.php");
header('Content-type: application/JSON');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
       $data = json_decode(file_get_contents("php://input"),true);
       $token = $data['userToken'];
       echo $token;
       if(isset($data)&&(!empty($token))){
              if($db_conn){
                     $sql = "SELECT * FROM test_slot WHERE u_id=$token";
                     $res = mysqli_query($conn,$sql);
                     $response = array();
                     if(mysqli_num_rows($res)>0){
                            $i = 0;
                            while($row = mysqli_fetch_assoc($res)){
                                   $response[$i]['s_id'] = $row['s_id'];
                                   $response[$i]['u_id'] = $row['u_id'];
                                   $response[$i]['car_design_id'] = $row['car_design_id'];
                                   $response[$i]['showroom_id'] = $row['showroom_id'];
                                   $response[$i]['full_name'] = $row['full_name'];
                                   $response[$i]['email'] = $row['email'];
                                   $response[$i]['phone'] = $row['phone'];
                                   $response[$i]['date'] = $row['date'];
                                   $response[$i]['time'] = $row['time'];
                                   $i++;
                            }
                     }
                     echo json_encode($response,JSON_PRETTY_PRINT);
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





?>
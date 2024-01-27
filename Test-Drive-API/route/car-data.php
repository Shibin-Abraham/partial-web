<?php include('../config/constants.php');

       if($db_conn){
              //echo " conn success";
              $sql = "select * from car";
              $result = mysqli_query($conn,$sql);
              $response = array();
              header("Content-Type: JSON");
              if(mysqli_num_rows($result)>0){
                     $i = 0;
                     while($row = mysqli_fetch_assoc($result)){
                            $response[$i]['car_id'] = $row['car_id'];
                            $response[$i]['car_name'] = $row['car_name'];
                            $response[$i]['company'] = $row['company'];
                            $response[$i]['img_name'] = $row['img_name'];
                            $response[$i]['showroom_id'] = $row['showroom_id'];
                            $i++;
                     }
              }
              echo json_encode($response,JSON_PRETTY_PRINT);
       }else{
              //  echo "";
              $response = array();
              $response[0]['statuscode'] = 503;
              echo json_encode($response,JSON_PRETTY_PRINT);
       }



?>


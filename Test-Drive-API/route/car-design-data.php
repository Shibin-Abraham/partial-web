<?php include('../config/constants.php');

if($db_conn){
       $sql = "select * from car_design";
       $result = mysqli_query($conn,$sql);
       $response = array();
       header('Content-type: JSON');
       if(mysqli_num_rows($result)>0){
              $i = 0;
              while($row = mysqli_fetch_assoc($result)){
                     $response[$i]['car_design_id'] = $row['car_design_id'];
                     $response[$i]['car_id'] = $row['car_id'];
                     $response[$i]['seating'] = $row['seating'];
                     $response[$i]['type'] = $row['type'];
                     $response[$i]['fuel'] = $row['fuel'];
                     $i++;
              }
       }
       echo json_encode($response,JSON_PRETTY_PRINT);
}else{
       $response = array();
       $response[0]['statuscode'] = 503;
       echo json_encode($response,JSON_PRETTY_PRINT);
}

?>
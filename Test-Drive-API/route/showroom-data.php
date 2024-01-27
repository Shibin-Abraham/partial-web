<?php include('../config/constants.php');

if($db_conn){
       $sql = "select * from showroom";
       $result = mysqli_query($conn,$sql);
       $response = array();
       header('Content-type:JSON');
       if(mysqli_num_rows($result)>0){
              $i = 0;
              while($row = mysqli_fetch_assoc($result)){
                     $response[$i]['showroom_id'] = $row['showroom_id'];
                     $response[$i]['showroom_name'] = $row['showroom_name'];
                     $response[$i]['showroom_address'] = $row['showroom_address'];
                     $response[$i]['status'] = $row['status'];
                     $response[$i]['phone'] = $row['phone'];
                     $response[$i]['img_name'] = $row['img_name'];
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
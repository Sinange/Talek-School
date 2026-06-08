<?php
if($_SERVER['REQUEST_METHOD']==='POST' && isset($_FILES['file'])){
    $filename= $_FILES['file']['name'];
    $tmpName= $_FILES['file']['tmp_name'];
    $filesize=$_FILES['file']['size'];
    $name= isset($_POST['name']) ? $_POST['name'] : "N/A";
    $phone= isset($_POST['phone']) ? $_POST['phone'] : "N?A";
    $card= isset($_POST['card']) ? $_POST['card'] : "N/A";
    $workingStaff= isset($_POST['workingStaff']) ? $_POST['workingStaff'] : "N?A";
    $email= isset($_POST['email']) ? $_POST['email'] : "N/A";
    $uploadDirectory = "../uploads/";
    if(!is_dir($uploadDirectory)){
        mkdir($uploadDirectory,0777,true); }
    $array = (object)["name"=>$name, 'filename'=>$filename, "card"=>$card, "phone"=>$phone,"job"=>$workingStaff,"email"=>$email];
    $data=$uploadDirectory."data.json";
    $dats=file_exists($data)?json_decode(file_get_contents($data),true):[];
    $dats[]=$array;    
    file_put_contents($data,json_encode($dats,JSON_PRETTY_PRINT));
    $destination = $uploadDirectory.basename($filename);
    if (move_uploaded_file($tmpName, $destination)) {
    echo  json_encode(["status"=>"success","message"=> "File data saved"]);
    }else{
      echo json_encode(["status"=>"error", "message"=>"File move file"]);
    }
}
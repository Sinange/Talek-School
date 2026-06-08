<?php
if($_SERVER['REQUEST_METHOD']==='POST') {
    $name = $_POST['name']??"Anonymous";
    $email = $_POST['email']??"No email";
    $feedback = $_POST['feedback']??$_POST['feedback'];
    $date = date("d-m-y H-m-s");
    $array = [$date, $name, $email, $feedback];
    $stringData = implode(",", $array).PHP_EOL;
    $directory = "../feeback/";
  if(!is_dir($directory)) {
        mkdir($directory, 0777);
    }
    $feedFile = $directory . basename("feedback.txt");
    if(!file_exists($feedFile)) {
    if (file_put_contents($feedFile, $stringData)) 
        {
        echo json_encode(["status" => "success", "message" => "Query submitted sucessfully"]);    
        } else {
        echo json_encode(["status" => "Failure", "message" => "Query failed to submit! Try again later"]);
    }
    }else{
         if (file_put_contents($feedFile, $stringData,FILE_APPEND)) 
        {
        echo json_encode(["status" => "success", "message" => "Query submitted sucessfully"]);    
        } else {
        echo json_encode(["status" => "Failure", "message" => "Query failed to submit! Try again later"]);
    }
    }

}
?>
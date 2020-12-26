<? php


$filename = $_FILES["inpFile"]["name"];

$location  = "Mp3/$filename";

if(move_uploaded_file($_FILES["inpFile"]["name"], $location)){
	echo "Success";
}else{
	echo "Failed";
}

?>
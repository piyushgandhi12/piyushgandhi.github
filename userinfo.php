<?php 

$con = mysqli_connect('localhost','root');

if($con){
    echo "Connection Successfull";
}else{
    echo "Connection Failed";
}

mysqli_select_db($con, 'userdata');

$user = $_POST['user'];
$email = $_POST['email'];
$num = $_POST['num'];
$comments = $_POST['comments'];

$query = " insert into userinfo (user, email, num, comments) values ('$user', '$email', '$num', '$comments')";

echo "$query";

mysqli_query($con,$query);

header('location: index.php');
?>
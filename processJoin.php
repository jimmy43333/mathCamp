<?php
session_start();
if ($_GET['id'] == 0){
	$_SESSION['name'] = $_POST['name'];
	$_SESSION['nickname'] = $_POST['nickname'];
	$_SESSION['sex'] = $_POST['sex'];
	$_SESSION['securityNumber'] = $_POST['securityNumber'];
	$_SESSION['phone'] = $_POST['phone'];
	$_SESSION['cellphone'] = $_POST['cellphone'];
	$_SESSION['address'] = $_POST['address'];
	$_SESSION['school'] = $_POST['email'];
	$_SESSION['grade'] = $_POST['grade'];
}
?>

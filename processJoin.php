<?php
include '../sqlInfo.php';
$connect = new PDO(DB_TYPE.':host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASSWD);
$connect->query('GET NAMES UTF8');
$result = $connect->prepare("INSERT into join_member values(:name, :nickname, :sex, :securityNumber, :phone, :cellphone, :address, :email, :school, :grade, :parentsName, :parentsRelation, :parentsPhone, :parentsAddress, :tshirtsize, :diet, :otherDietInfo, :illness, :introduction, :source, :addition");
$where = array(':name' => $_GET['name'], ':nickname' => $_GET['nickname'], ':sex' => $_GET['sex'], ':securityNumber' => $_GET['securityNumber'], ':phone' => $_GET['phone'], ':cellphone' => $_GET['cellphone'], ':address' => $_GET['address'], ':email' => $_GET['email'], ':school' => $_GET['school'], ':grade' => $_GET['grade'], ':parentsName' => $_GET['parentsName'], ':parentsRelation' => $_GET['parentsRelation'], ':parentsPhone' => $_GET['parentsPhone'], ':parentsAddress' => $_GET['parentsAddress'], ':tshirtsize' => $_GET['tshirtsize'], ':diet' => $_GET['diet'], ':otherDietInfo' => $_GET['otherDietInfo'], ':illness' => $_GET['illness'], ':introduction' => $_GET['introduction'], ':source' => $_GET['source'], ':addition' => $_GET['addition']);
$result->execute($where);
echo 'yes';
?>

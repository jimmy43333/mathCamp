<?php
include '../sqlInfo.php';
$connect = new PDO(DB_TYPE.':host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASSWD);
$connect->query('SET NAMES UTF8');
$result = $connect->prepare("INSERT into join_member values(:name, :nickname, :sex, :securityNumber, :phone, :cellphone, :address, :email, :school, :grade, :parentsName, :parentsRelation, :parentsPhone, :parentsAddress, :tshirtsize, :diet, :otherDietInfo, :illness, :introduction, :source, :addition");
$where = array();
$result->execute($where);
?>

<?php
session_start();
$_SESSION['test' = 'test';
define('DB_NAME','camp_data');
define('DB_USER','root');
define('DB_PASSWD','[mathcamp@MCL');
define('DB_HOST','localhost');
define('DB_TYPE','mysql');
$connect = new PDO(DB_TYPE.':host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASSWD);
$connect->query('SET NAMES UTF8');
$result = $connect->prepare("INSERT into join_member values(
									:name, 
									:nickname, 
									:sex,
									:securityNumber, 
									:phone, 
									:cellphone, 
									:address, 
									:email, 
									:school, 
									:grade, 
									:parentsName, 
									:parentsRelation, 
									:parentsPhone, 
									:parentsAddress, 
									:tshirtsize, 
									:diet, 
									:otherDietInfo, 
									:illness, 
									:introduction, 
									:source, 
									:addition)");
$where = array(
			':name' => 'name', 
			':nickname' => 'nickname', 
			':sex' => 'sex', 
			':securityNumber' => 'securityNumber', 
			':phone' => 'phone', 
			':cellphone' => 'cellphone', 
			':address' => 'address',
			':email' => 'email', 
			':school' => 'school', 
			':grade' => 'grade', 
			':parentsName' => 'parentsName', 
			':parentsRelation' => 'parentsRelation',
			':parentsPhone' => 'parentsPhone', 
			':parentsAddress' => 'parentsAddress',
			':tshirtsize' => 'tshirtsize', 
			':diet' => 'diet', 
			':otherDietInfo' => 'otherDietInfo', 
			':illness' => 'illness', 
			':introduction' => 'introduction', 
			':source' => 'source', 
			':addition' => 'addition');
$result->execute($where);
echo 'yes';
?>

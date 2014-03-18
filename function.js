var allData = [];

function storageForm(){
	$.ajax({
		type: 'POST',
		url:'processJoin.php',
		data: {
			test: 'fucnk',
			name: allData['name'],
			nickname: allData['nickname'],
			sex: allData['sex'],
			securityNumber: allData['securityNumber'],
			phone: allData['phone'],
			cellphone: allData['cellphone'],
			address: allData['address'],
			email: allData['email'],
			school: allData['school'],
			grade: allData['grade'],
			parentsName: allData['parentsName'],
			parentsRelation: allData['parentsRelation'],
			parentsPhone: allData['parentsPhone'],
			parentsAddress: allData['parentsAddress'],
			tshirtsize: allData['tshirtsize'],
			diet: allData['diet'],
			otherDietInfo: allData['otherDietInfo'],
			illness: allData['illness'],
			introduction: allData['introduction'],
			source: allData['source'],
			addition: allData['addition']
		},
		error:function(){
			alert('資料傳輸錯誤耶！請確認您的網路是否連接正常');
		},
		success:function(msg){
			var result = "<div id='center'><h3>恭喜你報名成功了!</h3></div>";
			$('.joinForm').html(result);
		}
	});
}

function checkForm(id, idName){
	var result = true;
	for (var i = 0; i < id.length; i++){
		$('#' + id[i] + 'Form').removeClass('has-error');
		if ($('#' + id[i]).val() == ''){
			$('#' + id[i] + 'Form').addClass('has-error');
			$('#' + id[i]).attr('placeholder', '別忘了輸入你的' + idName[i] + '啊！');
			result = false;
		}
	}	
	return result;
}

function storageData(id){
	for (var i = 0; i < id.length; i++){
		allData[id[i]] = $('#' + id[i]).val();
	}
}

function showFormZero() {
	$('#joinForm').load('form/formZero.html');
}

function loadPreviousData(id) {
	for (var i = 0; i < id.length; i++){
		$('#' + id[i]).val(allData[id[i]]);
	}
}

function showFormOne(){
	var id = ['name', 'nickname', 'securityNumber', 'phone', 'cellphone', 'address', 'email', 'school', 'grade'];
	var idName = ['大名', '綽號', '身分證字號', '電話', '手機', '地址', 'email', '學校', '年級'];
	if(checkForm(id, idName)){
		// Storage data
		storageData(id);
		allData['sex'] = $('input[name=sex]:checked', '#joinForm').val();	
		$('#joinForm').load('form/formOne.html');
	}
}

function showFormTwo(){
	var id = ['parentsName', 'parentsRelation', 'parentsPhone', 'parentsAddress'];
	var idName = ['聯絡人姓名', '緊急聯絡人的關係', '緊急聯絡人的電話', '緊急聯絡人的地址'];
	if (checkForm(id, idName)){
		// Storage data
		storageData(id);
		$('#joinForm').load('form/formTwo.html')
	}
}

function showFormThree(){
	allData['tshirtsize'] = $('input[name=tshirtsize]:checked', '#joinForm').val();
	allData['diet'] =  $('input[name=diet]:checked', '#joinForm').val();
	allData['otherDietInfo'] = $('#otherDietInfo').val();
	var illnessId = ['無', '心臟病', '癲險', '氣喘', '貧血', '高血壓蠶豆症'];
	allData['illness'] = '';
	$('#illness:checked').each(function(){
		//alert(illnessId[i]);
		allData['illness'] = allData['illness'] + $(this).val()  + '、';
	});	
	if ($('#otherIllness').val() != '')
		allData['illness'] = allData['illness'] + $('#otherIllness').val();
	else
		allData['illness'] = allData['illness'].substring(0, s.length - 1);
	$('#joinForm').load('form/formThree.html');
}

function checkResult(){
	var id = ['introduction', 'source'];
	var idName = ['自我介紹', '訊息來源'];
	if (checkForm(id, idName)){
		// Storage data
		storageData(id);
		allData['addition'] = $('#addition').val();
		var allId = ['name', 'nickname', 'sex', 'securityNumber', 'phone', 'cellphone', 'address', 'email', 'school', 'grade', 'parentsName', 'parentsRelation', 'parentsPhone', 'parentsAddress', 'tshirtsize', 'diet', 'otherDietInfo', 'illness', 'introduction', 'source', 'addition'];
		var allIdName = ['姓名', '綽號', '性別', '身分證字號', '聯絡電話', '手機', '地址', 'email', '學校', '年級', '緊急聯絡人姓名', '緊急聯絡人關係', '緊急聯絡人電話', '緊急聯絡人地址', 'T-shirt大小', '飲食','特殊飲食習慣', '疾病', '自我介紹', '營隊訊息來源', '備註'];
		var result = '<h3>恭喜你填完報名表了！<br>來確認一下你的資料吧</h3><dl class="dl-horizontal">';
		for (var i = 0; i < allId.length; i++){
			if (allData[allId[i]] == 'undefined')
				allData[allId[i]] = '無';
			result = result + '<dt>' + allIdName[i] + '</dt><dd>'  + allData[allId[i]] + '</dd>';
		}
		result = result + '</dl>';
		result = result + "<div align='center'><button type='button' class='btn btn-default submit' onclick='storageForm()'>確認送出</button></div>";
		$('#joinForm').html(result);
	}
}

function checkID(id) {
  tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO";              
  A1 = new Array (1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3 );
  A2 = new Array (0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5 );
  Mx = new Array (9,8,7,6,5,4,3,2,1,1);

  if ( id.length != 10 ) return false;
  i = tab.indexOf( id.charAt(0) );
  if ( i == -1 ) return false;
  sum = A1[i] + A2[i]*9;

  for ( i=1; i<10; i++ ) {
      v = parseInt( id.charAt(i) );
      if ( isNaN(v) ) return false;
      sum = sum + v * Mx[i];
    }
  if ( sum % 10 != 0 ) return false;
  return true;
}

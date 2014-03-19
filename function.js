var allData = [];
var id = ['name', 'nickname', 'securityNumber', 'phone', 'cellphone', 'address', 'email', 'school', 'grade', 'parentsName', 'parentsRelation', 'parentsPhone', 'parentsAddress', 'introduction', 'source', 'addition'];

function storageForm(){
	$.ajax({
		type: 'POST',
		url :'processJoin.php',
		data: {
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

function validateForm(){
	var result = true;
	for (var i = 0; i < id.length; i++){
		if ($('#' + id[i]).val() == ''){
			$('#' + id[i]).attr('placeholder', '別忘記輸入啊！');
			$('#' + id[i] + 'Form').addClass('has-error');
			result = false;
		}else{
			$('#' + id[i] + 'Form').removeClass('has-error');
			$('#' + id[i] + 'Form').addClass('has-success')
		}
	}

	if ($('#email').val() != '' && !checkEmail($('#email').val())){
	  $('#emailErrorMessage').empty();
	  $('#emailForm').addClass('has-error');
	  $('<div align="right" id="emailErrorMessage"><label class="control-label">你的email好像有問題喔！</label></div>').appendTo('#emailForm');
	  result = false;
	 }else
	  $('#email').addClass('has-success');

	  if($('#securityNumber').val() != '' && !checkSecurityNumber($('#securityNumber').val())){
	  $('#securityNumberErrorMessage').empty();
	  $('#securityNumberForm').addClass('has-error');
	  $('<div align="right" id="securityNumberErrorMessage"><label class="control-label">你的身分證字號好像有問題喔！</label></div>').appendTo('#securityNumberForm');
	  result = false;
	  }else
	  $('#securityNumber').addClass('has-success');

	return result;
}

function checkEmail(email) {
	var atPos = email.indexOf('@');
	var dotPos = email.lastIndexOf('.');
	if (atPos<1 || dotPos<atPos+2 || dotPos+2>=email.length)
		return false;
	else{
		$('#emailErrorMessage').empty();
		return true;
	}
}

function checkSecurityNumber(id) {
	tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO";              
	A1 = new Array (1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3 );
	A2 = new Array (0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5 );
	Mx = new Array (9,8,7,6,5,4,3,2,1,1);

	if ( id.length != 10 ) 
		return false;
	i = tab.indexOf( id.charAt(0) );
	if ( i == -1 ) return false;
	sum = A1[i] + A2[i]*9;

	for ( i=1; i<10; i++ ) {
		v = parseInt( id.charAt(i) );
		if ( isNaN(v) ) return false;
		sum = sum + v * Mx[i];
	}
	if ( sum % 10 != 0 ) 
		return false;
	else
		return true;
}

function storageData(){
	for (var i = 0; i < id.length; i++){
		allData[id[i]] = $('#' + id[i]).val();
	}
	allData['tshirtsize'] = $('input[name=tshirtsize]:checked', '#joinForm').val();
	allData['diet'] =  $('input[name=diet]:checked', '#joinForm').val();
	allData['otherDietInfo'] = $('#otherDietInfo').val();
	allData['sex'] = $('input[name=sex]:checked', '#joinForm').val();
	var illnessId = ['無', '心臟病', '癲險', '氣喘', '貧血', '高血壓蠶豆症'];
	allData['illness'] = ''; 
	$('#illness:checked').each(function(){
		allData['illness'] = allData['illness'] + $(this).val()  + '、';
	});
	if ($('#otherIllness').val() != '') 
		allData['illness'] = allData['illness'] + $('#otherIllness').val();
	else
		allData['illness'] = allData['illness'].substring(0, s.length - 1); 
}

function showFormZero() {
	$('#joinForm').load('form/formZero.html');
}

function loadPreviousData(id) {
	for (var i = 0; i < id.length; i++){
		$('#' + id[i]).val(allData[id[i]]);
	}
}

function checkResult(){
	// Storage data
	storageData();
	if(validateForm()){
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
		$('.joinForm').html(result);
	}
}

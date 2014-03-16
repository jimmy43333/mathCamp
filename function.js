var allData = [];

function storageForm(){
	if(checkFormOne()){
		var id = ['name', 'nickname', 'securityNumber', 'phone', 'cellphone', 'address', 'email', 'school', 'grade'];
		for (var i = 0; i < id.length; i++){
			allData[id[i]] = $('#' + id[i]).val();
		}
		allData['sex'] = $('input[name=sex]:checked', '#joinForm').val();
		$.ajax({
			type: 'POST',
			url:'processJoin.php?id=0',
			data: {
				name: $('#name').val(),
				nickname: $('#nickname').val(),
				sex: $('input[name=sex]:checked', '#joinForm').val(),
				securityNumber: $('#securityNumber').val(),
				phone: $('#phone').val(),
				cellphone: $('#cellhone').val(),
				address: $('#address').val(),
				email: $('#email').val(),
				school: $('#school').val(),
				grade: $('#grade').val()
			},
			error:function(){
				alert('資料傳輸錯誤耶！請確認您的網路是否連接正常');
			},
			success:function(){
				showFormOne();
			}
		});
	}
}

function showFormZero(){
	$('#joinForm').load('form/formZero.html');
	// Show previous value user type.
	var id = ['name', 'nickname', 'securityNumber', 'phone', 'cellphone', 'address', 'email', 'school', 'grade'];
	for (var i = 0; i < id.length; i++){
		$('#' + id[i]).attr('value', allData[id[i]]);
	}
	$('#' + allData['sex']).attr('checked', true);
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

function showFormOne(){
	var id = ['name', 'nickname', 'securityNumber', 'phone', 'cellphone', 'address', 'email', 'school', 'grade'];
	var idName = ['大名', '綽號', '身分證字號', '電話', '手機', '地址', 'email', '學校', '年級'];
	if(checkForm(id, idName)){
		// Storage data
		var id = ['name', 'nickname', 'securityNumber', 'phone', 'cellphone', 'address', 'email', 'school', 'grade'];
		for (var i = 0; i < id.length; i++){
			allData[id[i]] = $('#' + id[i]).val();
		}
		allData['sex'] = $('input[name=sex]:checked', '#joinForm').val();
		
		$('#joinForm').load('form/formOne.html');
	}
}

function showFormTwo(){
	var id = ['parentsName', 'parentsRelation', 'parentsPhone', 'parentsAddress'];
	var idName = ['聯絡人姓名', '緊急聯絡人的關係', '緊急聯絡人的電話', '緊急聯絡人的地址'];
	if (checkForm(id, idName)){
		$('#joinForm').load('form/formTwo.html')
	}
}

function showFormThree(){
	$('#joinForm').load('form/formThree.html');
}

function checkResult(){
	$('.joinForm').html("<p>恭喜你報名成功</p>");
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

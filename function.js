function storageFormOne(){
	var nickname=$('#nickname').val();
	var securityNumber=$('#securityNumber').val();
	var phone=$('#phone').val();
	var cellphone=$('#cellhone').val();
	var address=$('#address').val();
	var email=$('#email').val();
	var school=$('#school').val();
	var grade=$('#grade').val();
	$.ajax({
		type: 'POST',
		url:'processJoin.php',
		data: {
			name: $('#name').val()
		},
		error:function(){
			alert('資料傳輸錯誤耶！請確認您的網路是否連接正常');
		},
		success:function(){
			showFormOne();
		}
	});
}

function showFormZero(){
	$('#joinForm').html(
	"<div class='animated fadeIn'>\
		<p align='center'>放輕鬆，報名松數營很簡單！</p>\
			<div class='form-group'>\
				<label for='name' class='col-sm-4 control-label'>姓名</label>\
				<div class='col-sm-8'>\
					<input type='text' class='form-control required' id='name' name='name'  placeholder='姓名'>\
				</div>\
			</div>\
			<div class='form-group'>\
				<label for='nickname' class='col-sm-4 control-label'>綽號</label>\
				<div class='col-sm-8'>\
					<input type='text' class='form-control required' id='nickname' placeholder='綽號'>\
				</div>\
			</div>\
			<div class='form-group'>\
				<label for='sex' class='col-sm-4 control-label'>姓別</label>\
				<div class='col-sm-8'>\
					<div class='radio-inline'>\
						<label>\
							<input type='radio' name='optionsRadios' id='optionsRadios1' value='option1' checked>\
							男\
						</label>\
					</div>\
					<div class='radio-inline'>\
						<label>\
							<input type='radio' name='optionsRadios' id='optionsRadios2' value='option2'>\
							女\
						</label>\
					</div>\
				</div>\
			</div>\
			<div class='form-group'>\
				<label for='securityNumber' class='col-sm-4 control-label'>身分證字號</label>	\
				<div class='col-sm-8'>\
					<input type='text' class='form-control required' id='securityNumber' placeholder='身分證字號'>\
				</div>\
			</div>\
			<div class='form-group'>\
				<label for='phone' class='col-sm-4 control-label'>聯絡電話</label>\
				<div class='col-sm-8'>\
					<input type='text' class='form-control required digits' id='phone' placeholder='聯絡電話'>\
				</div>\
			</div>\
			<div class='form-group'>\
				<label for='cellphone' class='col-sm-4 control-label'>手機</label>\
				<div class='col-sm-8'>\
					<input type='text' class='form-control required digits' id='cellphone' placeholder='手機'>\
				</div>\
			</div>\
			<div class='form-group'>\
				<label for='address' class='col-sm-4 control-label'>聯絡地址</label>	\
				<div class='col-sm-8'>\
					<input type='text' class='form-control required' id='address' placeholder='聯絡地址'>\
				</div>\
			</div>\
			<div class='form-group'>\
				<label for='email' class='col-sm-4 control-label'>Email</label>	\
				<div class='col-sm-8'>\
					<input type='text' class='form-control required email' id='email' placeholder='Email'>\
				</div>\
			</div>\
			<div class='form-group'>\
				<label for='school' class='col-sm-4 control-label'>就讀學校</label>\
				<div class='col-sm-8'>\
					<input type='text' class='form-control' id='school' placeholder='就讀學校'>\
				</div>\
			</div>\
			<div class='form-group'>\
				<label for='grade' class='col-sm-4 control-label'>年級</label>\
				<div class='col-sm-8'>\
					<input type='text' class='form-control' id='grade' placeholder='年級'>\
				</div>\
			</div>\
			<div align='right'><button type='button' class='btn btn-default submit' onclick='storageDataOne()'>下一步</button></div>\
		</div>\
	");
}

function showFormOne(){
	$('#joinForm').html(
			"<div class='animated fadeIn'>\
			<p align='center' class='lead'>這很重要，關於你的緊急聯絡人</p>\
			<div class='form-group'>\
			<label for='parentsName' class='col-sm-4 control-label'>姓名</label>\
			<div class='col-sm-8'>\
			<input type='text' class='form-control' id='prarentsName' placeholder='姓名'>\
			</div>\
			</div>\
			<div class='form-group'>\
			<label for='parentsRelation' class='col-sm-4 control-label'>關係</label>\
			<div class='col-sm-8'>\
			<input type='text' class='form-control' id='prarentsRelation' placeholder='關係'>\
			</div>\
			</div>\
			<div class='form-group'>\
			<label for='parentsPhone' class='col-sm-4 control-label'>電話</label>\
			<div class='col-sm-8'>\
			<input type='text' class='form-control' id='prarentsPhone' placeholder='電話'>\
			</div>\
			</div>\
			<div class='form-group'>\
			<label for='parentsAddress' class='col-sm-4 control-label'>地址</label>\
			<div class='col-sm-8'>\
			<input type='text' class='form-control' id='prarentsAddress' placeholder='地址'>\
			</div>\
			</div>\
			<div align='right'><button type='button' class='btn btn-default submit' onclick='changeFormZero()'>上一步</button>\
			<button type='button' class='btn btn-default submit' onclick='changeFormTwo()'>下一步</button></div>\
			<div>\
			");
}

function changeFormTwo(){
	$('#joinForm').html(
	"<div class='animated fadeIn'>\
		<p align='center'>接著是一些關於活動時需要的訊息</p>\
		<div class='form-group'>\
			<label for='sex' class='col-sm-4 control-label'>活動T-shirt size</label>\
			<div class='col-sm-8'>\
				<div class='radio-inline'>\
					<label>\
						<input type='radio' name='tshirtsize' id='TwoXL' value='size1' checked>\
						2XL\
					</label>\
				</div>\
				<div class='radio-inline'>\
					<label>\
						<input type='radio' name='tshirtsize' id='XL' value='size2'>\
						XL\
					</label>\
				</div>\
				<div class='radio-inline'>\
					<label>\
						<input type='radio' name='tshirtsize' id='L' value='size3'>\
						L\
					</label>\
				</div>\
				<div class='radio-inline'>\
					<label>\
						<input type='radio' name='tshirtsize' id='M' value='size4'>\
						M\
					</label>\
				</div>\
				<div class='radio-inline'>\
					<label>\
						<input type='radio' name='tshirtsize' id='S' value='size5'>\
						S\
					</label>\
				</div>\
			</div>\
		</div>\
		<div class='form-group'>\
			<label for='diet' class='col-sm-4 control-label'>特殊飲食習慣</label>\
			<div class='col-sm-8'>\
				<div class='radio-inline'>\
					<label>\
						<input type='radio' name='diet' id='TwoXL' value='diet1' checked>\
						葷\
					</label>\
				</div>\
				<div class='radio-inline'>\
					<label>\
						<input type='radio' name='diet' id='XL' value='diet2'>\
						素\
					</label>\
				</div>\
				<input type='other' class='form-control' id='other' placeholder='其他'>\
			</div>\
		</div>\
		<div class='form-group'>\
			<label for='diet' class='col-sm-4 control-label'>特殊病例</label>\
			<div class='col-sm-8'>\
				<div class='checkbox-inline'>\
					<label>\
						<input type='checkbox' id='illness2' value='illness2'>\
						無\
					</label>\
				</div>\
				<div class='checkbox-inline'>\
					<label>\
						<input type='checkbox' id='illness1' value='illness1'>\
						心臟病\
					</label>\
				</div>\
				<div class='checkbox-inline'>\
					<label>\
						<input type='checkbox' id='illness2' value='illness2'>\
						癲險\
					</label>\
				</div>\
				<div class='checkbox-inline'>\
					<label>\
						<input type='checkbox' id='illness2' value='illness2'>\
						氣喘\
					</label>\
				</div>\
				<div class='checkbox-inline'>\
					<label>\
						<input type='checkbox' id='illness2' value='illness2'>\
						貧血\
					</label>\
				</div>\
				<div class='checkbox-inline'>\
					<label>\
						<input type='checkbox' id='illness2' value='illness2'>\
						高血壓蠶豆症\
					</label>\
				</div>\
				<input type='other' class='form-control' id='other2' placeholder='其他'>\
			</div>\
		</div>\
		<div align='right'><div align='right'><button type='button' class='btn btn-default submit' onclick='changeFormOne()'>上一步</button>\
		<button type='button' class='btn btn-default submit' onclick='changeFormThree()'>下一步</button></div>\
	</div>\
	");
}

function changeFormThree(){
	$('#joinForm').html(
	"<div class='animated fadeIn'>\
		<p align='center'>最後最後，來個自我介紹吧！</p>\
		<div class='form-group'>\
			<label for='introduction' class='col-sm-4 control-label'>自我介紹</label>\
			<div class='col-sm-8'>\
				<textarea class='form-control' rows='4' name='introduction'></textarea>\
			</div>\
		</div>\
		<div class='form-group'>\
			<label for='introduction' class='col-sm-4 control-label'>你是怎麼知道我們的</label>\
			<div class='col-sm-8'>\
				<textarea class='form-control' rows='2'></textarea>\
			</div>\
		</div>\
		<div class='form-group'>\
			<label for='introduction' class='col-sm-4 control-label'>備註</label>\
			<div class='col-sm-8'>\
				<textarea class='form-control' rows='2'></textarea>\
			</div>\
		</div>\
		<div align='right'>\
			<button type='button' class='btn btn-default submit' onclick='checkResult()'>完成</button>\
		</div>\
		<!-- \
		<div class='alert alert-danger'>不過......這個網站還沒完成，現在還不能報名噢！</div>\
		-->\
		</div>\
	");
}

function checkResult(){
	$('.joinForm').html("<p>恭喜你報名成功</p>");
}

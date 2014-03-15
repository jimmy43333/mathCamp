function changeFormOne(){
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
			<div align='right'><button type='button' class='btn btn-default submit' onclick='changeFormTwo()'>下一步</button></div>\
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
	");
}

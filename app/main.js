$(document).ready(function  () {
	console.log('loaded javascript file...');

var details = [ {name:"natraj", phone:8449009099, email:"natraj@gmail.com",age:23, gender:"male"},
			  {name:"hema", phone:8464898913 ,email:"hema@gmail.com",age:22 ,gender:"female" },
			  {name:"sai", phone: 9959047673,email:"sai@gmail.com",age:24 ,gender:"male" },
			  {name:"pavi", phone:873929098 ,email:"pavi@gmail.com",age:23 ,gender:"female" },
			  {name:"kumar", phone:884216807 ,email:"kumar@gmail.com",age:24 ,gender:"male" }
			];

//var details;
$("#b1").click(function()
{
	$("#student_form").show();
});
$("#add_btn").click(function(){
	$("#error_msg").text("");
	
	var usr_val = $('#usr').val();
	var phn_val = $('#phn').val();
	var mail_val = $('#mail').val();
	var age_val = $('#age').val();
	var gender_val = $('#gender').val();

	if(usr_val!=null && phn_val!=null && mail_val!=null && age_val!=null && gender_val!=null && usr_val!= '' && phn_val!= '' && mail_val!= '' && age_val!= '' && gender_val!= '') {
		var gender_text;
		if(gender_val == "male" ) {
			gender_text = '<i class="fa fa-male fa-2x" style="color:red" aria-hidden="true"></i>';
		} else {
			gender_text = '<i class="fa fa-female fa-2x"  style="color:grey" aria-hidden="true"></i>';
	
		}
		$("#friends_body").append('<tr><td>' + usr_val + '</td><td>'+phn_val+'</td><td>'+mail_val+'</td><td>'+age_val+'</td><td>'+gender_text+'</td><td><i class="fa fa-pencil"></i>&nbsp;&nbsp;<i class="fa fa-trash"></td></tr>');
		$('#student_form input').val('');
		$("#student_form").hide();		

	} else {
		$("#error_msg").text("All fields are Required");
	}	

});

$(".delete_std").on('click', function(){
console.log("delete item");

});


	for(var i=0; i < details.length; i++)
	{
		var gender_text;
		if(details[i].gender == "male" ) {
			gender_text = '<i class="fa fa-male fa-2x" style="color:red" aria-hidden="true"></i>';
		} else {
			gender_text = '<i class="fa fa-female fa-2x"  style="color:grey" aria-hidden="true"></i>';
	
		}
		$("#friends_body").append('<tr><td>' + details[i].name
		 + '</td><td>'+details[i].phone+'</td><td>'+details[i].email
		 +'</td><td>'+details[i].age+'</td><td>'+gender_text+'</td><td><i class="fa fa-pencil"></i>&nbsp;&nbsp;<i onclick="deleteStd()" class="fa fa-trash delete_std"></td></tr>');
	}
});


$(document).ready(function(){
	//重置按钮
	$(".replaceBtn").click(clearInput);
	function clearInput(){
		$("#input_1").val("");
		$("#input_2").val("");
		$("#input_3").val("");
		$("#input_4").val("");
	}
	//提交按钮
	$(".submitBtn").click(function(){
		var messages = new Array($("#input_1").val(),$("#input_2").val(),$("#input_3").val(),$("#input_4").val())	
		if(checkInput(messages)){
			//TODO: 表单提交数据
			//名称、手机、邮箱、留言分别为messages[0]~messages[4]
			//成功后使用window.location.reload() 重载页面，或调用clearInput() 函数清除输入框
			$("#form").submit();
			clearInput();
		}
	})
	function ifNull(value){
		if (value != "") return true;
		else return false;
	}
	//验证输入信息：所有非空、手机号邮箱正确
	function checkInput(msg){
		if(!msg.every(ifNull)){
			alert("请输入完整信息");
			return false;
		}
		else{
			var pattern = /^1[34578]\d{9}$/;  
			if(!pattern.test(msg[1])) {
				alert("请输入正确的手机号码");
				return false;
			}
			pattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/;
			if(!pattern.test(msg[2])){
				alert("请输入正确的邮箱");
				return false;
			}
			return true;
		}
	}
});

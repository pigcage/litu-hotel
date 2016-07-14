//js
$(document).ready(function(){
	$(function () {
		//当前日期
		var currYear = (new Date()).getFullYear(); 
		var currMonth = (new Date()).getMonth();
		var currDate = (new Date()).getDate(); 
		//日期选择初始化
		var opt={};
		opt.date = {
			preset : 'date',
			minDate: new Date(currYear,currMonth,currDate),
            maxDate: new Date(currYear+1, currMonth, currDate),
			onSelect: function(valueText){appendOut(valueText);}
		};
		opt.datetime = {preset : 'datetime'};
		opt.time = {preset : 'time'};
		opt.default = {
			theme: 'android-ics light', //皮肤样式
			display: 'modal', //显示方式
			mode: 'scroller', //日期选择模式
			dateFormat: 'yyyy-mm-dd',
			lang: 'zh',
			showNow: true,
			nowText: "今天",
		};
		$("#scroller_in").mobiscroll($.extend(opt['date'], opt['default']));
		$("#scroller_out").mobiscroll($.extend(opt['date'], opt['default']));
		function appendOut(vt){	
			vt = vt.split("-");
			var opt_2={};
			opt_2.date = {
				preset : 'date',
				minDate: new Date(parseInt(vt[0]),parseInt(vt[1])-1,parseInt(vt[2])+1),
				maxDate: new Date(parseInt(vt[0]), parseInt(vt[1])+3, parseInt(vt[2])+1),
			};
			opt_2.datetime = {preset : 'datetime'};
			opt_2.time = {preset : 'time'};
			opt_2.default = {
				theme: 'android-ics light',
				display: 'modal',
				mode: 'scroller',
				dateFormat: 'yyyy-mm-dd',
				lang: 'zh',
				showNow: true,
				nowText: "今天",
			};
			$("#scroller_out").mobiscroll($.extend(opt_2['date'], opt_2['default']));
			$("#leaveTime").show();
			$("#scroller_out").show();
		}
	});
	//计算入住天数，判断正确性
	function DateDiff(sDate1,sDate2){
		if(sDate1=="" || sDate2==""){
			alert("请输入入住时间");
			return false;
		}
		var aDate,oDate1,oDate2,iDays;
		aDate = sDate1.split("-");
		oDate1 =  new  Date(aDate[1]+'-'+aDate[2]+'-'+aDate[0]);
		aDate = sDate2.split("-");
		oDate2 = new Date(aDate[1]+'-'+aDate[2]+'-'+aDate[0]);
		if((oDate1-oDate2)<1) {
			alert("请输入正确的入住时间");
			return false;
		}
		iDays = parseInt(Math.abs(oDate1-oDate2)/1000/60/60/24);
		$("#days").val(iDays);
		return;
	}
	$("select").css("width",$("input[name=roomAccount]").outerWidth()+"px");
	//检查输入
	function checkInput(){
		var roomAccount = $("input[name='roomAccount']");
		var adult = $("input[name='adult']");
		var children = $("input[name='children']");
		var phoneNumber = $("input[name='phoneNumber']");
		if(roomAccount.val()=="" || roomAccount.val()%1 != 0 || roomAccount.val()<=0) {
			roomAccount.val("");
			alert("请输入正确的房间数量");
			return false;
		}
		if((adult.val()=="" || adult.val()%1 != 0 || adult.val()<=0)||(children.val()=="" || children.val()%1 != 0 || children.val()<=0))
		{
			adult.val("");
			children.val("");
			alert("请输入正确的成人和儿童数量");
			return false;
		}
		var pattern = /^1[34578]\d{9}$/;  
		if(!pattern.test(phoneNumber.val())) {
			phoneNumber.val("");
			alert("请输入正确的手机号码");
			return false;
		}
		return true;
	}
	//检验并提交表单
	$(".submitBtn").click(function(){
		var flag = DateDiff($("#scroller_out").val(),$("#scroller_in").val());
		if(flag!=false){
			var correctInput = checkInput();
			if(correctInput == true)
			{
				//表单在此处提交
				$("#form").submit();
			}
		}
	})
});
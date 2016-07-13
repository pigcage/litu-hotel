//js
$(document).ready(function(){
	//页面头部事件
	$("#login").click(function(){
		alert("会员系统筹备中...")
	})
	//----------样式js----------//
	var navLi = $(".nav li");
	var introOuter = $(".introOuter");
	navLi.click(function(){
		introOuter.stop();
		introOuter.animate({marginLeft:parseInt($(this).attr("id"))*(-100)+"%"},500);
		navLi.css("color","#fff");
		navLi.css("backgroundColor","rgba(0,0,0,0)");
		$(this).css("color","#e1c684")
		$(this).css("backgroundColor","#262120");
	})
	var scrollGradient = $("#scrollGradient");
	var container = $(".container")
	container.scroll(function(){
		scrollGradient.css("top",container.height()+container.scrollTop()-scrollGradient.height()+"px");
	})
	//----------END----------//
	//跳转到第四页
	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}
	var sName = getUrlParam("page");
	jumpPage4();
	function jumpPage4(){
		if(parseInt(sName) != 4) {return;}
		else{
			navLi.css("color","#fff");
			navLi.css("backgroundColor","rgba(0,0,0,0)");
			$("#3").css("color","#e1c684")
			$("#3").css("backgroundColor","#262120");
			introOuter.css("marginLeft","-300%");
		}
	}
})
//以下为跳页逻辑
var pageAccount = $("#introList_4 ul li").length;
function next(){
	var page = parseInt($(".current").html());
	console.log(page)
	if (page == pageAccount) return;
	page++;
	checkCurrentPage(page);
	$("#introList_4 .page").hide();
	$(".digg #pageBtn_"+page).addClass("current");
	$("#introList_4 #"+page).show();
	page--;
	$(".digg #pageBtn_"+page).removeClass("current");
};
function pre(){
	var page = parseInt($(".current").html());
	page--;
	checkCurrentPage(page);
	if (page <= 0) return;
	$("#introList_4 .page").hide();
	$(".digg #pageBtn_"+page).addClass("current");
	$("#introList_4 #"+page).show();
	page++;
	$(".digg #pageBtn_"+page).removeClass("current");
};
function jumpTo(pageNum){
	checkCurrentPage(pageNum);
	$("#introList_4 .page").hide();
	$(".digg .current").removeClass("current");
	$(".digg #pageBtn_"+pageNum).addClass("current");
	$("#introList_4 #"+pageNum).show();

};
function checkCurrentPage(pageNum){
	if(pageNum <= 1) {
		$("#pageBtn_pre").addClass("disabled");
		$("#pageBtn_next").removeClass("disabled");
		return;
	}
	if(pageNum >= pageAccount) {
		$("#pageBtn_next").addClass("disabled");
		$("#pageBtn_pre").removeClass("disabled");
		return;
	}
	else{
		$("#pageBtn_pre").removeClass("disabled");
		$("#pageBtn_next").removeClass("disabled");
	}
}

//左侧列表
var title = $(".containerViceTitle ul li");
var content = $(".containerContent ul li");
title.click(function(){
	for(var i=0;i<4;i++){
		$(title[i]).children("img").hide();
	}
	$(this).children("img").show();
	var index = $(this).val();
	for(i=0;i<4;i++){
		$(content[i]).hide();
	}
	$(content[index]).show();
	switch(index){
		case 0:
			$("#position").html("你当前的位置：酒店介绍 > 酒店简介");
			break;
		case 1:
			$("#position").html("你当前的位置：酒店介绍 > 功能介绍");
			break;
		case 2:
			$("#position").html("你当前的位置：酒店介绍 > 特色介绍");
			break;
		case 3:
			$("#position").html("你当前的位置：酒店介绍 > 酒店动态与活动");
			break;
		default:
			break;
	}
})
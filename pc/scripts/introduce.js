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
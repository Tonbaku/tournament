function toggleCreate(){
	var subMenu = $(".subMenu");
	subMenu.addClass("col-xs-3")
	subMenu.toggle("slide", {"direction" : "left"});
	$(".previewArea").switchClass("col-xs-13", "col-xs-10");
	
	
	
}

function triggerDetailAjaxUpdate(){
	var detailForm = $("#detailForm");
	var select = $("#selectType");
	detailForm.append("<input name=\"toRender\" value=\"" + select.val() + "\"/>");
	detailForm.find("input[type=submit]").click();
}
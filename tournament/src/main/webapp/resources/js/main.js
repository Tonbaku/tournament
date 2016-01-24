function toggleCreate(){
	var subMenu = $(".subMenu");
	subMenu.addClass("col-xs-3")
	subMenu.toggle();
	$(".previewArea").switchClass("col-xs-13", "col-xs-10");
	
}
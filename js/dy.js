;(function($){

		var top=$("#uls").offset().top-$("#head").height();
		console.log(top)
		$("#cen").fixed({
			toph:top,
			tag:"#cen"	
		})

})(Zepto)
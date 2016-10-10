;(function($){
	var winw=$(window).width();
	$("html").css("font-size",winw/3.6+"px");
	
	$.fn.fixed=function(opt){
		var old={
			toph:top,
			tag:"#cen"		
		}

		var ele=$.extend({},old,opt);

		var cen=new IScroll(ele.tag,{
				"probeType":3
			});

		return $(this).each(function(){
			cen.on("scroll",function(){
				var scy=Math.abs(this.y);

				if(scy>ele.toph){
					
					$("#uls").css({
						"position":"relative",
						"left":0,
						"top":(scy-ele.toph)+"px"
					})
				}else{
					$("#uls").css({
						"position":"initial"
					})
				}

			})

		})
		
	}



})(Zepto);
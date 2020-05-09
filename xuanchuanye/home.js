$(document).ready(function(){
	//导航栏标签下拉
	$(".dropdown").on({
		mouseover:function(){
			$(this).addClass("open")
		},
		mouseout:function(){
			$(this).removeClass("open")
		}
	})
	//导航栏自动隐藏
	var t1=0,t2=0;
	$(window).on('scroll',function(){
		if($(window).scrollTop() > 350){
			if (t1<0 || t2<0) {
				$('.navbar').addClass('navhidden');
			}
			else{
				$('.navbar').removeClass('navhidden');
			}
		}
		else {
			$('.navbar').removeClass('navhidden');
		}
	})
	var scrollFunc=function(e){
	    e=e || window.event;
	    if(e.wheelDelta){//IE/Opera/Chrome
	        t1=e.wheelDelta;
	    }else if(e.detail){//Firefox
	        t2=e.detail;
	    }
	}
	/*注册事件*/
	if(document.addEventListener){
	    document.addEventListener('DOMMouseScroll',scrollFunc,false);
	}//W3C
	window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
	
})

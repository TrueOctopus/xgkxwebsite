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
	if(document.addEventListener){/*注册事件*/
	    document.addEventListener('DOMMouseScroll',scrollFunc,false);
	}//W3C
	window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
	
	//文字滚动
	var n=4,nn=4;
	function spanhidden(id,s) {
		$(id).animate({top:"52px",opacity:"0"},s*1000,function(){
			$(this).removeClass("show").css({
				'opacity':1,
				'top':0
			})
		})
	}
	function changespan() {
		n>7?n=4:n=n;
		n+1>7?nn=4:nn=n;
		spanhidden("span:eq("+n+")",0.5);
		if($(window).width()<=991){
			setTimeout(function(){$("span:eq("+nn+")").addClass("show")},500);
		}
		else{
			setTimeout(function(){$("span:eq("+nn+")").addClass("show")},510);
		}
		n++;
		nn++;
	}
	setInterval(changespan,4000)//这里调整切换时隔


	//轮播图高度统一
	$(".carousel-inner>.item:eq(0)").height()<$(".carousel-inner>.item:eq(1)").height() ? $(".carousel-inner>.item:eq(0)").height($(".carousel-inner>.item:eq(1)").height()) : $(".carousel-inner>.item:eq(1)").height($(".carousel-inner>.item:eq(0)").height());
})

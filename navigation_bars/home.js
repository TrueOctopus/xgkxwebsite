$(document).ready(function(){

	//导航栏标签下拉
	$(".dropdown").hover(function(){
		$(this).addClass("open")
		var dropdownli=$('.dropdown>.dropdown-menu>li>').length,n=0;
		function lirightin(){
			$('.dropdown>.dropdown-menu>li:eq('+n+')').css('display','block')
			n++;
			if (n==dropdownli) {
				n=0;
				clearInterval(rightin);
			}
		}
		rightin=setInterval(lirightin,80);
	},
	function(){
		$(this).removeClass("open")
		$('.dropdown>.dropdown-menu>li').css('display','none')
	})

	//导航栏自动隐藏及变色
	var t1=0,t2=0,t3;
	$(window).width()>991?t3=200:t3=50;
	$(window).on('scroll',function(){
		if($(window).scrollTop() > t3){
			if (t1<0 || t2<0) {
				$('.navbar').addClass('navhidden').removeClass('ontop')
				$('.scrolltop').addClass('in')
			}
			else{
				$('.navbar').removeClass('navhidden').removeClass('ontop')
				$('.navbar-header>a>img:eq(1)').fadeOut(200)//左端图片
				$('.scrolltop').addClass('in')
			}
		}
		else {
			$('.navbar').removeClass('navhidden').addClass('ontop')
			$('.scrolltop').removeClass('in')
			if(t3==200){
				$('.navbar-header>a>img:eq(1)').fadeIn(200)
			}//仅限宽屏
			else{
				
			}//仅限窄屏
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

	//上滚到顶部事件
	$('.scrolltop').click(function(){$('html,body').animate({scrollTop:0},300)})

})
$(document).ready(function(){

	//导航栏标签下拉
	$(".dropdown").hover(function(){$(this).addClass("open")},function(){$(this).removeClass("open")})

	//导航栏自动隐藏及变色
	var t1=0,t2=0,t3;
	$(window).width()>991?t3=200:t3=50;
	$(window).on('scroll',function(){
		if($(window).scrollTop() > t3){
			if (t1<0 || t2<0) {
				$('.navbar').addClass('navhidden').removeClass('ontop');
			}
			else{
				$('.navbar').removeClass('navhidden').removeClass('ontop')//背景
				$('.navbar-toggle.pull-left>span').css('background','#0a8aff')//菜单按钮
				$('.navbar-header>a>img:eq(1)').fadeOut(200)//左端图片
				$('.navbar-right>button').addClass('bgshow')//按钮
			}
		}
		else {
			$('.navbar').removeClass('navhidden').addClass('ontop')//背景
			$('.navbar-toggle.pull-left>span').css('background','#FFF')//菜单按钮
			$('.navbar-right>button').removeClass('bgshow')//按钮
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
		n>2?n=-1:n=n;
		n+1>2?nn=-1:nn=n;
		spanhidden(".p1_text1>span:eq("+n+")",0.5);
		if($(window).width()<=991){
			setTimeout(function(){$(".p1_text1>span:eq("+nn+")").addClass("show")},500);
		}
		else{
			setTimeout(function(){$(".p1_text1>span:eq("+nn+")").addClass("show")},510);
		}
		n++;
		nn++;
	}
	setInterval(changespan,4000)//这里调整切换时隔


	//轮播图高度统一
	$(".carousel-inner>.item:eq(0)").height()<$(".carousel-inner>.item:eq(1)").height() ? $(".carousel-inner>.item:eq(0)").height($(".carousel-inner>.item:eq(1)").height()) : $(".carousel-inner>.item:eq(1)").height($(".carousel-inner>.item:eq(0)").height());
})

$(document).ready(function(){

	//导航栏标签下拉
	var dropdownli=$('.dropdown>.dropdown-menu>li').length;
	$(".nav>.dropdown>.dropdown-menu").css('height',dropdownli*36+10)
	$(".dropdown").hover(function(){
		$(this).addClass("open")
		var n=0;
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
		clearInterval(rightin);
	})

	//导航栏顶部蓝条
	var blue_bar=$(".navbar-inverse .navbar-nav.navbar-left>span");
	var act=$(".navbar-inverse .navbar-nav.navbar-left>.active");
	var wid_act=$(".navbar-inverse .navbar-nav.navbar-left>.active").width();
	var left_act=$(".navbar-inverse .navbar-nav.navbar-left>.active").offset().left;
	blue_bar.css({
		width:act.width(),
		left:0+act.offset().left
	})
	$(".navbar-inverse .navbar-nav.navbar-left>li").hover(function(){
		blue_bar.css({
			width:$(this).width(),
			left:$(this).offset().left,
		})
	},function(){
		blue_bar.css({
			width:wid_act,
			left:left_act,
		})
	})

	//导航栏自动隐藏及变色
	var t1=0,t2=0,t3;
	var win_wid=$(window).width();
	win_wid>991?t3=500:t3=50;
	$(window).on('scroll',function(){
		if($(window).scrollTop() > t3){
			if (t1<0 || t2<0) {
				$('.navbar').addClass('navhidden')
				$('.scrolltop').addClass('in')
			}
			else{
				$('.navbar').removeClass('navhidden').removeClass('ontop')
				$('.navbar-header>a>img:eq(1)').fadeOut(200)//左端图片
				$('.scrolltop').addClass('in')//回到顶部
			}
		}
		else {
			$('.navbar').removeClass('navhidden').addClass('ontop')
			$('.scrolltop').removeClass('in')
			if(win_wid>991){
				$('.navbar-header>a>img:eq(1)').fadeIn(200)
			}
		}
	})

	//滚轮动作获取
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

	//窗口改变
	$(window).resize(function(){
		win_wid=$(window).width();
		if(win_wid>973){
			t3=500;
		}
		else{
			t3=50;
			$('.navbar-header>a>img:eq(1)').css('display','none')
		}
	})
})
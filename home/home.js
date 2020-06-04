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
	})

	//导航栏自动隐藏及变色
	var t1=0,t2=0,t3;
	$(window).width()>991?t3=500:t3=50;
	$(window).on('scroll',function(){
		if($(window).scrollTop() > t3){
			if (t1<0 || t2<0) {
				$('.navbar').addClass('navhidden')
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
			if(t3==500){
				$('.navbar-header>a>img:eq(1)').fadeIn(200)
			}//仅限宽屏
			else{
				
			}//仅限窄屏
		}
		//part1底部隐藏
		if(t3==500){
			if($(window).scrollTop() > 1000){
				$(".part1").css('opacity','0')
			}
			else{
				$(".part1").css('opacity','1')
			}
		}
		/*p1top=$('.part1>div>.row').offset().top-$(window).scrollTop();
		$('.part1>div>.row').css('bottom',p1top/2-70)*/
	})

	//part1高度填充
	if(t3==500)
		$(".part2").css('margin-top',$(".part1").height()+$(".part1>div>div").height()-110)
	$(window).resize(function(){
		if(t3==500)
			$(".part2").css('margin-top',$(".part1").height()+$(".part1>div>div").height()-110)
	})
	

	
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

	//上滚到顶部事件
	$('.scrolltop').click(function(){$('html,body').animate({scrollTop:0},300)})

	
	//滚动出现动画
	scrollappear('.p2_2>div:eq(0)','rightin_s');
	scrollappear('.p2_2>div:eq(1)','leftin_s');
	scrollappear('.p2_r','leftin_s');
	scrollappear('.p2_2_text2,.p2_bt2','topin_s');
	scrollappear('.p2_4>.row>div','leftin_s');
	scrollappear('footer,.part3>.more:eq(0)','bottomin_s');
	function scrollappear(id,effectclass){
		$(id).css('opacity','0')
		$(window).on('scroll',function(){
			worktop=$(id).offset().top - $(window).scrollTop();
			if(worktop<$(window).height()-150){
				$(id).addClass(effectclass)
			}
		})
	}

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

	//鼠标移动事件
	/*$("body").on("mousemove",function(e){
		pX=e.pageX-$(this).offset().left;  
     	pY=e.pageY-$(this).offset().top;
		$(".part1>div>div>div>img").css({
			'left':-(pX-800)/8,
			'top':-(pY-500)/8,
		})
		$(".p1_l").css({
			'left':-(pX-1000)/3,
			'top':-(pY-500)/3,
		})
	})*/
	var egg=0;
	$(document).keydown(function(event){
		if(event.keyCode==38)
			egg=1;
		if(egg==1&&event.keyCode==38)
			egg=2;
		// if(egg==1&&event.keyCode!=38)
			// egg=0
		if(egg==2&&event.keyCode==40)
			egg=3;
		// if(egg==2&&event.keyCode!=40)
			// egg=0;
		if(egg==3&&event.keyCode==40)
			egg=4;
		// if(egg==3&&event.keyCode!=40)
			// egg=0;
		if(egg==4&&event.keyCode==37)
			egg=5;
		// if(egg==4&&event.keyCode!=37)
			// egg=0;
		if(egg==5&&event.keyCode==39)
			egg=6;
		// if(egg==5&&event.keyCode!=39)
			// egg=0;
		if(egg==6&&event.keyCode==37)
			egg=7;
		// if(egg==6&&event.keyCode!=37)
			// egg=0;
		if(egg==7&&event.keyCode==39)
			egg=8;
		// if(egg==7&&event.keyCode!=39)
			// egg=0;
		if(egg==8&&event.keyCode==66)
			egg=9;
		// if(egg==8&&event.keyCode!=66)
			// egg=0;
		if(egg==9&&event.keyCode==65)
			egg=10;
		// if(egg==9&&event.keyCode!=65)
			// egg=0;
		if(egg==10&&event.keyCode==66)
			egg=11;
		// if(egg==10&&event.keyCode!=66)
			// egg=0;
		if(egg==11&&event.keyCode==65){
			$("<iframe src='../jq_effects_library/jquery-cloud/index.html' style='position:fixed;top:0;left:0;width:100%;height:100%;border:0;z-index:100;'></iframe").appendTo("html")
		}
	})
})

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
	$(".navbar-inverse .navbar-nav.navbar-left>li").hover(function(){
		var n_active=$(".navbar-inverse .navbar-nav.navbar-left>li").index($(".navbar-inverse .navbar-nav.navbar-left>.active"));
		var n_hover=$(".navbar-inverse .navbar-nav.navbar-left>li").index(this);
		var wid=$(this).width();
		var t,x;
		$("style").remove();
		if(n_hover-n_active>=0)
			for(t=n_active,x=0;t<n_hover;t++)
				x+=$(".navbar-inverse .navbar-nav.navbar-left>li:eq("+t+")").width();
		else
			for(t=n_active-1,x=0;t>n_hover-1;t--)
				x-=$(".navbar-inverse .navbar-nav.navbar-left>li:eq("+t+")").width();
		$("<style>.navbar-inverse .navbar-nav.navbar-left>.active::after{width:"+wid+"px;left:"+x+"px;}</style>").appendTo("html")
	},function(){
		$("style").remove();
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
		//part1底部隐藏
		if(win_wid>991){
			if($(window).scrollTop() > 1000){
				$(".part1,#egg").css('opacity','0')
			}
			else{
				$(".part1,#egg").css('opacity','1')
			}
		}
	})

	//part1高度填充
	if(t3==500)
		$(".part2").css('margin-top',$(".part1").height()+$(".part1>div>div").height()-110)
	
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
		spanhidden(".p1_text1>div>span:eq("+n+")",0.5);
		if($(window).width()<=991){
			setTimeout(function(){$(".p1_text1>div>span:eq("+nn+")").addClass("show")},500);
		}
		else{
			setTimeout(function(){$(".p1_text1>div>span:eq("+nn+")").addClass("show")},510);
		}
		n++;
		nn++;
	}
	$(".p1_text1>div").width($(".p1_text1>div>span:eq(0)").width())
	setInterval(changespan,4000)//这里调整切换时隔


	//轮播图高度统一
	$(".carousel-inner>.item:eq(0)").height()<$(".carousel-inner>.item:eq(1)").height() ? $(".carousel-inner>.item:eq(0)").height($(".carousel-inner>.item:eq(1)").height()) : $(".carousel-inner>.item:eq(1)").height($(".carousel-inner>.item:eq(0)").height());

	//上滚到顶部事件
	$('.scrolltop').click(function(){$('html,body').animate({scrollTop:0},300)})

	
	//滚动出现动画
	function scrollappear(id,effectclass){
		$(id).css('opacity','0')
		$(window).on('scroll',function(){
			worktop=$(id).offset().top - $(window).scrollTop();
			if(worktop<$(window).height()-150){
				$(id).addClass(effectclass)
			}
		})
	}
	scrollappear('.p2_2>div:eq(0)','rightin_s');
	scrollappear('.p2_l>div>img','scalein_s');
	scrollappear('.p2_2>div:eq(1)','leftin_s');
	scrollappear('.p2_r','leftin_s');
	scrollappear('.p2_2_text2,.p2_bt2','topin_s');
	scrollappear('.p2_4>.row>div','leftin_s');
	scrollappear('footer,.part3>.more:eq(0)','bottomin_s');

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

	//彩蛋
	var sum = 0;
        var k = false;
        var i = 0;
        document.onkeydown = function(){
            var oEvent = window.event;
            sum = sum + oEvent.keyCode;
            if(sum == 38 || sum == 76 || sum == 116 || sum == 156 || sum == 193 || sum == 232 || sum == 269 || sum == 308 || sum == 374 || sum == 439 || sum == 505 || sum == 570){
                k = true;
                i = i+1;
	            //按键动效
	            switch(oEvent.keyCode){
	            	case 38:$(".part1>div>div").animate({top:"-15px"},10).animate({top:"0px"},100);break;
	            	case 40:$(".part1>div>div").animate({top:"15px"},10).animate({top:"0px"},100);break;
	            	case 37:$(".part1>div>div").animate({left:"-15px"},10).animate({left:"0px"},100);break;
	            	case 39:$(".part1>div>div").animate({left:"15px"},10).animate({left:"0px"},100);break;
	            	case 65:
	            	case 66:$(".part1>div>div").css('animation','small 0.1s');
	            		setTimeout(function(){$(".part1>div>div").css('animation','none')},100);
	            }
            }else{
                k = false;
                i = 0;
            }
            if(k && i == 12){
            	if($("#egg").length>0){
            		$("#egg").remove();
	                $(".part2").css({'box-shadow':'none'})
	                $(".wave").css('display','block')
            	}
            	else{
            		$("<iframe id='egg' src='../jq_effects_library/jquery-cloud/index.html'></iframe").appendTo("html")
	                $(".part2").css({'box-shadow':'0 40px 50px 100px #fff'})
	                $(".wave").css('display','none')
            	}
                sum = 0;
                i = 0;
            }else if(!k){
                sum = 0;
                i = 0;
            }

        }
			
	//窗口改变
	$(window).resize(function(){
		win_wid=$(window).width();
		if(win_wid>973){
			t3=500;
			$(".part2").css('margin-top',$(".part1").height()+$(".part1>div>div").height()-110)
		}
		else{
			t3=50;
			$(".part2").css('margin-top',0)
			$('.navbar-header>a>img:eq(1)').css('display','none')
		}
	})
})

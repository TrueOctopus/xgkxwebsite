$(document).ready(function(){
//--jq--document--

//--导航侧栏--
	$("a").css('textDecoration','none')
	$("#menu").mouseover(function(){
			$("#sidebar").css('left','0')
	})
	$("#menu").mouseleave(function(){
			$("#sidebar").css('left','-210px')
	})
	$("#sidebar").hover(function(){
			$("#sidebar").css('left','0px')
	})
	$("#sidebar").mouseleave(function(){
			$("#sidebar").css('left','-210px')
	})

//--导航栏选项--
	$("#nav2_left>a:eq(0)").click(function(){
		$("#main_iframe").attr('src','content/inner/home.html')
		$("#main_iframe").css({
			'height':'1000px'
		})
		$("#nav2_sign").css({
			'left':'8px',
		})
		$("#mybody").css('background-image','linear-gradient(145deg,#EFFCFE,#92EAFD)')
	})
	$("#nav2_left>a:eq(1)").click(function(){
		$("#main_iframe").attr('src','content/inner/news.html')
		$("#main_iframe").css({
			'height':'1000px'
		})
		$("#nav2_sign").css({
			'left':'89px',
		})
		$("#mybody").css('background-image','linear-gradient(145deg,#EFFCFE,#92EAFD)')
	})
	$("#nav2_left>a:eq(2)").click(function(){
		$("#main_iframe").attr('src','content/inner/act.html')
		$("#nav2_sign").css({
			'left':'171px',
		})
		$("#mybody").css('background-image','linear-gradient(145deg,#EFFCFE,#92EAFD)')
	})
	$("#nav2_left>a:eq(3)").click(function(){
		$("#main_iframe").attr('src','content/inner/forum.html')
		$("#nav2_sign").css({
			'left':'253px',
		})
		$("#mybody").css('background-image','linear-gradient(145deg,#EFFCFE,#92EAFD)')
	})
	$("#nav2_left>a:eq(4)").click(function(){
		$("#main_iframe").attr('src','content/inner/joinus.html')
		$("#main_iframe").css({
			'height':'3200px'
		})
		$("#nav2_sign").css({
			'left':'351px',
		})
		$("#mybody").css('background','#C3F4FE')
	})

//--加入我们--
	var x=-1;
	flash=setInterval(changebg,5000);
	function changebg(){
		if(x>2){x=0;}
		$("#jum_bg>img:eq("+(x-1)+")").fadeOut(1000)
		$("#jum_bg>img:eq("+x+")").fadeIn(1000)
		x++;
	}
	$(".video_play").click(function(){
		$(".joinus_v").css('display','block')
		$(".joinus_v video").css('display','block')
		$(".joinus_v video").trigger('play')
	})
	$(".joinus_v>div>span").click(function(){
		$(".joinus_v video").trigger('pause')
		$(".joinus_v video").css('display','none')
		$(".joinus_v").css('display','none')
	})


})
$(function(){
/*=====================================购物袋=====================================================*/
	$('#head-wrap>#head>.ringup>a>.Acenter').hover(function(){
		$('#head-wrap>#head>.ringup>a>.Acenter').css({'color':'red','background':'#fff'})
		$('#shopping').css({'display':'block'})
	},
	function(){
		$('#head-wrap>#head>.ringup>a>.Acenter').css({'color':'#d7d7d7','background':'none'})
		$('#shopping').css({'display':'none'})
	})
	
	
	
	
/*===================================我的走秀====================================================*/
	$('#head-wrap>#head>.ringup>a>.Wzouxiu').on('mouseenter',function(){
		$('#zouxiu').css({'display':'block'})
		$('#jianjiaohao').css({'display':'block'})
		$('#zouxiu>li>a').eq(0).css({'color':'red'})
	})
	$('#zouxiu').on('mouseleave',function(){
		$('#head-wrap>#head>.ringup>a>.Wzouxiu').css({'color':'#d7d7d7','background':'none'})
		$('#zouxiu').css({'display':'none'})
		$('#jianjiaohao').css({'display':'none'})
	})
	$('#zouxiu>li>a').hover(function(){
		$('#zouxiu>li>a').css({'color':'#000'})
		$(this).css({'color':'red'})
	})
	
	
	
	
/*===================================菜单吸顶=====================================================*/
	   /*130px*/
	$(document).on('scroll',function(){
		var Curlyheight=$(document).scrollTop()
		if(Curlyheight>130){
			$('.nav-wrap>.nav').css({
				'position':'fixed',
				'top':0,
				'left':'0px',
				'width':'100%',
				'padding-left':'390px',
				'z-index':'2',
				'opacity':'0.9',
				'background':'#333333'
			})
			$('#lists-wrap').css({
				'position':'fixed',
				'z-index':'2',
				'top':'28px',
				'opacity':'0.9'
			})
			$('#pack,#clothes,#pack3,#pack4,#pack5,#pack6,#pack7,#pack8,#pack9').css({'top':'69px'})
		}else{
			$('.nav-wrap>.nav').css({
				'position':'absolute',
				'top':0,
				'left':'280px',
				'padding-left':'0px',
				'background':'none'
			})
			$('#lists-wrap').css({
				'position':'absolute',
				'top':'93px'
			})
			$('#pack,#clothes,#pack3,#pack4,#pack5,#pack6,#pack7,#pack8,#pack9').css({'top':'134px'})
		}
	})
	
	
	
	
/*=====================================菜单选项卡=========================================================*/	
	$('#lists-wrap>#lists>.lists-nav>a>li').eq(0).on('mouseenter',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(0).css({'background':'#ffffff','opacity':'1'})
		$('#pack').css({'display':'block','border-top':'none'})
	})
	$('#pack').on('mouseleave',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(0).css({'background':'none'})
		$('#pack').css({'display':'none','border-top':'none'})
	})
		
	$('#lists-wrap>#lists>.lists-nav>a>li').eq(1).on('mouseenter',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(1).css({'background':'#ffffff','opacity':'1'})
		$('#clothes').css({'display':'block','border-top':'none'})
	})
	$('#clothes').on('mouseleave',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(1).css({'background':'none'})
		$('#clothes').css({'display':'none','border-top':'none'})
	})
	
	
	$('#lists-wrap>#lists>.lists-nav>a>li').eq(2).on('mouseenter',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(2).css({'background':'#ffffff','opacity':'1'})
		$('#pack3').css({'display':'block','border-top':'none'})
	})
	$('#pack3').on('mouseleave',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(2).css({'background':'none'})
		$('#pack3').css({'display':'none','border-top':'none'})
	})
	
	$('#lists-wrap>#lists>.lists-nav>a>li').eq(3).on('mouseenter',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(3).css({'background':'#ffffff','opacity':'1'})
		$('#pack4').css({'display':'block','border-top':'none'})
	})
	$('#pack4').on('mouseleave',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(3).css({'background':'none'})
		$('#pack4').css({'display':'none','border-top':'none'})
	})
	
	$('#lists-wrap>#lists>.lists-nav>a>li').eq(4).on('mouseenter',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(4).css({'background':'#ffffff','opacity':'1'})
		$('#pack5').css({'display':'block','border-top':'none'})
	})
	$('#pack5').on('mouseleave',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(4).css({'background':'none'})
		$('#pack5').css({'display':'none','border-top':'none'})
	})
	
	$('#lists-wrap>#lists>.lists-nav>a>li').eq(5).on('mouseenter',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(5).css({'background':'#ffffff','opacity':'1'})
		$('#pack6').css({'display':'block','border-top':'none'})
	})
	$('#pack6').on('mouseleave',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(5).css({'background':'none'})
		$('#pack6').css({'display':'none','border-top':'none'})
	})
	
	$('#lists-wrap>#lists>.lists-nav>a>li').eq(6).on('mouseenter',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(6).css({'background':'#ffffff','opacity':'1'})
		$('#pack7').css({'display':'block','border-top':'none'})
	})
	$('#pack7').on('mouseleave',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(6).css({'background':'none'})
		$('#pack7').css({'display':'none','border-top':'none'})
	})
	
	$('#lists-wrap>#lists>.lists-nav>a>li').eq(7).on('mouseenter',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(7).css({'background':'#ffffff','opacity':'1'})
		$('#pack8').css({'display':'block','border-top':'none'})
	})
	$('#pack8').on('mouseleave',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(7).css({'background':'none'})
		$('#pack8').css({'display':'none','border-top':'none'})
	})
	
	$('#lists-wrap>#lists>.lists-nav>a>li').eq(8).on('mouseenter',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(8).css({'background':'#ffffff','opacity':'1'})
		$('#pack9').css({'display':'block','border-top':'none'})
	})
	$('#pack9').on('mouseleave',function(){
		$('#lists-wrap>#lists>.lists-nav>a>li').eq(8).css({'background':'none'})
		$('#pack9').css({'display':'none','border-top':'none'})
	})
})


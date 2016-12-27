define(['jquery'],function(){
	//alert($.fn.jquery)

	function create(){
		$.fn.say=function(opt){
			var obj={
				scale:0.3,
				color:''
			}
			var set=$.extend({},obj,opt)
			return $(this).each(function(){
				var box=null,w,xx;
					var node=$('<div class="pro"><div class="pro_box"></div><span class="sp"></span><span class="left">'+set.scale*100+'%</span></div>');
					$(this).append(node)
					var w=$(this).find('.pro').width()*set.scale
					$(this).find('.pro_box').width(w)
					$(this).find('.pro_box').css('background',set.color)
					xx=$(this).find('.sp').width()
					if(w<=xx){
						$(this).find('.sp').css('left',w)
					}else{
						$(this).find('.sp').css('left',w-xx/2)
					}
					
					$('.sp').on('mousedown',function(){
						box=$(this).parent();
						//获取盒子的偏移量
						W=box.offset().left;
						box.on('mousemove',move);
						$(document).on('mouseup',up)
					})

					function move(e){
						var x=e.pageX-W;
						var l=x-xx/2;
						if(l>$(this).width()-xx)l=$(this).width()-xx;
						if(l<0)l=xx/2;
						$(this).find('.sp').css('left',l+'px');
						$(this).find('.pro_box').width(l);
					}
					function up(){
						box.off('mousemove');
						$(document).off('mouseup');
					}
			}) 
		}
	}

	return create
})
require.config({
	paths:{
		'jquery':'jquery1.7'
	}
})
require(['main'],function(main){
	console.log(main)
	main()

	var len=$('#oli li').length
	console.log(len)
	
	$('#oli li').eq(0).say({
			scale:0.6,
			color:'red'
		})
	$('#oli li').eq(1).say({
			scale:0.3,
			color:'blue'
		})
	$('#oli li').eq(2).say({
			scale:0.8,
			color:'black'
		})

})
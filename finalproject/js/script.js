$(function(){
	$('#nav-button').click(function(){
		$('body').addClass('has-active-menu');
		$('.menu__slide-left').addClass('is-active');
		$('.page-mask').addClass('is-active');
	});

	$('.close-button, .page-mask').click(function(){
		$('body').removeClass('has-active-menu');
		$('.menu__slide-left').removeClass('is-active');
		$('.page-mask').removeClass('is-active');
	});
});

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

	//begin quiz code
	var firstRadioBtn = $("input#firstCorrect");
	var secondRadioBtn = $("input#secondCorrect");
	var thirdRadioBtn = $("input#thirdCorrecct");
	var fourthRadioBtn = $("input#fourthCorrect");
	var fifthRadioBtn = $("input#fifthCorrect");
	var sixthRadioBtn = $("input#sixthCorrect");

	//store fieldsets in array that will be accessed in for loop while checking answers.
	var fieldsetsArray = [$("fieldset[name='first-question']"), $("fieldset[name='second-question']"), $("fieldset[name='third-question']"), $("fieldset[name='fourth-question']"), $("fieldset[name='fifth-question']"), $("fieldset[name='sixth-question']")];

	//change background color to green if answer is wrong
	function rightAnswer() {
		$(this).parent().animate({
			backgroundColor: "green"
		},
			500
		);
	}

	//change background color to red if answer is wrong
	function wrongAnswer() {
		$(this).parent().animate({
			backgroundColor: "green"
		},
			500
		);
	}

	//go through array. in first object of array, if the input element is equal to correct answer, then call rightAnswer(), which changes background color to green. else, if that child element is not equal to the correct answer, then call wrongAnswer() and continue through array. 
	function checkAnswer() {

		for(var n = 0; n < fieldsetsArray.length; n++) {
			//question 1
			if (firstRadioBtn.val() === "1987") {
				rightAnswer();
				console.log("I AM WORKING!");
			} else if (secondRadioBtn.val() === "Chihiro") {
				rightAnswer();
				console.log("I AM WORKING");
			} else if (thirdRadioBtn.val() === "Wales") {
				rightAnswer();
			} else if (fourthRadioBtn.val() === "Emishi") {
				rightAnswer();
			} else if (fifthRadioBtn.val() === "Savoia S.21") {
				rightAnswer();
			} else if (sixthRadioBtn.val() === "Heart") {
				rightAnswer();
			} else {
				wrongAnswer();
			}
		}
	}

	//listen to submit event 
	$("#submit").click(function(){
		checkAnswer();
		console.log("I'M WORKING.")
	});
});

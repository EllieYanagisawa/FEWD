$(function(){
	//menu reveal
	$('#nav-button').click(function(){
		$('body').addClass('has-active-menu');
		$('.menu__slide-left').addClass('is-active');
		$('.page-mask').addClass('is-active');
		//$('.menu__item--sub-click').addClass('is-active');
	});

	$('.close-button, .page-mask').click(function(){
		$('body').removeClass('has-active-menu');
		$('.menu__slide-left').removeClass('is-active');
		$('.page-mask').removeClass('is-active');
	});

	//sub menu reveal
	$('.menu__item--sub-click').click(function(){

	});

	//begin quiz code
	function checkAnswer() {

		//store fieldsets in array that will be accessed in for loop to add change backgroung class based on right or wrong answer
		var fieldsetsArray = ['first-question', 'second-question', 'third-question', 'fourth-question', 'fifth-question', 'sixth-question']

		//array with correct answers
		var correctAnswers = ['1987', 'Chihiro', 'Wales', 'Emishi', 'Savoia S.21', 'Heart']

		//for loop compares correct answers with user selection and adds a class that changes background if it is right or wrong
		for(var n = 0; n < fieldsetsArray.length; n++) {

			var userInputSelection = $("input[name=" + (n + 1) + "]:checked").val();

			//question 1
			if ( userInputSelection === correctAnswers[n]) {
				$('fieldset[name="' + fieldsetsArray[n] + '"]').parent().addClass('quiz-container__correct-answer-background');
				console.log(correctAnswers[n]);
			} else {
				$('fieldset[name="' + fieldsetsArray[n] + '"]').parent().addClass('quiz-container__wrong-answer-background');
				console.log("user chose wrong answer.");
			}
		}
	}

	function displayNext() {

	}

	//listen to submit event 
	$("#submit").click(function(){
		checkAnswer();
		//console.log("submit")

	});

	//replay
	$("#reset").click(function(){
		$('input[name="1"]', 'input[name="2"]', 'input[name="3"]', 'input[name="4"]', 'input[name="5"]', 'input[name="6"]').attr('checked',false);
	});

	//begin fullPage.js
	$('#fullpage').fullpage({
		'navigation': true,
		'navigationPosition': 'right'
	});
});

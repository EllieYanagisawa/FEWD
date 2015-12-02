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

			var userInputSelection = $('input[name=' + (n + 1) + ']:checked').val();

			//question 1
			if (userInputSelection === correctAnswers[n]) {
				$('fieldset[name="' + fieldsetsArray[n] + '"]').parent().addClass('quiz-container__correct-answer-background');
				//console.log(correctAnswers[n]);
			} else {
				$('fieldset[name="' + fieldsetsArray[n] + '"]').parent().addClass('quiz-container__wrong-answer-background');
				//console.log("user chose wrong answer.");
			}
		}

		var count = $('.quiz-container__correct-answer-background').length;

		$('.quiz__score-container--content').html('<p>You got ' + count + '/' + correctAnswers.length + ' correct!</p><button id="reset">Replay</button>');

		$('.quiz__score-container').addClass('reveal');

	}

	//listen to submit event 
	$('#submit').click(function(){
		checkAnswer();
		//console.log("submit")
	});

		//replay
		$('.quiz__score-container--content').on('click', '#reset', function(){
			$('input').attr('checked', false);
			$('fieldset').parent().removeClass('quiz-container__correct-answer-background quiz-container__wrong-answer-background');
			$('.quiz__score-container').removeClass('reveal');
		});

	//begin fullPage.js
	$('#fullpage').fullpage({
		'navigation': true,
		'navigationPosition': 'right'
	});
});

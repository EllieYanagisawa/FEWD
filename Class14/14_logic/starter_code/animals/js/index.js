$(function(){
	
	//Variables
	var animals = ['animal1.jpg', 'animal2.jpg', 'animal3.jpg', 'animal4.jpg', 'animal5.jpg', 'animal6.jpg', 'animal7.jpg'];

	var n = 0;
	var lastIndexOfArray = animals.length - 1;

	//Events
	$('#next').click(goToNextAnimal);
	$('#back').click(goToPreviousAnimal);

	//Define functions (reactions)
	function goToNextAnimal() {
		if (n === lastIndexOfArray) {
			n = 0;
		} else {
			n++;
		}

		console.log('index: ' + n);
		var nextAnimal = animals[n];
		console.log('animal: ' + nextAnimal);
		$('#image-to-vote-on').attr('src', 'images/' + nextAnimal);
	}

	function goToPreviousAnimal() {
		if (n === 0) {
			n = lastIndexOfArray;
		} else {
			n--;
		}

		console.log('index: ' + n)
		var previousAnimal = animals[n];
		console.log('animal: ' + previousAnimal);
		$('#image-to-vote-on').attr('src', 'images/' + previousAnimal);
	}

});
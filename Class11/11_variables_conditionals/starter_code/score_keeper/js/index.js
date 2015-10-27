$(function(){
	//Storing the total value
	var total = 0;
	//alternative var = total
	// var total = $('#results').text();

	//Set listeners to check for button clicks that call math functions
	$('#zero').click(resetTotalToZero);
	$('#add5').click(addFive);
	$('#add10').click(addTen);
	$('#sub1').click(subOne);

	//Math functions
	function resetTotalToZero(){
		total = 0;
		printTotalResult();
	}

	function addFive(){
		total += 5;
		printTotalResult();
	}

	function addTen(){
		total += 10;
		printTotalResult();
	}

	function subOne (){
		total -= 1;
		printTotalResult();
	}

	//Helper function
	function printTotalResult() {
		$('#result').text(total);
	}

});


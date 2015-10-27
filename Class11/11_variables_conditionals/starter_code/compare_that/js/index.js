$(function(){
	$('#submit').click(compareNums);

	function compareNums() {
		//define two input values
		var num1 = $('#a').val();
		var num2 = $('#b').val();

		// if (num1 > num2) {
		// 	alert("The left value is greater than the right.");
		// } else if (num1 < num2) {
		// 	alert("The right value is greatern than the left.");
		// } else {
		// 	alert("The two values are equal.");
		// }

		if (num1 === num2){
			$('#comparison').text(' = ');
		} else if (num1 > num2){
			$('#comparison').text(' > ');
		} else if (num1 < num2) {
			$('#comparison').text(' < ');
		} else {
			$('#comparison').text(' Error ');
		}
	}

});
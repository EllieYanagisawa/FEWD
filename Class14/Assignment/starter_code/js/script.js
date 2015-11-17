// Store cities in array with var cities
// .append each cities values to <select> menu
// Listen for .change event handler on <select>
// When user hits submit, store input and test to see what city it is with if else
// 

$(function(){

	var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
	console.log(cities);
	addMoreOptions();

	function addMoreOptions() {
		for(n = 0; n < cities.length; n++) {
			$('#city-type').append('<option>' + cities[n] + '</option>');
		}
	}

	$('#city-type').change(changeBackgroundImage);

	function changeBackgroundImage() {
		var city = $('#city-type').val();

		if (city === cities[0]) {
			$('body').attr('class', 'nyc');
		} else if (city === cities[1]) {
			$('body').attr('class', 'sf');
		} else if (city === cities[2]) {
			$('body').attr('class', 'la');
		} else if (city === cities[3]) {
			$('body').attr('class', 'austin');
		} else if (city === cities[4]) {
			$('body').attr('class', 'sydney');
		}
	}

});
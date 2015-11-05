//Listen for event handler
//When user hits submit button, we store the user's input and test to see what city it is.
// If the user's input city is New York, change the background image of the body to its correpsonding image and display the city name
//If the user's input city is San Francisco, change the background image of hte body to its corresponding image and display the city name
// ...

$(function(){

	function changeBackground(){
		//.val() grabs what the input is 
		var city = $('#city-type').val();

		if (city === 'New York' ||  city === 'NYC' || city == 'New York City') {
			$('body').attr('class', 'nyc');
		} else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
			$('body').attr('class', 'sf');
		} else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
			$('body').attr('class', 'la');
		} else if (city === 'Austin' || city === 'ATX') {
			$('body').attr('class', 'austin');
		} else if (city === 'Sydney' || city === 'SYD') {
			$('body').attr('class', 'sydney');
		}
	}

	$('#submit-btn').click(function(){
		event.preventDefault();
		console.log('yo');
		changeBackground();
	});

});
$(document).ready(function() {
	var row = $('.row');
	var createPlaceCard = function(place) {
		var card = $('<div>');
		card.addClass('card');
		var cardImage = $('<div>');
		cardImage.addClass('card-image')
			.addClass('waves-effect')
			.addClass('waves-block')
			.addClass('waves-light');
		var img = $('<img>');
		img.addClass('activator');
		img.attr('src', place.img);
		img.attr('title', place.name);
		var cardContent = $('<div>');
		cardContent.addClass('card-content');
		var cardTitle = $('<span>');
		cardTitle.addClass('card-title')
			.addClass('activator')
			.addClass('grey-text')
			.addClass('text-darken-4');
		cardTitle.text(place.name);
		var cardTitleIcon = $('<i>');
		cardTitleIcon.addClass('material-icons');
		cardTitleIcon.addClass('right');
		cardTitleIcon.text('more_vert');
		var cardReveal = $('<div>');
		cardReveal.addClass('card-reveal');
		var cardRevealTitle = $('<span>');
		cardRevealTitle.addClass('card-title')
			.addClass('grey-text')
			.addClass('text-darken-4');
		cardRevealTitle.text(place.name);
		var cardRevealTitleIcon = $('<i>');
		cardRevealTitleIcon.addClass('material-icons')
			.addClass('right');
		cardRevealTitleIcon.text('close');
		var cardRevealContent = $('<p>');
		cardRevealContent.text(place.description);
		cardImage.append(img);
		cardTitle.append(cardTitleIcon);
		cardContent.append(cardTitle);
		cardRevealTitle.append(cardRevealTitleIcon);
		cardReveal.append(cardRevealTitle)
			.append(cardRevealContent);
		card.append(cardImage)
			.append(cardContent)
			.append(cardReveal);
		row.append(card);
	};
	$.ajax({
		url: 'js/places.json',
		success: function(data) {
			var places = data ? data : [];
			places.forEach(function(place) {
				createPlaceCard(place);
			});
		},
		error: function(data) {
			console.log('error = ' + data);
		}
	});
	row.on('scroll', function(event) {
		console.log(event.target.scrollTop);
	});
});
$(document).ready(function(){
	var timeToDisappearCircle = 5;
	var centers = [];
	function canRenderCircle(x, y){
		for(var i = 0; i < centers.length; i++){
			var distance = Math.sqrt(Math.pow((x - centers[i].x),2) + Math.pow((y - centers[i].y),2));
			if(distance < 100){
				return false;
			}
		}
		return true;
	};
	var body = $('body');
	body.on('click', function(event){
		if(canRenderCircle(event.pageX, event.pageY)){
			var div = $(document.createElement('div'));
			div.addClass("circle");
			div.css({
				top: (event.pageY - 50) + 'px',
				left: (event.pageX - 50) + 'px'
			});
			body.append(div);
			centers.push({
				x: event.pageX,
				y: event.pageY
			});
		}
	});
	body.on('click', 'div', function(){
		var div = $(this);
		if(!div.hasClass('mark-to-remove')){
			div.addClass('mark-to-remove');
			var circleCount = timeToDisappearCircle;
			div.text(circleCount);
			var circleInterval = setInterval(function(){
				if(circleCount === 1){
					centers.splice(div.index(),1);
					div.remove();
					clearInterval(circleInterval);
				}
				div.text(--circleCount);
			}, 1000);
		}
	});
});
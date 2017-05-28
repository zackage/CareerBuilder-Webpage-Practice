function main() {
	$('.dropdown').on('click',function() {
		$('.drop-nav').toggleClass("hideBlock showBlock");
	})


};

	window.onclick = function(event){
		if (!event.target.matches('.dropdown')) {
			if ($('.drop-nav').hasClass('showBlock')) {
				$('.drop-nav').toggleClass('hideBlock showBlock');
			}
		}
	};


$(document).ready(main);

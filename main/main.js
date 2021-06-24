// Option 2 -jQuery Smooth Scrool
$('.navbar a').on('click', function(e) {
if(this.hash !== ''){
	e.preventDefault();

	const {hash} = this;

	$('html, body').animate({
		scrollTop: $(hash).offset().top
	},700);
}
				  });
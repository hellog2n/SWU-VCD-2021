// Option 2 -jQuery Smooth Scrool
$('.navbar a').on('click', function(e) {
if(this.hash !== ''){
	e.preventDefault();

	const {hash} = this;
	if (hash == '#about'){
		console.log('1');
	}else if (hash == '#credit'){
		console.log('2');
	}
	$('html, body').animate({
		scrollTop: $(hash).offset().top - 250
	},700);
}
				  });


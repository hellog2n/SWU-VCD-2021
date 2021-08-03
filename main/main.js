// Option 2 -jQuery Smooth Scrool
$('.navbar a').on('click', function(e) {
if(this.hash !== ''){
	e.preventDefault();

	const {hash} = this;
	
	$('html, body').animate({
		scrollTop: $(hash).offset().top -150
	},700);
}
				  });




let lastScroll_Top = 0; 
const delta = 5; 
// 동작의 구현이 시작되는 위치 
const navbarHeight = $("#logo_main").innerHeight();
// 영향을 받을 요소를 선택


function hasScrolled() { 
    const st = $(this).scrollTop(); 
    // Make sure they scroll more than delta 
    if(Math.abs(lastScroll_Top - st) <= delta) return; 
    // If they scrolled down and are past the navbar, 
    // add class .nav-up. 
    // This is necessary so you never see what is "behind" the navbar. 
    
    
    if (st > lastScroll_Top && st > navbarHeight){ 
        
        // Scroll Down 
        if(window.innerWidth < 400){
             $('.logo_text').css('display', 'none');
             $('.logo_main').css('text', 'none');
        }
        else{
			$('.logo_text').css('display', 'none');
        }
    }
    else if (st <= navbarHeight){ 
             // Scroll Up 
             // eslint-disable-next-line no-lonely-if
             

             
             if(st + $(window).height() < $(document).height()) {
                 if(window.innerWidth < 400){
					$('.logo_text').css('display', '');
                   }
                 else {
					$('.logo_text').css('display', '');
                 }
             }
    
            }
            lastScroll_Top = st; 
    }



    

let didScroll; // 스크롤시에 사용자가 스크롤했다는 것을 알림
 $(window).scroll(event => {
      didScroll = true; }); 

      // hasScrolled()를 실행하고 didScroll 상태를 재설정
       setInterval(() => { 
           if (didScroll) { 
               hasScrolled(); 
               didScroll = false; 
               
            } }, 250); 
            

    

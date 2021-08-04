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
        if(window.innerWidth < 479){
             $('.logo_text').css('display', 'none');
             $('.logo_main').css('text-align', 'center');
             $('.navbar_logo').css('margin-left', '0');
        }
        else if(window.innerWidth < 900) {
            $('.logo_text').css('display', 'none');
            $('.logo_main').css('text-align', 'center');
             $('.navbar_logo').css('margin-left', '0');
        }
        else {
            $('.logo_text').css('display', 'none');
        }
    }
    else if (st <= navbarHeight){ 
             // Scroll Up 
             // eslint-disable-next-line no-lonely-if
             

             
             if(st + $(window).height() < $(document).height()) {
                 if(window.innerWidth < 479){
                    $('.logo_text').css('display', '');
                    $('.logo_main').css('text-align', 'left');
                    $('.navbar_logo').css('margin-left', '30px');
                   }
                else if(window.innerWidth < 900){
                    $('.logo_text').css('display', '');
                    $('.logo_main').css('text-align', 'left');
                    $('.navbar_logo').css('margin-left', '30px');
                 }
                 else {
                    $('.logo_text').css('display', '');
                    $('.logo_main').css('text-align', 'left');
                    $('.navbar_logo').css('margin-left', '80px');
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
            



    
    // Create a condition that targets viewports at least 780px wide
const mediaQuery = window.matchMedia('(min-width: 900px)')

function handleNavBar(e) {
  // Check if the media query is true
  
  if (e.matches) {
	 
                    $('.logo_main').css('text-align', 'left');
                    $('.navbar_logo').css('margin-left', '80px');

  }
  else {
    $('.navbar_logo').css('margin-left', '30px');
  }
  


  }


// Register event listener
mediaQuery.addListener(handleNavBar)

// Initial check
handleNavBar(mediaQuery)

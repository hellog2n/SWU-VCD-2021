let lastScrollTop = 0; 
const delta = 5; 
// 동작의 구현이 시작되는 위치 
const navbarHeight = $("#section-top").innerHeight();
// 영향을 받을 요소를 선택


function hasScrolled() { 
    const st = $(this).scrollTop(); 
    // Make sure they scroll more than delta 
    if(Math.abs(lastScrollTop - st) <= delta) return; 
    // If they scrolled down and are past the navbar, 
    // add class .nav-up. 
    // This is necessary so you never see what is "behind" the navbar. 
    
    console.log(st, lastScrollTop, navbarHeight);
    if (st > lastScrollTop && st > navbarHeight){ 
        console.log('scrolled-down');
        // Scroll Down 
        $('#section-top').removeClass('section-top').addClass('nav-down'); 
        $('#logo').removeClass('logo').addClass('logo-down'); 
    }
    else if (st <= navbarHeight){ 
             // Scroll Up 
             // eslint-disable-next-line no-lonely-if
             console.log('scrolled-up');
             if(st + $(window).height() < $(document).height()) 
                  $('#section-top').removeClass('nav-down').addClass('section-top'); 
                  $('#logo').removeClass('logo-down').addClass('logo'); 
    
            }
            lastScrollTop = st; 
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
            

    

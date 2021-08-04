let lastScrollTop = 0; 
const delta = 5; 
// 동작의 구현이 시작되는 위치 
const navbarHeight = $("#section-top").innerHeight();
// 영향을 받을 요소를 선택
let st = 0;
const navbar = document.getElementsByClassName('navbar');
function hasScrolled() { 
    st = $(this).scrollTop(); 
    // Make sure they scroll more than delta 
    if(Math.abs(lastScrollTop - st) <= delta) return; 
    // If they scrolled down and are past the navbar, 
    // add class .nav-up. 
    // This is necessary so you never see what is "behind" the navbar. 
    
    
    if (st > lastScrollTop && st > navbarHeight){ 
        
    
        
        
        // Scroll Down 
        if(darkSetting == false){
        $('.navbar').css('backgroundColor', 'white');
        $('#navbar').css('backgroundColor', 'white');
        } else {
            $('.navbar').css('backgroundColor', 'black');
            $('#navbar').css('backgroundColor', 'black');
        }
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
// Javascript


let darkSetting = true;

// main.html에 맞게 되어있음. work.html에도 에러 없이 적용이 필요
function settingDarkWhite(value){
    const DivLists = document.getElementsByTagName("div");
    const Alists = document.getElementsByTagName("a");
    const Plists = document.getElementsByTagName("p");
    const Wrapper = document.getElementsByClassName("container")[0];
    const Navbar = document.getElementsByClassName("navbar")[0];
    const backBtn = document.getElementsByClassName("back_button")[0];
    const title = document.getElementsByClassName("title")[0];
    
    let circleDelay;
    if(window.innerWidth < 600){
        circleDelay = [400, 900];
    }else {
        circleDelay = [300, 700];
    }
   
    


    switch(value){
        case true:

            Wrapper.style.backgroundColor = "";
            $('.background').addClass('js-circle').addClass('circle');
            $('.circle').css('backgroundColor', '#000000');
            $('.darkMode').removeClass('black');
    $('.darkMode').addClass('white');
        setTimeout(() => {
                
              
        
        // document.body.style.backgroundColor = "black";
       // Wrapper.style.backgroundColor = "black";
        document.body.style.color = "white";
        backBtn.style.color = "white";
        Navbar.style.backgroundColor = "black";

    for(let idx = 0; idx <Plists.length; idx++){
        Plists[idx].style.color = "white";
        }
    for(let idx = 0; idx <DivLists.length; idx++){
        DivLists[idx].style.color = "white";
    }
    for(let idx = 0; idx <Alists.length; idx++){
        Alists[idx].style.color = "white";
    }
    
    
    
    title.style.color = "#009999";
}, circleDelay[0]);

setTimeout(() => {
    $('.background').removeClass('js-circle').removeClass('circle');
    document.body.style.backgroundColor = "black";
    Wrapper.style.backgroundColor = "black";
    
}, circleDelay[1]);

    break;
    case false:

        Wrapper.style.backgroundColor = "";
        $('.background').addClass('js-circle').addClass('circle');
        $('.circle').css('backgroundColor','#ffffff');
        $('.darkMode').removeClass('white');
        $('.darkMode').addClass('black');
        setTimeout(() => {
        
        document.body.style.color = "black";
        backBtn.style.color = "black";
        Navbar.style.backgroundColor = "white";
        for(let idx = 0; idx <Plists.length; idx++){
            Plists[idx].style.color = "black";
            }
    for(let idx = 0; idx <DivLists.length; idx++){
        DivLists[idx].style.color = "black";
    }
    for(let idx = 0; idx <Alists.length; idx++){
        Alists[idx].style.color = "black";
    }
   
    title.style.color = "#009999";
}, circleDelay[0]);
setTimeout(() => {
    $('.background').removeClass('js-circle').removeClass('circle');
    document.body.style.backgroundColor = "white";
    Wrapper.style.backgroundColor = "white";
    
}, circleDelay[1]);
    break;
    
    default:
            break;
}

}


// 버튼 클릭시 흑백모드 적용 (기본 세팅값 : 흑)
document.addEventListener("DOMContentLoaded", 
$('.darkMode').click(e => {
    // console.log(e.target.hash);
    settingDarkWhite(!darkSetting);
    darkSetting = !darkSetting;
}),

$('.back_button').mouseover(e => {
    e.target.style.color = '#009999';
}),
$('.back_button').mouseout( e => {
    if (darkSetting == true){
        e.target.style.color = '#000000';
    }
    else {
        e.target.style.color = '#ffffff';
    }
    
})
);





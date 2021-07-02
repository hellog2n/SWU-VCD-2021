// Javascript


let darkSetting = true;

// main.html에 맞게 되어있음. work.html에도 에러 없이 적용이 필요
function settingDarkWhite(value){
    const DivLists = document.getElementsByTagName("div");
    const Alists = document.getElementsByTagName("a");
    const Wrapper = document.getElementsByClassName("chat-wrapper")[0];
    
    switch(value){
        
        case true:
        document.body.style.backgroundColor = "black";
        Wrapper.style.backgroundColor = "black";
        document.body.style.color = "white";
    for(let idx = 0; idx <DivLists.length; idx++){
        DivLists[idx].style.color = "white";
    }
    for(let idx = 0; idx <Alists.length; idx++){
        Alists[idx].style.color = "white";
    }
    
    break;
    case false:
        document.body.style.backgroundColor = "white";
        Wrapper.style.backgroundColor = "white";
        document.body.style.color = "black";
        
    for(let idx = 0; idx <DivLists.length; idx++){
        DivLists[idx].style.color = "black";
    }
    for(let idx = 0; idx <Alists.length; idx++){
        Alists[idx].style.color = "black";
    }
    break;
    
    default:
            break;
}
}



document.addEventListener("DOMContentLoaded", 
$('.darkMode').click(e => {
    // console.log(e.target.hash);
    settingDarkWhite(!darkSetting);
    darkSetting = !darkSetting;
}));

 // 쿠키를 이용하여 흑백모드 적용
 /*
const setCookie = function(name, value, day) {
    const date = new Date();
    date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};
const getCookie = function(name) {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
};
const deleteCookie = function(name) {
    setCookie(name, "", -1);
}
const changeCookie = function(name, value){
    document.cookie = name + '=' + value + ';';
}


    const cookiename = "darkMode";
    // setCookie(cookiename, 'true', 1);
    let cookie = getCookie(cookiename);
    console.log(cookie);
    // Default Setting : Dark Mode
    if(cookie == null) {
        settingDarkWhite('dark');
    }
    // Light Mode 이면
    if(cookie == 'true')
    {
        settingDarkWhite('light');
    }
    // Dark Mode 이면
    else if(cookie == 'false') {
        settingDarkWhite('dark');
    }

document.addEventListener("DOMContentLoaded", 
$('#darkMode').click(e => {
    console.log(e.target.hash);
    cookie = getCookie(cookiename);
    console.log(cookie);
    // 처음에 Dark Mode라면 버튼을 눌렀을 시 Light Mode가 되어라.
    if(cookie== null) {
        setCookie(cookiename, 'true', 1);
        cookie = getCookie(cookiename);
        settingDarkWhite('light');
    }
    // Dark Mode가 되어라
    if(cookie == 'true')
    {
        console.log(cookie);
        settingDarkWhite('dark');
        changeCookie(cookiename, 'false');
    }
    // Light Mode가 되어라
    else if(cookie == 'false'){
        settingDarkWhite('light');
        changeCookie(cookiename, 'true');
    }
}));
*/


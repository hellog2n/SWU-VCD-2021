
// main.html에 맞게 되어있음. work.html에도 에러 없이 적용이 필요
function settingDarkWhite(value){
    const Plists = document.getElementsByTagName("p");
    const Alists = document.getElementsByTagName("a");
    const fileName = document.location.href.split('/')[(document.location.href.split('/').length-1)].split('.')[0];
    console.log(fileName);

    switch(value){
        
        case 'dark':
            document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        if(fileName === 'main'){
        document.getElementsByClassName("navbar")[0].style.backgroundColor = "#11111188";
        document.getElementsByClassName("navbar")[0].style.color = "white";
        }
    for(let idx = 0; idx <Plists.length; idx++){
        Plists[idx].style.color = "white";
    }
    for(let idx = 0; idx <Alists.length; idx++){
        Alists[idx].style.color = "white";
    }
    break;
    case 'light':
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        if(fileName === 'main'){
        document.getElementsByClassName("navbar")[0].style.backgroundColor = "#ffffff88";
        document.getElementsByClassName("navbar")[0].style.color = "black";
    }
    for(let idx = 0; idx <Plists.length; idx++){
        Plists[idx].style.color = "black";
    }
    for(let idx = 0; idx <Alists.length; idx++){
        Alists[idx].style.color = "black";
    }
    break;
    
    default:
            break;
}
}

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

// deleteCookie("darkMode");
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


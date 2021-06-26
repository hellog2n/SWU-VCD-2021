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

deleteCookie("darkMode");
    const cookiename = "darkMode";
    // setCookie(cookiename, 'true', 1);
    let cookie = getCookie(cookiename);
    console.log(cookie);
    if(cookie == null) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    
        
    }
    // Light Mode 이면
    if(cookie == 'true')
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        
    }
    // Dark Mode 이면
    else if(cookie == 'false') {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        
    }

document.addEventListener("DOMContentLoaded", 
$('#darkMode').click(e => {
    console.log(e.target.hash);
    cookie = getCookie(cookiename);
    console.log(cookie);
    if(cookie== null) {
        setCookie(cookiename, 'true', 1);
        cookie = getCookie(cookiename);
        
    }
    if(cookie == 'true')
    {
        console.log(cookie);
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        
        changeCookie(cookiename,"false");
    }
    else if(cookie == 'false'){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        changeCookie(cookiename,"true");
    }
}));




    
    

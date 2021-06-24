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
    setCookie(cookiename, 'true', 1);
    let cookie = getCookie(cookiename);
    console.log(cookie);
    if(cookie == null) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    if(cookie == 'true')
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        changeCookie(cookie,"false");
    }
    else if(cookie == 'false') {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        changeCookie(cookie,"true");
    }

document.addEventListener("DOMContentLoaded", 
$('#darkMode').click(e => {
    console.log(e.target.hash);
    cookie = getCookie(cookiename);
    console.log(cookie);
    if(cookie== null) {
        setCookie(cookiename, 'true', 1);
        cookie = getCookie(cookiename);
        console.log('hi');
        console.log(cookie);
    }
    if(cookie == 'true')
    {
        console.log(cookie);
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        changeCookie(cookiename,"false");
        console.log('hi');
    }
    else if(cookie == 'false'){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        changeCookie(cookiename,"true");
        console.log('hi');
    }
}));




    
    


<?php
$request_uri = $_SERVER['REQUEST_URI'];



$number = explode("?", $request_uri);
$number_link = preg_replace("/[^0-9]*/s", "", $number[1]);
    // const number = temps[1];


include '../data/data.php';
 $data_object = getJson();


 // $data_object = json_decode($dataJson, true);
$data_object = $data_object[$number_link-1];



$name = $data_object["name"];
$author = $data_object["author"];
$script = $data_object["detail"];
$email = $data_object["email"];
$image = $data_object["image"];
$video = $data_object["video"];
$imagelink = $data_object["imagelink"];
$videolink = $data_object["videolink"];


 ?>




 <script language="javascript">
	
const initialWindow = window.innerWidth;
/* global location */

/* eslint no-restricted-globals: ["off"] */

const temps = location.href.split("?");
    let sections = temps[1];
    if(sections.indexOf("all") != -1)
        sections = "all";
    else if(sections.indexOf("uxui") != -1)
        sections = "uxui";
    else if(sections.indexOf("bx") != -1)
        sections = "bx";
    else if(sections.indexOf("print") != -1)
        sections = "print";
    else if(sections.indexOf("video") != -1)
        sections = "video";
    else if(sections.indexOf("graphic") != -1)
        sections = "graphic";

// 구글 스프레드 시트를 이용한 이미지 임베딩 소스코드 
async function separateRowFromJson(){
    const LINK_COLUMNS = ['imagelink', 'videolink'];
    

    const _DATA = {};
		
            _DATA['name'] = '<?=$name?>';
            _DATA['author'] = '<?=$author?>';
            _DATA['script'] = '<?=$script?>';
            _DATA['email'] = '<?=$email?>';
            _DATA['image'] = parseInt('<?=$image?>', 10);
            _DATA['video'] = parseInt('<?=$video?>', 10); 
         
    
        if(_DATA['image'] > 0 ){
            const url = '<?=$imagelink?>';
            const urlList = url.split(',');
            setting = 'image';
            _DATA[LINK_COLUMNS[0]] = urlList;
        }
        if(_DATA['video'] > 0){
            const url = '<?=$videolink?>';
            const urlList = url.split(',');
            _DATA[LINK_COLUMNS[1]] = urlList;
            setting = 'video';
        }

        
	return _DATA;
}



async function main(){
	
    
	// const COLUMNS = ['num', 'name', 'author', 'detail', 'image', 'video', 'email'];
    
    
	const DATA =  await separateRowFromJson();
	
	
		const TARGET={
            title : document.getElementsByClassName('title'),
            author : document.getElementsByClassName('author'),
            script : document.getElementsByClassName('script'),
            image :document.getElementsByClassName('image'),
            video : document.getElementsByClassName('video'),
            email : document.getElementsByClassName('email')
		};
        
        
        if(DATA.image > 0){
            
        const image = new Array();
        for(let count = 0; count < DATA.imagelink.length; count++){
            image[count] = new Image();
            let url = "https://drive.google.com/uc?id=";
            url += DATA.imagelink[count];
            image[count].src = url;
            TARGET.image[0].appendChild(image[count]);
        }
        }
        if(DATA.video > 0){
            const ifrm = new Array();
            for(let count = 0; count < DATA.videolink.length; count++){


            ifrm[count] = document.createElement("iframe");
            ifrm[count].setAttribute("src", DATA.videolink[count]);
            
            ifrm[count].style.alignItems = "center";
            if(initialWindow > 1000){
            ifrm[count].style.width = "calc(60vw)";
            ifrm[count].style.height = "calc(45vw)";
            }
            else {
                ifrm[count].style.width = "calc(65vw)";
                ifrm[count].style.height = "calc(50vw)"; 
            }
            ifrm[count].setAttribute('frameborder', 0);
            ifrm[count].setAttribute('allow', "autoplay");
            ifrm[count].setAttribute('allow', "fullscreen");
            ifrm[count].setAttribute('allow', "picture-in-picture");
            TARGET.video[0].appendChild(ifrm[count]);

}
        }
        TARGET.script[0].textContent = "";
       // const scriptList = explode('<br>', DATA.detail);
        const scriptList = DATA.script.split('<br>');
        for(let idx = 0; idx < scriptList.length; idx++){
            if(idx != scriptList.length - 1){
                scriptList[idx] += '\r\n';
            }
            TARGET.script[0].textContent += scriptList[idx];
        }
        TARGET.title[0].textContent = DATA.name;
        TARGET.author[0].textContent = DATA.author;
       



        const emailList = DATA.email.split(', ');
        
        for(let idx = 0; idx < emailList.length; idx++){

         
        // 웹페이지 주소일 경우
        if(emailList[idx].indexOf("@") == -1){
            const emailsubList = emailList[idx].split(' : ');
        $("#email").append(() =>
            `<a href="${emailsubList[1]}" class="hyperlink">${emailList[idx]}</a>`
                );
        }

        // 이메일 주소일 경우 
        else {
const emailsubList = emailList[idx].split(' : ');

if(emailsubList.length == 1){
    // 이메일 주소가 한 개일 경우

            $("#email").append(() =>  
            `<a href="mailto:${emailList[idx]}" class="hyperlink" style="display: block;">${emailList[idx]}</a>`
                );
}

else {
    // 이메일 주소가 여러개일 경우
    
            
            $("#email").append(() =>  
            `<a href="mailto:${emailsubList[1]}" class="hyperlink" style="display: block;">${emailList[idx]}</a>`
                );
}

           

        
                
            
        

            
        }
    }
        
       
        
		
		
		


				
}
window.addEventListener('DOMContentLoaded', main);




 </script>

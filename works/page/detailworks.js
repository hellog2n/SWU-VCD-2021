

/* global location */

/* eslint no-restricted-globals: ["off"] */

const temps = location.href.split("?");
    // const number = temps[1];
    const number = temps[1];
    let setting = "";

// JavaScript Document
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
            const results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// 구글 스프레드 시트를 이용한 이미지 임베딩 소스코드 
async function separateRowFromJson(SOURCE, COLUMNS){
    let urlList = [];
    const LINK_COLUMNS = ['imagelink', 'videolink'];
	const FETCHED_SOURCE = await fetch(SOURCE);
  	let temp = await FETCHED_SOURCE.json();
 	temp = temp.feed.entry;
    const IDX_NUMBER = number -1;
    const _DATA = {};
		for(let k=0; k<Object.keys(COLUMNS).length; k++){;
            _DATA[COLUMNS[k]] = temp[IDX_NUMBER]['gsx$'+COLUMNS[k]].$t;
		}
    
    

        if(parseInt(_DATA[COLUMNS[4]], 10) > 0 ){
            const url = temp[IDX_NUMBER]['gsx$'+LINK_COLUMNS[0]].$t;
            urlList = url.split(',');
            setting = 'image';
            _DATA[LINK_COLUMNS[0]] = urlList;
        }
        if(parseInt(_DATA[COLUMNS[5]], 10) > 0){
            const url = temp[IDX_NUMBER]['gsx$'+LINK_COLUMNS[1]].$t;
            _DATA[LINK_COLUMNS[1]] = url;
            setting = 'video';
        }
	return _DATA;
}



async function main(){
	
	const SOURCE = 'https://spreadsheets.google.com/feeds/list/1uFbTYJ3_jMkA9FdCntAzzSmx67o-Deey3nm42WkQaKU/2/public/full?alt=json';
	const COLUMNS = ['num', 'name', 'author', 'detail', 'image', 'video'];
    
    
	const DATA =  await separateRowFromJson(SOURCE, COLUMNS);
	
	// const container = document.getElementById("container");

	
		// container.innerHTML+=`<a class="item" href="#" id="item${count}"><img src='' onError="this.onerror=null; this.src='./images/thumbnail/altthumb.png'"/><p class="name"></p><p class="author"></p></a>`;
  
	
		// document.write(`<a class="item" href="#"><img src='' onError="this.onerror=null; this.src='./images/thumbnail/altthumb.png'" id='item' class='uxui_img' /><p class="name"></p><p class="author"></p></a>`);

		// document.write(`<a class="thumb" href="#"><img src='./images/thumbnail/${count}.png' id='thumb' class='uxui_img' /></a>`);

		const TARGET={
            title : document.getElementsByClassName('title'),
            author : document.getElementsByClassName('author'),
            script : document.getElementsByClassName('script'),
            image :document.getElementsByClassName('image'),
            video : document.getElementsByClassName('video')
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
            
            const ifrm = document.createElement("iframe");
            ifrm.setAttribute("src", DATA.videolink);
            
            ifrm.style.alignItems = "center";
            ifrm.style.width = "calc(85vw)";
            ifrm.style.height = "calc(60vw)";
            ifrm.setAttribute('frameborder', 0);
            ifrm.setAttribute('allow', "autoplay");
            ifrm.setAttribute('allow', "fullscreen");
            ifrm.setAttribute('allow', "picture-in-picture");
            TARGET.video[0].appendChild(ifrm);
            
            
        }
        TARGET.script[0].textContent = "";
        const scriptList = DATA.detail.split('<br>');
        for(let idx = 0; idx < scriptList.length; idx++){
            if(idx != scriptList.length - 1){
                scriptList[idx] += '\r\n';
            }
            TARGET.script[0].textContent += scriptList[idx];
        }
        TARGET.title[0].textContent = DATA.name;
        TARGET.author[0].textContent = DATA.author;
       // TARGET.script[0].textContent = DATA.detail;
		// image.src = DATA.img;
		


		// TARGET.item[i].textContent = DATA[i].num;
        
		
		
		
	

				
}
window.addEventListener('DOMContentLoaded', main);




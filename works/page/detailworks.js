

/* global location */

/* eslint no-restricted-globals: ["off"] */

const temps = location.href.split("?");
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
            urlList = url.split(',');
            _DATA[LINK_COLUMNS[1]] = urlList;
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
			item : document.getElementsByClassName('item'),
		};
        
        console.log(DATA.name);
        console.log(DATA.author);
        console.log(DATA.num);
        console.log(DATA.detail);
        console.log(setting);

        console.log(DATA.imagelink);
        if(DATA.image > 0){
            for(let idx = 0; idx < DATA.imagelink.length; idx++){
                console.log(DATA.imagelink[idx]);
            }
        }
        else if(DATA.video > 0){
            for(let idx = 0; idx < DATA.videolink.length; idx++){
                console.log(DATA.videolink[idx]);
            }
        }
        
		// image.src = DATA.img;
		


		// TARGET.item[i].textContent = DATA[i].num;
		/*
		const image = new Image();
		let url = "https://drive.google.com/uc?id=";
		url += DATA[i].img;
		image.src = url;
		TARGET.img[i].appendChild(image);
		*/
		
	

				
}
window.addEventListener('DOMContentLoaded', main);




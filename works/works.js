// JavaScript Document
const resolution = 220;
// 네비게이션 섹션을 누를 때 보여지는 섹션이 다르게 적용되는 부분
document.addEventListener("DOMContentLoaded", 

// ALL
$('#all').click(e => {
	console.log(e.target.hash);
	$(".uxui").show();
	$(".bx").show();
	$(".graphic").show();
	$(".print").show();
	$(".video").show();
}),
// UXUI
$('#uxui').click(e => {
	console.log(e.target.hash);
	$(".uxui").show();
	$(".bx").hide();
	$(".graphic").hide();
	$(".print").hide();
	$(".video").hide();

}),
// Bx
$('#bx').click(e => {
	console.log(e.target.hash);
	$(".uxui").hide();
	$(".bx").show();
	$(".graphic").hide();
	$(".print").hide();
	$(".video").hide();

}),
// Graphic
$('#graphic').click(e => {
	console.log(e.target.hash);
	$(".uxui").hide();
	$(".bx").hide();
	$(".graphic").show();
	$(".print").hide();
	$(".video").hide();

}),
// 출판
$('#print').click(e => {
	console.log(e.target.hash);
	$(".uxui").hide();
	$(".bx").hide();
	$(".graphic").hide();
	$(".print").show();
	$(".video").hide();

}),
// 영상
$('#video').click(e => {
	console.log(e.target.hash);
	$(".uxui").hide();
	$(".bx").hide();
	$(".graphic").hide();
	$(".print").hide();
	$(".video").show();
})
);





// 구글 스프레드 시트를 이용한 이미지 임베딩 소스코드 
async function separateRowFromJson(SOURCE, COLUMNS){
	const FETCHED_SOURCE = await fetch(SOURCE);
  	let temp = await FETCHED_SOURCE.json();
 	temp = temp.feed.entry;

	const _DATA = [];
	for(let i=0; i<Object.keys(temp).length; i++){
		_DATA[i]={};
		for(let k=0; k<Object.keys(COLUMNS).length; k++){;
			_DATA[i][COLUMNS[k]] = temp[i]['gsx$'+COLUMNS[k]].$t;
		}
	}
	
	return _DATA;
}

function sendFunc( aValue ) { 
	 location.href="page/detailworks.html?" + aValue; 
	 // location.href="detailworks.html?"
	}




async function main(){
	
	const SOURCE = 'https://spreadsheets.google.com/feeds/list/1uFbTYJ3_jMkA9FdCntAzzSmx67o-Deey3nm42WkQaKU/1/public/full?alt=json';
	const COLUMNS = ['num', 'name', 'author', 'img', 'section', 'link'];
	
	const DATA =  await separateRowFromJson(SOURCE, COLUMNS);
	
	const allNumber = DATA.length;
	const container = document.getElementById("container");



	// resolution -> 해상도 표시하는 부분
	for (let count = 1; count <= allNumber; count++) {
		container.innerHTML+=`<a class="item" href="#" onclick="javascript:sendFunc('${count}'); return false;" id="item${count}"><img src='' onError="this.onerror=null;  this.src='./images/thumbnail/altthumb.png'" 
		style="width: ${resolution}px; height: ${resolution}px;"/><p class="name"></p><p class="author"></p></a>`;
  
	}
		// document.write(`<a class="item" href="#"><img src='' onError="this.onerror=null; this.src='./images/thumbnail/altthumb.png'" id='item' class='uxui_img' /><p class="name"></p><p class="author"></p></a>`);

		// document.write(`<a class="thumb" href="#"><img src='./images/thumbnail/${count}.png' id='thumb' class='uxui_img' /></a>`);
	
		const TARGET={
			item : document.getElementsByClassName('item'),
		};

	for(let i=0; i<DATA.length; i++){
		// img tag
		const image = TARGET.item[i].childNodes[0];
		// p tag
		const name = TARGET.item[i].childNodes[1];
		// p tag
		const author = TARGET.item[i].childNodes[2];


		image.src = DATA[i].img;
		image.
		name.textContent = DATA[i].name;
		author.textContent = DATA[i].author;

		TARGET.item[i].classList.add(DATA[i].section);
		// TARGET.item[i].setAttribute('href', DATA[i].link);


		// TARGET.item[i].textContent = DATA[i].num;
		/*
		const image = new Image();
		let url = "https://drive.google.com/uc?id=";
		url += DATA[i].img;
		image.src = url;
		TARGET.img[i].appendChild(image);
		*/
		console.log(name.textContent);
		console.log(author.textContent);
	}

	
}
window.addEventListener('DOMContentLoaded', main);


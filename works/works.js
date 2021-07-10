// JavaScript Document
const resolution = 330;


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
}),


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

// 해당 링크로 접속하는 함수
function sendFunc( aValue ) { 
	 location.href="../detail/detail.html?" + aValue; 
	 // location.href="detailworks.html?"
	}



// 구글스프레드시트에서 데이터를 갖고와서 처리하는 코드
async function main(){
	
	const SOURCE = 'https://spreadsheets.google.com/feeds/list/1uFbTYJ3_jMkA9FdCntAzzSmx67o-Deey3nm42WkQaKU/1/public/full?alt=json';
	const COLUMNS = ['num', 'name', 'author', 'img', 'section', 'link'];
	
	const DATA =  await separateRowFromJson(SOURCE, COLUMNS);
	
	const allNumber = DATA.length;
	const container = document.getElementById("container");



	// resolution -> 해상도 표시하는 부분
	for (let count = 1; count <= allNumber; count++) {
		container.innerHTML+=`<a class="item" href="#" onclick="javascript:sendFunc('${count}'); return false;" id="item${count}"><img src='' onError="this.onerror=null;  this.src='./images/thumbnail/altthumb.png'" 
		style="width: ${resolution}px; height: ${resolution}px;"/><p class="name"></p><p class="author"></p>
		</a>`;
	}
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
	}


	
const files = new Image();

// 호버 관리하는 부분
// 마우스가 호버 중이라면
	$('.item').mouseenter(function(){
		let image_link = "";

		// 해당 객체의 ID 값을 갖고와라
		const id_check = $(this).attr("id");
		// 문자열 중 숫자만 반환
		const numID = id_check.replace(/[^0-9]/g, "");
		files.src = DATA[numID-1].img;
		// 이미지 파일 검증
		if(files.complete == false){
			// 파일이 존재하지 않다면 임시썸네일로 대체하라.
			console.log(DATA[numID-1].img);
			image_link = "images/thumbnail/altthumb.png";
		}
		// 파일이 존재한다면 해당 썸네일을 갖고오라.
		else {
			image_link = DATA[numID-1].img;
		}
		
		// (주현쓰가 관리해야할 부분) - id = item(1 ~ 82 보통 숫자로 되어있음)의 자식인 img 태그의 css를 display를 none하라.
		 $(`#${id_check}`).children('img').css("display", "none");
		// $(`#${id_check}`).children('svg').css("display", "block");
		console.log(id_check);

		// (주현쓰가 관리해야할 부분) - id = item(1 ~ 82 보통 숫자로 되어있음)의 자식의 name, author 클래스를 보이게 하라.
		$(`#${id_check}`).children('.name').css("visibility", "visible");
		$(`#${id_check}`).children('.author').css("visibility", "visible");
		// (주현쓰가 관리해야할 부분) - id = item(1 ~ 82 보통 숫자로 되어있음)의 자식에 svg 태그를 추가하라.
		// 첫번째 svg -> Cover SVG (그라데이션)
		// 두번째 svg -> Image SVG (썸네일 이미지)
		 $(`#${id_check}`).append(() => `<svg viewBox="0 0 330 330" class="pos cover_a">
<defs>
	<mask id="MASK2" maskunits="userSpaceOnUse" maskcontentunits="userSpaceOnUse">
		<image xlink:href="../index/images/wave3.gif" height="330px" width="330px" />
	</mask>
</defs>
<g mask="url(#MASK2)">
	<image x="0" y="0" class="space" href="../index/images/cover.png" height="330px" width="330px" opacity="80%" />
</g>
</svg>


<svg viewBox="0 0 330 330" class="pos image_a">
<defs>
	<mask id="MASK1" maskunits="userSpaceOnUse" maskcontentunits="userSpaceOnUse">
		<image xlink:href="../index/images/wave3.gif" height="330px" width="330px" />
	</mask>
</defs>
<g mask="url(#MASK1)">
	<image x="0" y="0" class="space" href=${image_link}  height="330px" width="330px" />
</g>
</svg>`);
		
	});
	
	
	// 마우스가 호버 상태가 아닐 때, 마우스가 해당 객체에서 벗어날 때 이벤트 처리
	$('.item').mouseleave(function(){
		const id_check = $(this).attr("id");

		// (주현쓰가 관리해야할 부분) - id = item(1 ~ 82 보통 숫자로 되어있음)의 자식인 img 태그의 css를 display를 block하라.
		$(`#${id_check}`).children('img').css("display", "block");
		
		//	$(`#${id_check}`).children('svg').css("display", "none");

		// (주현쓰가 관리해야할 부분) - id = item(1 ~ 82 보통 숫자로 되어있음)의 svg 태그들을 없애라.
		$(`#${id_check}`).children('svg').remove();
		
		// (주현쓰가 관리해야할 부분) - id = item(1 ~ 82 보통 숫자로 되어있음)의 자식의 name, author 클래스를 보이지 않게 하라.
		// (css 값을 jquery 코드로 처리해주고 있음)
		$(`#${id_check}`).children('.name').css("visibility", "hidden");
		$(`#${id_check}`).children('.author').css("visibility", "hidden");
		console.log('out');

	});
		
	

}
window.addEventListener('DOMContentLoaded', main);











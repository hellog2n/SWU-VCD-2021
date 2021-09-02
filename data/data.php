<?php
function server(){

    return 'server-talk';

}

function getJson() {
    $data = array(
  array("num"=>1,"name"=>"TitleName","author"=>"Authorname1","detail"=>"서울여대 시각디자인과 홈페이지는 2021년 7월부터 8월 20일까지 약 1달 반여의 시간동안 개발하였습니다. 본 사이트 개발자는 css, html, js는 개발 경험이 없었지만 짧은 시간동안 관련 웹페이지 개발 책과 구글링, 유튜브를 통해 공부하여 개발을 시작했습니다. 본 페이지는 반응형 웹으로 만들어졌으며, 이를 위해 미디어 쿼리를 사용하였습니다. 원래는 구글스프레드시트를 이용하여 Json 형태로 홈페이지내 데이터를 옮기려고 했으나, 잦은 시트 접속 때문인지 구글 스프레드시트 측에서 해당 사이트로 데이터를 전송하는 것이 자주 블락 되었기 때문에 호스팅 서버 내부에 json 파일을 생성하여 이로 접속하도록 하였습니다. 내부 json 파일을 이용한 이유는, 홈페이지 자체에서 CRUD 중 Read만 있다는 점 때문에 이 방법을 택하였습니다. 만약 가능하시다면 데이터베이스를 이용하는것이 좋습니다. 해당 사이트는 Cafe24의 웹 호스팅을 이용하였기 때문에, 서버 언어로 json 데이터를 감싸고 클라이언트로 전달을 위해 php를 사용하였습니다. ","image"=>1,"imagelink"=>"1-mokyVopLlCjVdg1X5hl62m2YjyqRiYQ","video"=>0,"videolink"=>"","email"=>"이름 : name@naver.com, 홈페이지 : https://github.com/hellog2n/SWU-VCD-2021"),
  array("num"=>2,"name"=>"TitleName","author"=>"Authorname2","detail"=>"서울여대 시각디자인과 홈페이지의 작품 개수는 약 69개입니다. 모든 분들이 6개월 혹은 1년동안 열심히 준비하셨으니 다들 많이들 즐겨주세요. :)","image"=>0,"imagelink"=>"","video"=>1,"videolink"=>"https://www.youtube.com/embed/0xJxgvJO2Xo","email"=>"이름 : name@naver.com, 홈페이지 : https://github.com/hellog2n/SWU-VCD-2021"),
  array("num"=>3,"name"=>"TitleName","author"=>"Authorname3","detail"=>"웹사이트 코드 관련 문의는 깃허브 아이디 hellog2n에 있는 SWU-VCD-2021 레포 이슈로 문의 바랍니다. 아무래도 급한 시간내에 만든 것이라 부족한 점이 많습니다.","image"=>0,"imagelink"=>"","video"=>1,"videolink"=>"https://www.youtube.com/embed/0xJxgvJO2Xo","email"=>"이름 : name@naver.com, 홈페이지 : https://github.com/hellog2n/SWU-VCD-2021"),
  array("num"=>4,"name"=>"TitleName","author"=>"Authorname4","detail"=>"여기까지 보셨으면 이 사이트의 글들을 읽는것에 재미를 느끼신 분이시군요. 썸네일 이미지는 심해어 입니다. 이번 서울여대 시각디자인과의 졸전 전시의 컨셉은 \'심해'\ 입니다. 그래서 모든 학생들이 심해어가 되어 어떤 감정을 가진 심해어인지를 그림으로 나타냈다고 합니다. 다들 화이팅입니다 ㅎ","image"=>0,"imagelink"=>"","video"=>1,"videolink"=>"https://www.youtube.com/embed/0xJxgvJO2Xo","email"=>"이름 : name@naver.com, 홈페이지 : https://github.com/hellog2n/SWU-VCD-2021"),
  array("num"=>5,"name"=>"TitleName","author"=>"Authorname5","detail"=>"괜히 예시를 6개나 만들었네요, 할말이 없습니다. ㅋㅋㅋ 이 웹사이트는 서울여대 소프트웨어융합학과, 디지털영상/시각디자인학과 학생 2명이서 같이 개발하였습니다. ","image"=>1,"imagelink"=>"1-mokyVopLlCjVdg1X5hl62m2YjyqRiYQ","video"=>0,"videolink"=>"","email"=>"이름 : name@naver.com, 홈페이지 : https://github.com/hellog2n/SWU-VCD-2021"),
  array("num"=>6,"name"=>"TitleName","author"=>"Authorname6","detail"=>"이 웹사이트가 서울여대 시각디자인 졸업전시에 큰 홍보가 되었길 바랍니다. 안녕히 계세요!","image"=>1,"imagelink"=>"1-mokyVopLlCjVdg1X5hl62m2YjyqRiYQ","video"=>1,"videolink"=>"https://www.youtube.com/embed/0xJxgvJO2Xo","email"=>"이름 : name@naver.com, 홈페이지 : https://github.com/hellog2n/SWU-VCD-2021")
);
return $data;
}


function getWorks() {
	$works = '[{"num":1,"name":"TitleName","author":"Authorname1","img":"2.png","section":"graphic"},
{"num":2,"name":"TitleName","author":"Authorname2","img":"3.png","section":"video"},
{"num":3,"name":"TitleName","author":"Authorname3","img":"4.png","section":"uxui"},
{"num":4,"name":"TitleName","author":"Authorname4","img":"3.png","section":"video"},
{"num":5,"name":"TitleName","author":"Authorname5","img":"2.png","section":"print"},
{"num":6,"name":"TitleName","author":"Authorname6","img":"3.png","section":"graphic"}]';
return $works;
}
?>
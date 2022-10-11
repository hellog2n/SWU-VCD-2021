# 서울여자대학교 시각디자인학과 2021 졸업전시 웹페이지 :seedling:

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=http%3A%2F%2Fswuvd2021.com&count_bg=%23009999&title_bg=%23555555&icon=csswizardry.svg&icon_color=%23FFBF00&title=his&edge_flat=false)](https://hits.seeyoufarm.com)

[>>> 서울여대 38회 졸업전시 사이트 접속 <<<](https://wkddbjyjmail.mycafe24.com/)

## 관리자
- Javascript / PHP / html / CSS : 서울여대 장유진 :whale2: 
- html / CSS : 서울여대 이주현 :dolphin:
- DATA (실제 홈페이지 데이터 입력 담당 : 서울여대 이민희) :shark:

~~백업용 임시 스프레드 시트 관리~~
- 사이트에서 새로고침 다량 발생시 구글 스프레드시트 접속을 블락시키는 현상이 발생함.
- 그러므로 내부 json 파일 형태로 만들었습니다!



---
## 페이지 소개


| No | 페이지 제목 | 페이지 설명 | 부가 설명 |
|---|---|---|---|
|1|index.html|동영상이 나오는 인덱스 페이지| * 사이트 자체를 클릭하면 모바일 접속시 intro.html로 이동 / PC 접속시 main.html로 이동|
|2|intro.html|저전력 모드 안내가 나오는 인트로 페이지|- Background Img : GIF (해상도 확인 필요) <br> - 사이트 자체를 클릭하면 intro.html로 이동|
|3|main.html|메인 페이지|- 네비게이션을 누를 때마다 자동 스크롤 <br> - 그라데이션 원의 꿀렁꿀렁 대고 있음. <br> - 반응형 <br> - 상단 메뉴바 <br> -> (About Works Credit) <br>Works 클릭시 works.html로 이동|
|4|works.html|작품에 대한 썸네일 페이지|- 약 69개의 작품이 배치 <br> - Thumbnail Img : image (330px 330px)로 받기 <br> - ~~구글 스프레드 시트에서 데이터 관리~~ <br> - 내부 json 파일을 만들었습니다.|
|5|works/page/detail.html?{number}|4번째 세부 작품 페이지|- 1개의 html 파일에 number index 값을 이용하여 관련된 내용을 받아온다. <br> - 상단 글 네비게이션은 fix <br> - 아래 이미지는 여러장 동영상도 삽입 가능|

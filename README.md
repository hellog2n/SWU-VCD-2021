# 서울여자대학교 시각디자인학과 2021년 졸업전시 웹페이지

## 관리자
- Javascript / html / CSS : 서울여대 장유진
- html / CSS : 서울여대 이주현

## 백업용 임시 스프레드 시트 관리

- 사이트에서 새로고침 다량 발생시 구글 스프레드시트 접속을 블락시키는 현상이 발생함.
- 새로 고침하면 사라지지만 그래도 임시 우회 시트를 하나 생성했어요! 사본 파일에 임시로 내용을 복붙해주세요.
- 구글 스프레드 시트에서 데이터 관리 (https://docs.google.com/spreadsheets/d/1uFbTYJ3_jMkA9FdCntAzzSmx67o-Deey3nm42WkQaKU/edit?usp=sharing)



---
## 페이지 소개
### (1) index.html
동영상이 나오는 인덱스 페이지
- 사이트 자체를 클릭하면 모바일 접속시 intro.html로 이동 / PC 접속시 main.html로 이동

### (2) intro.html
저전력 모드 안내가 나오는 인트로 페이지
- Background Img : GIF (해상도 확인 필요)
- 사이트 자체를 클릭하면 intro.html로 이동

### (3) main.html
메인 페이지
- 네비게이션을 누를 때마다 자동 스크롤
- 그라데이션 원의 꿀렁꿀렁 대고 있음.
- 반응형

- 상단 메뉴바
-> (About Works Credit)
Works 클릭시 works.html로 이동

### (4) works.html
작품에 대한 썸네일 페이지
- 약 82개의 작품이 배치
- Thumbnail Img : image (330px 330px)로 받기
- 구글 스프레드 시트에서 데이터 관리 (https://docs.google.com/spreadsheets/d/1uFbTYJ3_jMkA9FdCntAzzSmx67o-Deey3nm42WkQaKU/edit?usp=sharing)


### (4) works/page/{number}.html
4번째 세부 작품 페이지
- 1개의 html 파일에 number index 값을 이용하여 관련된 내용을 받아온다.
- 상단 글 네비게이션은 fix
- 아래 이미지는 여러장 동영상도 삽입 가능
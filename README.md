# 키워드 모아모아 

## 이 프로젝트의 목적 

* 첫 Html ,css ,js를 사용한 웹사이트 만들기 
* 리액트를 사용하여 서버 구성하기 ( api 생성) 
* post man 으로 생성한 api 테스트 해보기 
* mvc가 어떤 것인지 맛보기 


## 프로젝트 설명 

현대 사회에서 정보력의 싸움은 큰 차이를 만들어낸다. 이러한 정보력을 빠르게 획득하려면 키워드 중심으로 새로운 정보를 얻어야한다.
따라서 연관 키워드를 수집하는 것이 매우중요한데, '키워드 모아모아'는 관심있는 키워드와 관련된 다른 키워드들을 제공한다.
절차는 시스템 구성도를 통해 더 자세히 살펴볼 수 있다. 

## 프로젝트 기술스펙 

* HTML( ejs) 
* CSS 
* MySQL
* AWS RDS 
* js
* Express 
* git

## 프로젝트 구조 

### 시스템 구조 

... 

### 파일 구조 

<pre>
📦app
 ┣ 📂bin
 ┃ ┗ 📜listen.js
 ┣ 📂src
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜db.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜Keyword.js
 ┃ ┃ ┣ 📜KeywordStorage.js
 ┃ ┃ ┣ 📜User.js
 ┃ ┃ ┗ 📜UserStorage.js
 ┃ ┣ 📂public
 ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┗ 📂home
 ┃ ┃ ┃ ┃ ┣ 📜dashboard.css
 ┃ ┃ ┃ ┃ ┣ 📜keyword_home.css
 ┃ ┃ ┃ ┃ ┗ 📜login.css
 ┃ ┃ ┣ 📂image
 ┃ ┃ ┃ ┗ 📜keyword.png
 ┃ ┃ ┣ 📂js
 ┃ ┃ ┃ ┗ 📂home
 ┃ ┃ ┃ ┃ ┣ 📜keyword_home.js
 ┃ ┃ ┃ ┃ ┣ 📜login.js
 ┃ ┃ ┃ ┃ ┗ 📜register.js
 ┃ ┃ ┗ 📜.DS_Store
 ┃ ┣ 📂routes
 ┃ ┃ ┗ 📂home
 ┃ ┃ ┃ ┣ 📜home.ctrl.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂views
 ┃ ┃ ┗ 📂home
 ┃ ┃ ┃ ┣ 📜dashboard.ejs
 ┃ ┃ ┃ ┣ 📜keyword_home.ejs
 ┃ ┃ ┃ ┣ 📜login.ejs
 ┃ ┃ ┃ ┗ 📜register.ejs
 ┣ 📜main.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
</pre>



## 프로젝트 설치 및 확인 

IDE : visual studio code
Node version : 18.14.2
NPM version : 9.5.0

npm 사용을 위해 node 설치가 필요합니다.
https://joyfulhome.tistory.com/180
위 경로를 통해 node 설치를 해주세요.

1. 전체 디렉터리 내 ' app' 디렉터리로 이동합니다.

2. 터미널 창에서 ' npm i '를 입력하여 node_modules를 다운받습니다.

3. 실행을 위해 ' node bin/listen.js ' 터미널 내 입력합니다.

( 서버 실행을 위한 js 파일을 실행하는 과정입니다. )

4. 크롬을 열고 주소창에 'localhost:3004/login ' 을 입력합니다.

5. 로그인 창이 나온다면
id : admin
pw : 1111

을 입력하여 로그인 합니다. ( 테스트 id ) 

6. 메인 화면 내에서 키워드 등록을 하도록 합니다.

7. 키워드 등록이 정상적으로 되는지 확인합니다.

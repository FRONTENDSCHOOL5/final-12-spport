# ⚾ SPPORT ⚽
![KakaoTalk_20230627_200910852](https://github.com/doong2imdang/final-12-spport/assets/124869695/8e053c59-eb66-435f-babe-a3822cf9a873)

## 소개 및 개요
* 프로젝트 기간 : 2023.06.01 ~ 2023.06.30
* 배포 URL : [🔗SPPORT](https://hyeri-woo.github.io/final-12-spport/)
* TestID / PW : only_lions@test.com / only_lions123

## [프로젝트 설명]
* 'SPPORT'은 **스포츠 팬들에게 유용한 정보를 제공하고 사용자가 서로의 일상을 공유하는 SNS 플랫폼**입니다.
* 'SPPORT'이라는 이름은 'SPORTS'와 'SUPPORT'를 합친 것으로 스포츠 팬들이 그동안 불편하게 느꼈을 부분들을 다양한 기능을 통해 편의를 제공하겠다는 의미를 담았습니다. 
* 팀을 팔로우하여 게시물 피드에서 해당 날씨와 경기 일정에 대해서 알 수 있고 팬들끼리의 팔로우를 통해 서로의 게시글을 확인하고, 댓글과 좋아요를 통해 서로 소통할 수 있습니다.             

## 목차
1.[ 팀 소개](#1-팀-소개)  
2.[ 기술 및 개발 환경](#2-기술-및-개발-환경)  
3.[ 주요 기능](#3-주요-기능)  
4.[ 프로젝트 구조](#4-프로젝트-구조)  
5.[ 역할 분담](#5-역할-분담)  
6.[ Flowchart](#6-flowchart)  
7.[ UI](#7-ui)  
8.[ 페이지 기능](#8-페이지-기능)  
9.[ 핵심 기능](#9-핵심-기능)   
10.[ 느낀점](#10-느낀점)


## 1. 팀 소개
✏️ **Dozen 팀을 소개합니다!**

안녕하세요. 저희는 4명의 Front-end 개발자로 구성된 Dozen팀입니다.  
dozen은 연필과 같은 물건의 개수를 나타내는 단위 중 12개 묶음을 의미하는데, 4명이 한 묶음처럼 협력하고 발전하겠다는 의미가 담겨있습니다.  
(멋쟁이사자처럼 프론트엔드 스쿨 5기 프로젝트 12팀입니다.)
|**우혜리**|**김서영**|**신민철**|**이영주** |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="180" alt="hyeri-woo_profile_img" src="https://avatars.githubusercontent.com/u/107099724?v=4"> | <img width="180"  alt="seoyoung-kim_profile_img" src="https://avatars.githubusercontent.com/u/124869695?v=4"> | <img width="180" alt="mincheol.shin_profile_img" src="https://avatars.githubusercontent.com/u/110030523?v=4"> | <img width="180" alt="gbsb227_profile_img" src="https://avatars.githubusercontent.com/u/126536358?v=4" > |
| [hyeri-woo](https://github.com/hyeri-woo) | [seoyoung-kim](https://github.com/doong2imdang) | [mincheol.shin](https://github.com/meenoie) | [gbsb227](https://github.com/gbsb227) |
| 팀장| 문서 정리 | 깃허브 관리 | 마스코트

## 2. 기술 및 개발 환경
### [사용 기술]
* Front-end : <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Styled Components-DB7093?style=for-the-badge&logo=Styled Components&logoColor=white">
* Back-end : 제공된 API 사용

### [개발 환경]
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white">
* GitHub Projects : 진행상황을 page별로 나누어 GitHub Issues에서 각자 맡은 업무를 이슈 템플릿에 체크리스트 형식으로 공유했습니다.
* GitHub Wiki : 컨벤션을 기록하고 페이지 상세설명을 기록하여 공유하였습니다.
* Figma : 동시 접속하여 함께 UI, 색상 디자인 상의를 진행했습니다.
* Discord : 원활한 의사소통을 위해 디스코드에서 영상 및 음성 통화를 적극 활용했습니다.

### [git 흐름 전략]
페이지 별로 기능을 담당하여 프로젝트를 진행하고자 Git Flow 방식 을 사용했습니다. 페이지 별 브랜치를 만들고 각자 작업 브랜치를 따로 생성하여, 페이지 브랜치로 PR 및 Merge를 진행합니다.

### [커밋 컨벤션]
🔗 [커밋 컨벤션](https://github.com/FRONTENDSCHOOL5/final-12-/wiki/%E2%9C%85-Commit-%EC%BB%A8%EB%B2%A4%EC%85%98)
|태그 이름|설명|이모지|
|---------|----|------|
|Initial|시스템 초기 설정|🎉|
|Feat|새로운 기능을 추가할 경우|✨|
|Fix|버그를 고친 경우|🐛|
|Design|CSS 등 사용자 UI 디자인 변경|💄|
|Style|코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우|🎨|
|Refactor|프로덕션 코드 리팩토링|♻️|
|Comment|필요한 주석 추가 및 변경|💬|
|Docs|문서를 수정한 경우|📝|
|Chore|빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)|📦|
|Rename|파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우|🚚|
|Remove|파일을 삭제하는 작업만 수행한 경우|🔥|
|Merge|파일 또는 브랜치 병합할 경우|🔀|
|Dir|폴더 및 문서 구조 변경할 경우 | 📁|
|!BREAKING CHANGE	|커다란 API 변경의 경우|👽|

### [코드 컨벤션]
통일성 있는 코드 작성을 위해 다양한 🔗[코드 컨벤션](https://github.com/FRONTENDSCHOOL5/final-12-/wiki/%E2%9C%85-Code-%EC%BB%A8%EB%B2%A4%EC%85%98) 을 정해 사용했습니다. 
* <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=black">
```
{
    "printWidth": 80,
    "singleQuote": true,
    "jsxSingleQuote": true,
    "tabWidth": 2,
    "semi": true,
    "trailingComma": "all",
    "bracketSpacing": true,
    "arrowParens": "always",
    "quoteProps": "preserve"
}
```
* <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">
```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "prettier/prettier": "warn",
    "react/react-in-jsx-scope": "off",
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-extra-semi": "error",
    "no-tabs": ["error", { "allowIndentationTabs": true }],
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "indent": "off"
  }
}
```
## 3. 주요 기능
### 🔒 로그인 / 회원가입
* 로그인
* 회원가입
* 프로필 설정
* 유효성 검사
* 토큰 검증

### 📎 피드          
* 게시글 업로드
* 무한 스크롤
* 필터링

### 🔍 검색
* 유저/팀 검색


### 🖼 게시글
* 게시글 수정/삭제
* 댓글 게시/삭제
* 게시글/댓글 신고

### 👨🏿‍🤝‍👨🏼프로필
* 로그아웃
* 프로필 수정
* 팔로우/팔로잉 
* 일정 추가
* 선수 리스트       
* 앨범형/리스트형 게시글
* 무한 스크롤 
 
## 4. 프로젝트 구조
[폴더구조]
* api : api들
* assets : 로고 및 이미지들
* atom : 상태 관리
* components : 컴포넌트들
* data : 내장 데이터
* pages : 각 페이지들
* routes : 라우터
* style : 스타일
```
📦 FINAL-12-SPPORT
├─ .env
├─ .eslintignore
├─ .eslintrc.json
├─ .github 
│  ├─ ISSUE_TEMPLATE
│  │  ├─ -basic-issue.md
│  │  ├─ -bug-issue.md
│  │  └─ help-issue.md
│  └─ pull_request_template.md
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  └─ index.html
└─ src
   ├─ App.js
   ├─ index.js
   ├─ api
   │  ├─ AddProductAPI.js
   │  ├─ CommonAPI.js
   │  ├─ FollowAPI.js
   │  ├─ ProfileAPI.js
   │  ├─ SearchAPI.js
   │  ├─ WeatherAPI.js
   │  ├─ GameAPI
   │  │  ├─ AddGameAPI.js
   │  │  ├─ FeedGame.js
   │  │  ├─ LikeGameAPI.js
   │  │  ├─ PostGameAPI.js
   │  │  └─ TeamProfileGameAPI.js
   │  ├─ PostAPI.js
   │  │  ├─ CommentAPI.js
   │  │  └─ PostDetailAPI.js
   ├─ assets
   │  ├─ image
   │  │  └─ 이미지들
   │  └─ logo
   │     └─ text-logo.svg
   ├─ atom
   │  ├─ bottomSheetAtom.jsx
   │  ├─ loginAtom.jsx
   │  └─ modalAtom.jsx
   ├─ components
   │  ├─ Comment
   │  │  ├─ CommentList.jsx
   │  │  ├─ InputComment.jsx
   │  │  └─ ViewComment.jsx
   │  ├─ Common
   │  │  ├─ Empty.jsx
   │  │  ├─ Input.jsx
   │  │  ├─ NavBar.jsx
   │  │  ├─ ProfileImage.jsx
   │  │  ├─ Button
   │  │  │  ├─ Button.js
   │  │  │  ├─ ImageButton.jsx
   │  │  │  ├─ LButton.jsx
   │  │  │  ├─ MButton.jsx
   │  │  │  ├─ MsButton.jsx
   │  │  │  ├─ SButton.jsx
   │  │  │  ├─ SnsButton.jsx
   │  │  │  └─ TagButton.jsx
   │  │  ├─ Filter
   │  │  │  ├─ FeedFilter.jsx
   │  │  │  └─ SelectFilter.jsx
   │  │  ├─ Header
   │  │  │  ├─ Header.jsx
   │  │  │  └─ SearchBox.jsx
   │  │  ├─ Modals
   │  │  │  ├─ BottomSheet.jsx
   │  │  │  └─ Modal.jsx
   │  ├─ Follow
   │  │  ├─ FollowList.jsx
   │  │  ├─ Followers.jsx
   │  │  └─ Followings.jsx
   │  ├─ List
   │  │  ├─ CardGrid.jsx
   │  │  ├─ CardList.jsx
   │  │  ├─ CardListItem.jsx
   │  │  ├─ GameList.jsx
   │  │  ├─ GameListItem.jsx
   │  │  ├─ UserList.jsx
   │  │  └─ UserListItem.jsx
   │  ├─ ModalUtil
   │  │  ├─ CommonBottomSheet.jsx
   │  │  └─ CommonModal.jsx
   │  ├─ Post
   │  │  ├─ BtnGroup.jsx
   │  │  ├─ GamePost.jsx
   │  │  ├─ Post.jsx
   │  │  ├─ PostList.jsx
   │  │  ├─ PostProfile.jsx
   │  │  ├─ RegularPost.jsx
   │  │  └─ WeatherCard.jsx
   │  ├─ Profile
   │  │  ├─ CommonProfile.jsx
   │  │  ├─ FeedHeader.jsx
   │  │  ├─ MyProfile.jsx
   │  │  ├─ ProfleStyle.jsx
   │  │  ├─ TeamProfile.jsx
   │  │  └─ UserProfile.jsx
   │  └─ Skeleton
   │     ├─ CardLoader.jsx
   │     ├─ GameLoader.jsx
   │     ├─ ListLoader.jsx
   │     ├─ PostLoader.jsx
   │     ├─ TeamProfileLoader.jsx
   │     └─ UserProfileLoader.jsx
   ├─ data
   │  ├─ baseball_games.json
   │  ├─ baseball_players.json
   │  └─ sport_bs_users.json
   ├─ pages
   │  ├─ AddGame.jsx
   │  ├─ Chat.jsx
   │  ├─ ChatRoom.jsx
   │  ├─ EditPost.jsx
   │  ├─ EditProfile.jsx
   │  ├─ Error.jsx
   │  ├─ Follow.jsx
   │  ├─ Home.jsx
   │  ├─ Login.jsx
   │  ├─ PlayerList.jsx
   │  ├─ Post.jsx
   │  ├─ Profile.jsx
   │  ├─ Schedule.jsx
   │  ├─ Search.jsx
   │  ├─ Signup.jsx
   │  ├─ Splash.jsx
   │  ├─ Upload.jsx
   │  └─ Welcome.jsx
   ├─ routes
   │  └─ Router.jsx
   └─ style
      └─ GlobalStyles.js
```


## 5. 역할 분담
### 🧑🏻‍💻우혜리
* 역할
	* 팀리더
	* 컨벤션 관리
 	* 피그마 디자인 작업
* UI
 	* 컴포넌트: Header, Filter, BottomSheet
  	* 페이지: 직관일정, 팀 포스트, 404, 검색, 일정 추가
* 기능
	* 댓글 게시/삭제, 좋아요를 통한 일정 추가 , 댓글/게시글 신고하기, 유저검색, 홈피드 필터링, 로그아웃, 무한스크롤, 스켈레톤, Modal


### 🧑🏻‍💻김서영
* 역할
	* 문서 정리	 
* UI
	* 컴포넌트 : Input, Modal 	
	* 페이지: Splash, Login, Signup, 선수리스트, 채팅
* 기능
 	* 유효성 검사, 회원가입, 로그인 화면, 프로필 설정, 프로필 수정, 필터링

### 🧑🏻‍💻이영주
* 역할
	* 마스코트	 
* UI
	* 컴포넌트 : Button, 일반 포스트	
	* 페이지: Upload, EditPost, Home
* 기능
 	* 게시물 작성/수정/삭제, 홈피드 게시글 목록, 이미지 슬라이더
### 🧑🏻‍💻신민철
* 역할
	* 깃허브 관리	 
* UI
	* 컴포넌트 : ProfileImage/NavBar	
	* 페이지: 유저/팀/나의 프로필 페이지, 팔로우/팔로잉 페이지
* 기능
 	* 팔로우, 게시글 앨범형/리스트형
  
## 6. Flowchart
![Spport-main](https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/107099724/cd8277a9-a788-4db5-9cad-7750fda5e176)

## 7. UI
![Frame 7](https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/107099724/25817f9b-7ece-4b4f-b961-01162ce39c69)

## 8. 페이지 기능

### 1) 홈
|Splash|로그인 페이지|회원가입 페이지
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/a72b11a8-f450-4190-ad01-3afc5fdc0418"> |<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/f5771864-2f5a-4098-ba25-6b898a90b792">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/7299251a-209d-4db0-89f8-2c7e0da5b104">|


|홈 페이지|홈 페이지 필터링/좋아요|검색 페이지
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/4391a1e5-4cac-4860-b3c4-4cb385de4608">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/87a24327-49c8-4e06-a82d-9ca5455f7a7b">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/5e67f42a-29ec-432d-acba-cbd1a5397ca5">|

<br/>

### 2) 프로필
|마이 프로필 페이지 게시글|마이 프로필 페이지 일정 추가|유저 프로필 페이지
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/d068fa5a-69fb-4a98-8d9e-f81250256edb">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/6c5ced03-6adc-4b6e-a7e0-4afcbc9f7b3f">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/9f15e462-52cb-4381-aeb0-9b98d56a9b6f">

|팀 프로필 페이지 공 아이콘|팀 프로필 페이지 선수 보러 가기|팀 프로필 페이지 경기일정
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/f86cbb3b-3e58-47ea-99e6-93e57cbecba7">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/74c183bb-87d7-4eab-80ea-7189cf2bc1b5">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/5f2cdffe-ad96-47ec-91ed-aed2158fd381">|

|프로필 수정 페이지|로그아웃
|:-:|:-:|
|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/b4e9540f-55a9-48ce-84d5-ba96ae5222d1">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/0f79f26f-2e75-4007-ba21-58d4fde52b71">|

<br/>

### 3) 게시글
|게시글 작성|게시글 수정|게시글 삭제
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/aad058cb-d0bd-4ecd-9b6e-799168409b0c">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/dc3ec37c-8f73-4acf-a275-5a23bf744237">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/134f8058-ad37-459b-be0f-bf65b6d8d115">|

|게시글 상세 페이지|이미지 슬라이더|게시글 신고
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/89a946f3-356c-4f06-9489-1271ae13ad2b">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/5f509915-3c82-4451-a35a-7b2e39ecc100">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/f8bb8034-966e-477e-a570-a0260fb0b621">|

<br/>

### 4) 댓글
|댓글 작성|댓글 삭제|댓글 신고
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/1b13d436-2741-447c-bd28-78cabc8a353e">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/9074cf18-3154-4bb9-a903-6a13f32313d8">|<img width="390px;" src="https://github.com/doong2imdang/final-12-spport/assets/124869695/2c9d1e04-8c79-4add-9fd8-c6f93b3c46af">|

<br/>

## 9. 핵심 기능

### [일정 추가]
일정 추가 페이지에서 유저가 팔로잉한 팀의 게임 일정을 직관 일정으로 추가할 수 있습니다. 기존에 제공된 API로는 구현이 쉽지 않아 게시물 좋아요 기능과 상품등록 기능 복합적으로 사용해 구현하였습니다. 

해당 기능을 구현하면서 팔로잉된 팀의 일정이 겹치는 경우 여러가지 고려할 사항이 있었습니다. 

1. 일정 추가 페이지에서 중복 게임은 하나만 보여주기 </br>
스포츠 팀을 여러 개 팔로우한 경우 게임 일정이 겹치게 됩니다. 일정 추가 페이지에서 같은 게임 일정을 반복해서 보여주지 않기 위해 같은 일정의 경우 Map으로 묶어 key 값으로는 게임 정보를 저장하고 value 값으로는 해당 게시물들의 ID를 저장했습니다. 그 Map을 다시 순환하면서 중복되더라도 하나만 보일 수 있도록 처리하였습니다.  
```js
const gameMap = new Map();
  game.forEach((item) => {
    if (gameMap.has(item.content)) {
      gameMap.set(item.content, [...gameMap.get(item.content), item.id]);
    } else {
      gameMap.set(item.content, [item.id]);
    }
  });
  ```

2. 추가/취소할 시 중복 게임 전부 좋아요 활성화/취소 </br>
위에서 Map으로 처리하면서 key 값으로는 게임 리스트에 보여주고 value 값을 다시 순환하여 추가할 경우 해당되는 모든 게시물은 좋아요를 활성화시키고 취소할 경우 좋아요를 취소하였습니다. 

3. 추가/취소할 시 직관일정을 추가/취소 </br>
좋아요를 활성화/취소하면서 동시에 상품등록 API를 사용해 해당 게임일정 정보와 해당 게시물 정보들의 ID를 전부 저장해주었습니다. 이후 좋아요 활성화/취소할 경우 상품을 추가/삭제를 해야할 때 저장한 ID를 전부 순환하여 해당 직관일정을 삭제하도록 합니다. 
```js
const likeGameAPI = async (token, ids, isTeam, post, isGame = false) => {
  const returnArr = [];
  if (isTeam) {
    const data = await addProductAPI(token, post, ids, isGame);
  }
  for (const id of ids) {
    const like = await POST_API_NO_BODY(token, `/post/${id}/heart`);
    returnArr.push(like);
  }

  return returnArr;
};
```


### [날씨 API 사용]
![Frame 9](https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/107099724/d2db5ce6-75eb-4305-82f3-b3a88a0d5328)
사용자에게 팔로우한 팀의 경기 날짜에 해당하는 당일 날씨 정보를 제공하기 위해 사용자가 팔로우한 팀의 경기 날짜와 경기장의 장소를 기준으로 OpenWeatherMap API를 호출하였습니다. 그러나 해당 API는 현재 날씨 정보만을 제공하기 때문에, 과거의 경기에 대한 날씨 정보를 가져올 수는 없었습니다. 따라서, 과거 경기의 경우에는 미리 저장한 날씨 정보를 사용했습니다. 이를 위해 현재 날씨을 다른 변수에 저장하여, 과거 경기의 경우 저장된 날씨 정보를 활용했습니다.

```js
const getWeatherAPI = async (city) => {
  const reqUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=kr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  try {
    const response = await fetch(reqUrl);
    if (!response.ok) {
      throw new Error('failed to retrieve weather API');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const getWeather = async (city, post) => {
  const data = await getWeatherAPI(city);
  const weather = await storeWeather(post.author.accountname, post, data);
  return {
    'avg_temp': weather[0],
    'max_temp': weather[1],
    'min_temp': weather[2],
    'humidity': weather[3],
    'description': weather[4],
    'image': weather[5],
  };
};

const storeWeather = async (team_name, post, data) => {
  const roundSecondDecimal = (num) => {
    return Math.round(100 * num) / 100;
  };
  const token = getTeamToken(team_name);
  const weather = [
    roundSecondDecimal(data.main.temp - 270),
    roundSecondDecimal(data.main.temp_max - 270),
    roundSecondDecimal(data.main.temp_min - 270),
    data.main.humidity,
    data.weather[0].description,
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
  ];
  const store = await editGamePostAPI(token, post.id, post.content, weather);
  return weather;
};
```

### [Intersection Observer API을 사용한 무한 스크롤]
스크롤 이벤트가 발생할 때마다 처리하는 것은 불필요하게 과도한 이벤트가 발생하여 성능 저하로 이어질 수 있기 때문에 Intersection Observer API를 사용하여 성능 저하를 방지하고 타겟 요소와 상위 요소 또는 최상위 document의 뷰포트 사이의 교차 영역 변화를 비동기적으로 관찰했습니다.
구체적으로, 리스트 요소의 가장 마지막에 <span> 요소에 ref를 설정하여 해당 요소의 가시성 변화를 감지하고, inView라는 변수의 값을 변경하도록 설정했습니다. inView 값이 true로 변경될 때마다 페이지 값을 증가시켜 화면 끝에 도달할 때마다 추가적인 게시물을 가져오도록 구현했습니다.
```js
...
import { useInView } from 'react-intersection-observer';

export default function PostList({ post, onlyGame, isHome }) {
  const [sortedPost, setSortedPost] = useState([]);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (isHome) {
      setSortedPost(sortFeedPost(post, onlyGame));
      setPage(0);
    } else {
      setSortedPost(post);
    }
  }, [post, onlyGame]);

  useEffect(() => {
    if (inView) {
      isHome ? setPage((prev) => prev + 10) : setPage((prev) => prev + 3);
    }
  }, [inView]);

  return (
    <PostListStyle>
      {sortedPost.map((item, index) => {
        if (index < page) {
          return (
            <li key={item.id}>
              <Post post={item} />
            </li>
          );
        }
      })}
      <span ref={ref} />
    </PostListStyle>
  );
}
```

## 10. 느낀점
⚽ 민철
⚾ 서영
🏀 영주
🏐 혜리




# ⚾ SPPORT ⚽

## 소개 및 개요
* 프로젝트 기간 : 2023.06.01 ~ 2023.06.30
* 배포 URL : 
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
6.[ UI](#6-ui)  
7.[ 페이지 기능](#7-페이지-기능)  
8.[ 핵심 기능](#8-핵심-기능)  
9.[ 느낀점](#9-느낀점)


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
* GitHub Wiki : 회의와 컨벤션을 기록하고 요점노트를 기록하여 공유하였습니다.
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
 	* 게시물 작성/수정/삭제, 홈피드 게시글 목록, 이미지 슬라드
### 🧑🏻‍💻신민철
* 역할
	* 깃허브 관리	 
* UI
	* 컴포넌트 : ProfileImage/NavBar	
	* 페이지: 유저/팀/나의 프로필 페이지, 팔로우/팔로잉 페이지
 * 기능
 	* 팔로우, 게시글 앨범형/리스트형, 
  

## 6. UI

## 7. 페이지 기능

## 8. 핵심 기능

## 9. 느낀점



# ⚾ SPPORT ⚽
![KakaoTalk_20230627_200910852](https://github.com/doong2imdang/final-12-spport/assets/124869695/8e053c59-eb66-435f-babe-a3822cf9a873)

## 소개 및 개요
* 프로젝트 기간 : 2023.06.01 ~ 2023.06.30
* 배포 URL : [🔗SPPORT](https://spport-dozen.netlify.app/)
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


## 1. 팀 소개
✏️ **Dozen 팀을 소개합니다!**

안녕하세요. 저희는 4명의 Front-end 개발자로 구성된 Dozen팀입니다.  
dozen은 연필과 같은 물건의 개수를 나타내는 단위 중 12개 묶음을 의미하는데, 4명이 한 묶음처럼 협력하고 발전하겠다는 의미가 담겨있습니다.  
(멋쟁이사자처럼 프론트엔드 스쿨 5기 프로젝트 12팀입니다.)
|**우혜리**|**김서영**|**신민철**|**이영주** |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="180" alt="hyeri-woo_profile_img" src="https://avatars.githubusercontent.com/u/107099724?v=4"> | <img width="180"  alt="seoyoung-kim_profile_img" src="https://avatars.githubusercontent.com/u/124869695?v=4"> | <img width="180" alt="mincheol.shin_profile_img" src="https://avatars.githubusercontent.com/u/110030523?v=4"> | <img width="180" alt="gbsb227_profile_img" src="https://avatars.githubusercontent.com/u/126536358?v=4" > |
| [hyeri-woo](https://github.com/hyeri-woo) | [seoyoung-kim](https://github.com/doong2imdang) | [mincheol.shin](https://github.com/meenoie) | [gbsb227](https://github.com/gbsb227) |

## 2. 기술 및 개발 환경
<table class="tg">
<tbody>
   <tr>
    <td class="tg-0pky">개발 환경<br></td>
    <td class="tg-0pky">[FrontEnd] React, React-Query, Axios, Recoil, Styled-Components<br>[BackEnd] 제공되는 API 사용 <a href='https://likelion.notion.site/SPPORT-API-b3d01d086262421cb1fae632ce503d34'>🔗 제공된 API </a></td>
  </tr>
  <tr>
    <td class="tg-0pky">버전 및 이슈 관리</td>
    <td class="tg-0pky">Git/GitHub / Notion</td>
  </tr>
  <tr>
    <td class="tg-0pky">컨벤션</td>
    <td class="tg-0pky">Eslint / Prettier / GitHub PR Template</td>
  </tr>
  <tr>
    <td class="tg-0pky">프로젝트 관리</td>
    <td class="tg-0pky">GitHub Pull Requests</td>
  </tr>
  <tr>
    <td class="tg-0pky">커뮤니케이션</td>
    <td class="tg-0pky">Notion / Discord</td>
  </tr>
  <tr>
    <td class="tg-0pky">배포</td>
    <td class="tg-0pky">Netflify</td>
  </tr>
</tbody>
</table>

### [사용한 이유]
<table class="tg">
<tbody>
   <tr>
    <td class="tg-0pky">React Query</td>
    <td class="tg-0pky">비동기 데이터 요청과 관리를 간단하고 효율적으로 처리하기 위해 사용</td>
  </tr>
  <tr>
    <td class="tg-0pky">Axios</td>
    <td class="tg-0pky">HTTP 요청과 응답 처리를 보다 단순하고 직관적으로 처리하기 위해 사용</td>
  </tr>
  <tr>
    <td class="tg-0pky">Recoil</td>
    <td class="tg-0pky">상태 관리를 단순하게 만들고, 성능을 최적화하며, 전역 상태를 효율적으로 관리하고 유지 보수를 더 쉽게 하기 위해 사용</td>
  </tr>
  <tr>
    <td class="tg-0pky">Styled Components</td>
    <td class="tg-0pky">컴포넌트 기반 스타일링을 통해 관리와 재사용을 강화하고, 코드 유지 보수를 간편하게 하며 CSS 클래스 충돌 문제를 회피하기 위해 사용</td>
  </tr>
  <tr>
    <td class="tg-0pky">react-helmet-async</td>
    <td class="tg-0pky">meta 태그와 페이지별 타이틀을 위해 사용</td>
  </tr>
  <tr>
    <td class="tg-0pky">browser-image-compression</td>
    <td class="tg-0pky">이미지 용량을 줄여 로딩속도를 올리기 위해 사용</td>
  </tr>
  <tr>
    <td class="tg-0pky">splide</td>
    <td class="tg-0pky">빠른 캐러셀 구현하기 위해 사용</td>
  </tr>
  <tr>
    <td class="tg-0pky">react-loading-skeleton</td>
    <td class="tg-0pky">스켈레톤 UI를 구현하기 위해 사용</td>
  </tr>
</tbody>
</table>

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
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=black">
```js
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
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">

```js
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
기능 별 자세한 내용은 <a href='https://github.com/FRONTENDSCHOOL5/final-12-spport/wiki/%F0%9F%93%83%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85'>해당 위키</a>를 참고해주세요.
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
```
⚾ final-12-spport
├─ .env ------------------------------------ 🛠️ 환경변수
├─ .eslintignore
├─ .eslintrc.json -------------------------- 🛠️ eslint 설정파일
├─ .github
│  ├─ 📁 ISSUE_TEMPLATE -------------------- 🔖 이슈 템플릿
│  ├─ 📁 workflows      -------------------- 🛠️ GitHub Action 설정파일
│  └─ pull_request_template.md ------------- 🔖 PR 템플릿
├─ .gitignore
├─ .prettierignore
├─ .prettierrc ----------------------------- 🛠️ prettier 설정파일
├─ 📌 README.md
├─ package-lock.json
├─ package.json
├─ 📁 public
│  ├─ _redirects
│  ├─ favicon.ico
│  └─ index.html
└─ 📁 src
   ├─ App.js
   ├─ index.js
   ├─ 📁 api ------------------------------- 🔃 API 관련 폴더
   ├─ 📁 assets ---------------------------- 🗓️ 정적 데이터 모음
   ├─ 📁 atom ------------------------------ ⚛️ Recoil 관련 폴더
   ├─ 📁 components
   │  ├─ 📁 Comment ------------------------ 🧩 댓글 관련 컴포넌트
   │  ├─ 📁 Common ------------------------- 🧩 공통 컴포넌트
   │  ├─ 📁 Follow ------------------------- 🧩 팔로우/팔로잉 관련 컴포넌트
   │  ├─ 📁 List --------------------------- 🧩 리스트 관련 컴포넌트
   │  ├─ 📁 Post --------------------------- 🧩 게시글 관련 컴포넌트
   │  ├─ 📁 Profile ------------------------ 🧩 프로필 관련 컴포넌트
   │  └─ 📁 Skeleton ----------------------- 🧩 스켈레톤 관련 컴포넌트
   ├─ 📁 hooks ----------------------------- 🪝 커스텀 훅 폴더
   ├─ 📁 pages ----------------------------- ⚛️ 페이지 폴더
   ├─ 📁 routes ---------------------------- 🧭 라우터 설정 폴더
   ├─ 📁 style ----------------------------- 💄 스타일 설정 폴더
   └─ 📁 util ------------------------------ 📜 필요한 함수 폴더
```


## 5. 역할 분담
자세한 내용은 <a href='https://github.com/FRONTENDSCHOOL5/final-12-spport/wiki/%F0%9F%A7%91%E2%80%8D%F0%9F%A4%9D%E2%80%8D%F0%9F%A7%91-%EC%97%AD%ED%95%A0-%EB%B6%84%EB%8B%B4'>🔗 해당 위키</a>에서 확인해주세요.
![역할](https://github.com/hyeri-woo/final-12-spport/assets/107099724/a463d745-fa08-4c73-ac1a-70cf9baccf44)
  
## 6. Flowchart
![Spport-main](https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/107099724/cd8277a9-a788-4db5-9cad-7750fda5e176)

## 7. UI
### Mobile
![UI mobile](https://github.com/hyeri-woo/final-12-spport/assets/107099724/8686731a-627b-4751-90f3-65592dda2468)
### Tablet
![UI tablet](https://github.com/hyeri-woo/final-12-spport/assets/107099724/8008faf7-d1a6-4d6c-b80e-d0bfbc096e10)
### Desktop
![UI desktop](https://github.com/hyeri-woo/final-12-spport/assets/107099724/39d59a71-dc41-4644-afe2-e4abea34a8b6)

## 8. 페이지 기능

### 1) 홈
|Splash|로그인 페이지|회원가입 페이지
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/a13519c2-9afc-4f03-8af2-70e4c0a10d6a"> |<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/28c8562f-5d0c-4604-a2a1-2ef8f8626b76">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/95363af0-f437-45ef-a995-eac90f6f86be">|


|홈 페이지|홈 페이지 필터링|검색 페이지
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/3fa499ce-2230-470b-9146-1086cbbb272b">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/d3043118-083e-46b8-8687-8f14b99151fd">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/878b65a2-1f72-41af-94ae-7038f997648c">|

<br/>

### 2) 프로필
|마이 프로필 페이지|마이 프로필 페이지 일정 추가|유저 프로필 페이지
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/e48de823-4323-4ec6-93e5-bca02804eb6f">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/a9d90180-31bb-4fd6-a007-1eb96124d951">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/586bfb24-9352-4c06-814c-7fc3b24eeb14">

|팀 프로필 페이지 공 아이콘|팀 프로필 페이지 선수 보러 가기|팀 프로필 페이지 경기일정
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/bd8f1265-75bd-493a-ae48-a39a56612b5a">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/20a3750d-664b-4ec3-80a4-e4e149cf9254">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/4077cfe2-9946-4611-ba55-a67999e36787">|

|태그 검색|프로필 수정 페이지|로그아웃
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/054f299a-711a-4659-ad7a-a61ba71e8185">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/3a2feed9-ee26-4634-8c89-ccceca98e96b">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/6d4c27f6-6319-4ddb-8296-a7177b7881ae">|

<br/>

### 3) 게시글
|게시글 작성|게시글 수정|게시글 삭제
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/91b32881-95f4-404b-b376-8ba12ffec175">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/91a6e400-4774-49e8-88a1-65af9fe29216">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/6b27f4b7-55d6-4e37-9a29-45597d13e2b7">|

|게시글 상세 페이지|이미지 슬라이더|게시글 신고
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/4cd6a5b2-2284-45ab-b705-9dc6325b257f">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/aa277151-4091-41eb-874e-6865ce2b6765">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/24c83c75-19ee-4a99-bbca-4cdf6070f63f">|

<br/>

### 4) 댓글
|댓글 작성|댓글 삭제|댓글 신고
|:-:|:-:|:-:|
|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/ec0b666a-bc93-4fa5-aee6-f1f17a51105e">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/11d58afe-3e5a-48c6-acb8-4b4042099aea">|<img width="390px;" src="https://github.com/FRONTENDSCHOOL5/final-12-spport/assets/110030523/1768bf79-b740-487e-b3d1-3d38ce517536">|

<br/>

## 9. 핵심 기능
- Server-side 데이터 **상태 관리**를 위해 **React Query**를 사용한 **커스텀 훅**을 도입
	- useQuery 관련 [참고 링크1](https://velog.io/@woohyeri0525/React-Query-Custom-Hook-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-useQuery-%ED%8E%B8)
 	- useMutation 관련 [참고 링크2](https://velog.io/@woohyeri0525/React-Query-Custom-Hook-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-useMutation-%ED%8E%B8)
- **Intersection Observer API**와 **useInfiniteQuery**를 사용한 비동기적 **무한 스크롤링** (업데이트 예정)
- **axios Interceptors**를 활용하여 요청과 응답의 전후 처리와 **중복된 로직 방지**를 통해 효율적인 네트워크 요청 관리 ([참고 링크](https://velog.io/@woohyeri0525/axios-%EB%AA%A8%EB%93%88%ED%99%94-%EB%B0%8F-%EC%9D%BC%EA%B4%84-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81-useNavigate-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B2%95))



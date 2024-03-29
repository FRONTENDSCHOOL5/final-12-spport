import React from 'react';
import GlobalStyles from './style/GlobalStyles';
import Router from './routes/Router';
import BottomSheet from './components/Common/Modals/BottomSheet';
import Modal from './components/Common/Modals/Modal';
import { Helmet } from 'react-helmet-async';
import NavBar from './components/Common/NavBar';
import useModal from './hooks/useModal';
import useBottomSheet from './hooks/useBottomSheet';
import { useLocation } from 'react-router-dom';

function App() {
  const { isModalOpen } = useModal();
  const { isBsOpen } = useBottomSheet();
  const location = useLocation().pathname.split('/')[1];
  const navBar = [
    'home',
    'upload',
    'addgame',
    'editpost',
    'editprofile',
    'profile',
    'follower',
    'following',
    'player',
    'search',
    'post',
    'schedule',
    'tag',
  ];

  return (
    <>
      <Helmet>
        <title>Spport</title>
        <meta
          name='keywords'
          content='스포츠, 야구, 배구, 농구, 축구, 직관, 일상, SNS'
        />
        <meta
          name='description'
          content='스포츠 팬들에게 유용한 정보를 제공하고 사용자가 서로의 일상을 공유하는 SNS 플랫폼'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, user-scalable=no'
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Spport' />
        <meta property='og:title' content='Spport' />
        <meta
          property='og:description'
          content='스포츠 팬들에게 유용한 정보를 제공하고 사용자가 서로의 일상을 공유하는 SNS 플랫폼'
        />
        <meta property='og:url' content='https://spport-dozen.netlify.app/' />
        <meta
          property='og:image'
          content='https://api.mandarin.weniv.co.kr/1692257980322.png'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <meta property='twitter:card' content='summary' />
        <meta property='twitter:title' content='Spport' />
        <meta
          property='twitter:description'
          content='스포츠 팬들에게 유용한 정보를 제공하고 사용자가 서로의 일상을 공유하는 SNS 플랫폼'
        />
        <meta
          property='twitter:image'
          content='https://api.mandarin.weniv.co.kr/1692257980322.png'
        />
        <meta
          property='twitter:url'
          content='https://spport-dozen.netlify.app/'
        />
      </Helmet>
      <GlobalStyles />
      <Router />
      {navBar.includes(location) && <NavBar />}
      {isModalOpen && <Modal />}
      {isBsOpen && <BottomSheet />}
    </>
  );
}

export default App;

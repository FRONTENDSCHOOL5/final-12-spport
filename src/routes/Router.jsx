import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Upload from '../pages/Upload';
import AddGame from '../pages/AddGame';
import Chat from '../pages/Chat';
import ChatRoom from '../pages/ChatRoom';
import EditProfile from '../pages/EditProfile';
import Error from '../pages/Error';
import Follow from '../pages/Follow';
import Post from '../pages/Post';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Splash from '../pages/Splash';
import EditPost from '../pages/EditPost';
import PlayerList from '../pages/PlayerList';
import Schedule from '../pages/Schedule';
import { useRecoilState } from 'recoil';
import { loginState } from '../atom/loginAtom';

export default function Router() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  return (
    <Routes>
      <Route path='/' element={<Splash />} />
      {isLogin ? (
        <>
          <Route path='/welcome' element={<Navigate to='/home' />} />
          <Route path='/login' element={<Navigate to='/home' />} />
          <Route path='/signup' element={<Navigate to='/home' />} />
        </>
      ) : (
        <>
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </>
      )}
      <Route path='/home' element={<Home />} />
      <Route path='/upload' element={<Upload />} />
      <Route path='/addgame' element={<AddGame />} />
      <Route path='/error' element={<Error />} />
      <Route path='/editpost' element={<EditPost />} />
      <Route path='/editprofile' element={<EditProfile />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/profile/:id/*' element={<Outlet />}>
        <Route path='' element={<Profile />} />
        <Route path='follower' element={<Follow />} />
        <Route path='following' element={<Follow />} />
        <Route path='player' element={<PlayerList />} />
      </Route>
      <Route path='/chat/:id' element={<ChatRoom />} />
      <Route path='/search' element={<Search />} />
      <Route path='/search/:keyword' element={<Search />} />
      <Route path='/post/:id' element={<Post />} />
      <Route path='/schedule/:id' element={<Schedule />} />
      <Route path='/*' element={<Error />} />
      <Route path='/error' element={<Error />} />
    </Routes>
  );
}

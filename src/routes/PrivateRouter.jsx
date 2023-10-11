import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PrivateRouter({ authentication }) {
  const { isLogin } = useAuth();
  // 인증이 반드시 필요한 페이지 (welcome, splash, signin, signup 제외한 모든 페이지)
  if (authentication) {
    // 로그인 했을 경우 todo 페이지로, 안했을 경우 welcome 페이지로
    return isLogin ? <Outlet /> : <Navigate to='/welcome' />;
  } else {
    // 로그인 했을 경우 todo 페이지로, 안했을 경우 각자 페이지로
    return isLogin ? <Navigate to='/home' /> : <Outlet />;
  }
}

import {
  userToken,
  loginState,
  accountname,
  userimage,
  username,
  intro,
} from '../atom/loginAtom';
import { useRecoilState } from 'recoil';

export default function useAuth() {
  const [token, setToken] = useRecoilState(userToken);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [accountName, setAccountName] = useRecoilState(accountname);
  const [userImage, setUserImage] = useRecoilState(userimage);
  const [userName, setUserName] = useRecoilState(username);
  const [introduction, setIntroduction] = useRecoilState(intro);

  const setUserInfo = ({
    token: token,
    isLogin: isLogin,
    accountname: accountname,
    userimage: userimage,
    username: username,
    intro: intro,
  }) => {
    if (token) {
      setToken(token);
    }
    if (isLogin) {
      setIsLogin(isLogin);
    }
    if (accountname) {
      setAccountName(accountname);
    }
    if (userimage) {
      setUserImage(userimage);
    }
    if (username) {
      setUserName(username);
    }
    if (intro) {
      setIntroduction(intro);
    }
  };

  const logoutUser = () => {
    setToken('');
    setIsLogin(false);
    setAccountName('');
    setUserImage('');
    setUserName('');
    setIntroduction('');
  };

  return {
    token: token,
    isLogin: isLogin,
    accountname: accountName,
    userimage: userImage,
    username: userName,
    intro: introduction,
    setUserInfo: setUserInfo,
    logoutUser: logoutUser,
  };
}

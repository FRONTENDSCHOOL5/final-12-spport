import { isBottomSheetOpen, bottomSheetItems } from '../atom/bottomSheetAtom';
import {
  userToken,
  loginState,
  accountname,
  userimage,
} from '../atom/loginAtom';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import useModal from './useModal';

export default function useBottomSheet() {
  const [isBsOpen, setIsBsOpen] = useRecoilState(isBottomSheetOpen);
  const [bsItem, setBsItem] = useRecoilState(bottomSheetItems);
  const [token, setToken] = useRecoilState(userToken);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [accountName, setAccountName] = useRecoilState(accountname);
  const [userImage, setUserImage] = useRecoilState(userimage);

  const { functionModal } = useModal();

  const navigate = useNavigate();

  const openBottomSheet = () => {
    setIsBsOpen(true);
  };

  const closeBottomSheet = () => {
    setIsBsOpen(false);
  };

  const updateBottomSheet = (items) => {
    setBsItem(items);
  };

  const logout = () => {
    setIsBsOpen((prev) => !prev);
    const onInfoClick = () => {
      alert('info');
      setIsBsOpen(false);
    };
    const resetLogin = () => {
      setToken('');
      setIsLogin(false);
      setAccountName('');
      setUserImage('');
    };
    const onLogout = () => {
      setIsBsOpen(false);
      const logout = async () => {
        await resetLogin();
        navigate('/welcome');
      };
      functionModal(
        '로그아웃하시겠어요?',
        '로그아웃',
        '로그아웃되었습니다.',
        '확인',
        logout,
      );
    };
    const loginbsItem = [
      ['설정 및 개인정보', onInfoClick],
      ['로그아웃', onLogout],
    ];
    setBsItem(loginbsItem);
  };

  return {
    isBsOpen: isBsOpen,
    bsItem: bsItem,
    openBottomSheet: openBottomSheet,
    closeBottomSheet: closeBottomSheet,
    updateBottomSheet: updateBottomSheet,
    logout: logout,
  };
}

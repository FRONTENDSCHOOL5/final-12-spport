import { isBottomSheetOpen, bottomSheetItems } from '../atom/bottomSheetAtom';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import useModal from './useModal';
import useAuth from './useAuth';

export default function useBottomSheet() {
  const [isBsOpen, setIsBsOpen] = useRecoilState(isBottomSheetOpen);
  const [bsItem, setBsItem] = useRecoilState(bottomSheetItems);
  const { functionModal } = useModal();
  const { logoutUser } = useAuth();

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
    const onLogout = () => {
      setIsBsOpen(false);
      const logout = async () => {
        console.log('hello');
        await logoutUser();
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

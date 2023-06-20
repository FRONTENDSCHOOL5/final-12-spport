import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userToken = atom({
  key: 'userToken',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const loginState = atom({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const accountname = atom({
  key: 'accountname',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const userimage = atom({
  key: 'userimage',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

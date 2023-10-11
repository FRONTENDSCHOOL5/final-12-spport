import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isBottomSheetOpen = atom({
  key: 'isBottomSheetOpen',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const bottomSheetItems = atom({
  key: 'bottomSheetItems',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

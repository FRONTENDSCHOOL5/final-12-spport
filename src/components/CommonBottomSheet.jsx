import React from 'react';
import BottomSheet from './Common/BottomSheet';
import { useRecoilState } from 'recoil';
import { bottomSheetItems } from '../atom/bottomSheetAtom';

export default function CommonBottomSheet() {
  const [bsItem, setBsItems] = useRecoilState(bottomSheetItems);
  return (
    <>
      <BottomSheet items={bsItem} />
    </>
  );
}

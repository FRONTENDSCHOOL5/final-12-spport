import React from 'react';
import Modal from '../Common/Modals/Modal';
import { useRecoilState } from 'recoil';
import { modalItems } from '../../atom/modalAtom';

export default function CommonModal() {
  const [modalItem, setModalItem] = useRecoilState(modalItems);
  return <Modal items={modalItem} />;
}

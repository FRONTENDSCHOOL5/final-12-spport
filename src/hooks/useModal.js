import { isModalOpen, modalItems } from '../atom/modalAtom';
import { useRecoilState } from 'recoil';

export default function useModal() {
  const [isModal, setIsModal] = useRecoilState(isModalOpen);
  const [modalItem, setModalItem] = useRecoilState(modalItems);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const updateModal = (items) => {
    setModalItem(items);
  };

  const functionModal = (
    title1,
    confirm1,
    title2,
    confirm2,
    func,
    confirmFunc = null,
  ) => {
    setIsModal(true);
    setModalItem([
      title1,
      confirm1,
      async () => {
        await func();
        setIsModal(true);
        setModalItem([
          title2,
          confirm2,
          async () => {
            if (confirmFunc !== null) {
              await confirmFunc();
            }
          },
        ]);
      },
    ]);
  };

  return {
    isModalOpen: isModal,
    modalItem: modalItem,
    openModal: openModal,
    closeModal: closeModal,
    updateModal: updateModal,
    functionModal: functionModal,
  };
}

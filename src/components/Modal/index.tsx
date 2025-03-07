import React from 'react';
import * as S from './styles';
import { useModal } from './useModal';

type ModalProps = {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
};

const Modal = ({ status, setStatus, children }: ModalProps): JSX.Element => {
  const { handleModal } = useModal();
  return (
    <>
      {status && (
        <S.Div onClick={e => handleModal(e, setStatus)} className="modal on">
          <S.Layer className="modal" />
          {children}
        </S.Div>
      )}
    </>
  );
};

export { Modal };

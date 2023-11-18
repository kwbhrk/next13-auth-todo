'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as style from './style';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const modalRoot = typeof document !== 'undefined' && document?.querySelector('#modal');

  if (!modalRoot) return null;

  const handleClickCloseModal = () => closeModal();

  const modalElement = (
    <div className={style.modalClass}>
      <div className={style.modalContentClass}>
        <button
          type="button"
          className={style.modalCloseButtonClass}
          onClick={handleClickCloseModal}
        >
          ×
        </button>
        {children}
      </div>
      <div onClick={handleClickCloseModal} />
      <div className={style.modalOverlayClass} onClick={handleClickCloseModal} />
    </div>
  );

  return mounted && isOpen ? createPortal(modalElement, modalRoot) : null;
};

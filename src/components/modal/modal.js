import styles from "./modal.module.css";
import { useRef, useEffect } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { createPortal } from "react-dom";
import React from "react";

export const modalRoot = document.getElementById("react-modals");

const Modal = ({ onClose, children }) => {
  const modalContainer = useRef(null);

  const close = () => {
    onClose();
  };

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        close();
      }
    };

    const handleOverlayClose = (evt) => {
      if (!modalContainer.current.contains(evt.target)) {
        close();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleOverlayClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  }, []);

  return createPortal(
    <ModalOverlay>
      <div ref={modalContainer} className={styles.modal}>
        <button
          onClick={close}
          className={styles.btn_close}
          type="button"
        ></button>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;

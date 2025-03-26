import React from "react";
import styles from "./Modal.module.css"; // Подключаем CSS-модуль

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles["modal-overlay"]} onClick={onClose}>
      <div
        className={styles["modal-content"]}
        onClick={(e) => e.stopPropagation()} // Не закрываем при клике внутри окна
      >
        <button className={styles["modal-close"]} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;


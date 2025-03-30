import React from "react";
import styles from "./Account.module.css";

const Account = ({ user, onLogout, onClose }) => {
  return (
    <div className={styles.accountPage}>
      {/* Кнопка крестик для закрытия личного кабинета */}
      <button
        className={styles.accountCloseButton}
        onClick={onClose} // Закрытие личного кабинета
      >
        ×
      </button>

      <h1>Welcome, {user.username || user.email}!</h1>
      <p>This is your personal account page.</p>
    </div>
  );
};

export default Account;





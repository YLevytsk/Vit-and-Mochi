import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import styles from "./AuthModal.module.css";

const AuthModal = ({ onClose, onLogin }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchMode = () => setIsLoginMode(!isLoginMode);

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <button onClick={onClose} className={styles["close-button"]}>×</button>
        
        {isLoginMode ? (
          <LoginForm onSwitchMode={switchMode} onLogin={onLogin} />
        ) : (
          <RegisterForm onSwitchMode={switchMode} onLogin={onLogin} />
        )}
      </div>
    </div>
  );
};

export default AuthModal;

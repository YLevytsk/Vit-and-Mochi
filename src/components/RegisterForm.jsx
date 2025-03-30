import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./RegisterForm.module.css";

// Схема валидации с помощью Yup
const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const RegisterForm = ({ onSwitchMode, onLogin }) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (values, actions) => {
    const { confirmPassword, ...userData } = values;

    // Сохраняем в общий список пользователей
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    // Сохраняем текущего пользователя (автоматический вход)
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("accessToken", "mock-access-token");

    onLogin(userData, "mock-access-token"); // 👈 Вызов входа

    actions.resetForm();
    setSuccess(true);
  };

  if (success) {
    return (
      <div className={styles["register-success"]}>
        <h2>🎉 Registration Successful!</h2>
        <p>You are now logged in.</p>
      </div>
    );
  }

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles["register-form"]} autoComplete="on" method="post">
          <h2 className={styles["form-title"]}>Create Account</h2>

          <Field
            type="text"
            name="username"
            placeholder="Username"
            className={styles["form-input"]}
            autoComplete="username"
          />
          <ErrorMessage name="username" component="div" className={styles["error"]} />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={styles["form-input"]}
            autoComplete="email"
          />
          <ErrorMessage name="email" component="div" className={styles["error"]} />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={styles["form-input"]}
            autoComplete="new-password"
          />
          <ErrorMessage name="password" component="div" className={styles["error"]} />

          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className={styles["form-input"]}
            autoComplete="new-password"
          />
          <ErrorMessage name="confirmPassword" component="div" className={styles["error"]} />

          <button type="submit" className={styles["submit-button"]}>
            Register
          </button>

          <p className={styles["switch-text"]}>
            Already have an account?{" "}
            <span className={styles["switch-link"]} onClick={onSwitchMode}>
              Sign in
            </span>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;








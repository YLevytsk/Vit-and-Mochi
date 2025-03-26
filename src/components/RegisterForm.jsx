import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./RegisterForm.module.css";

// Схема валидации через Yup
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

const RegisterForm = ({ onSwitchMode }) => {
  const handleSubmit = (values, actions) => {
    console.log("Registration submitted:", values);

    // Удаляем confirmPassword перед сохранением
    const { confirmPassword, ...userData } = values;

    // Получаем список пользователей
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Добавляем нового
    users.push(userData);

    // Сохраняем обратно
    localStorage.setItem("users", JSON.stringify(users));

    // Очищаем форму
    actions.resetForm();
  };

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
        <Form className={styles["register-form"]}>
          <h2 className={styles["form-title"]}>Create Account</h2>

          <Field
            type="text"
            name="username"
            placeholder="Username"
            className={styles["form-input"]}
          />
          <ErrorMessage name="username" component="div" className={styles["error"]} />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={styles["form-input"]}
          />
          <ErrorMessage name="email" component="div" className={styles["error"]} />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={styles["form-input"]}
          />
          <ErrorMessage name="password" component="div" className={styles["error"]} />

          <Field
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className={styles["form-input"]}
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




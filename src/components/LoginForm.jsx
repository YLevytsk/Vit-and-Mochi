import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ onSwitchMode, onLogin }) => {
  const [error, setError] = useState("");

  const handleSubmit = (values, actions) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      u => u.email === values.email && u.password === values.password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", "mock-access-token");
      onLogin(user, "mock-access-token");
      actions.resetForm();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles["login-form"]} autoComplete="on">
          <h2 className={styles["form-title"]}>Sign In</h2>

          {error && <div className={styles["error"]}>{error}</div>}

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
            autoComplete="current-password"
          />
          <ErrorMessage name="password" component="div" className={styles["error"]} />

          <button type="submit" className={styles["submit-button"]}>
            Log In
          </button>

          <p className={styles["switch-text"]}>
            Don`t have an account?{" "}
            <span className={styles["switch-link"]} onClick={onSwitchMode}>
              Sign up
            </span>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;







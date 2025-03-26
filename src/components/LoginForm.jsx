import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  login: Yup.string().required("Login is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = ({ onSwitchMode }) => {
  const handleSubmit = (values, actions) => {
    console.log("Login data:", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles["login-form"]}>
          <h2 className={styles["form-title"]}>Sign In</h2>

          <Field
            type="text"
            name="login"
            placeholder="Username or Email"
            className={styles["form-input"]}
          />
          <ErrorMessage
            name="login"
            component="div"
            className={styles["error"]}
          />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={styles["form-input"]}
          />
          <ErrorMessage
            name="password"
            component="div"
            className={styles["error"]}
          />

          <button type="submit" className={styles["submit-button"]}>
            Login
          </button>

          <p className={styles["switch-text"]}>
            Don't have an account?{" "}
            <span className={styles["switch-link"]} onClick={onSwitchMode}>
              Register here
            </span>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;




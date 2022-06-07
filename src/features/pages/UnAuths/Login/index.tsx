import { BaseButton } from "@atoms";
import React from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "@helpers";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const login = () => {
    setAccessToken("true");
    navigate("/users");
  };
  return (
    <>
      <div className={styles.wrapper}>Login page</div>
      <BaseButton onClick={login}>Login</BaseButton>
    </>
  );
};
export default Login;

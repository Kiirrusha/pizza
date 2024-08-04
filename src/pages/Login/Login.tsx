import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { PREFIX } from "../../helpers/API";
import { LoginResponse } from "../../interfaces/auth.intarface";

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};
export const Login = () => {
  const [error, setError] = useState<string | null>();
  const navigate = useNavigate();
  const sumbit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
        email,
        password,
      });
      console.log(data);
      localStorage.setItem("jwt", data.access_token);
      navigate("/");
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message);
      }
    }
  };

  return (
    <div className={styles.login} onSubmit={sumbit}>
      <h2 className={styles.title}>Вход</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" placeholder="Email"></Input>
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Ваш пароль</label>
          <Input id="password" type="password" placeholder="Пароль"></Input>
        </div>
        <Button variant="big">Вход</Button>
      </form>
      <div className={styles.links}>
        <div>Нет аккаунта?</div>
        <Link to="/auth/registartion">Зарегестрироваться</Link>
      </div>
    </div>
  );
};
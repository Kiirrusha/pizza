import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AppDispatch, RootState } from "../../store/store";
import { login, userActions } from "../../store/user.slice";
import styles from "./Login.module.css";

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);
  const sumbit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userActions.clearLoginError());
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  return (
    <div className={styles.login} onSubmit={sumbit}>
      <h2 className={styles.title}>Вход</h2>
      {loginErrorMessage && (
        <div className={styles.error}>{loginErrorMessage}</div>
      )}
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

import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AppDispatch, RootState } from "../../store/store";
import { register, userActions } from "../../store/user.slice";
import styles from "./Register.module.css";

export type RegisterForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
  name: {
    value: string;
  };
};
export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, registerErrorMessage } = useSelector((s: RootState) => s.user);

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);
  const sumbit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userActions.clearRegisterError());
    const target = e.target as typeof e.target & RegisterForm;
    const { email, password, name } = target;
    sendRegister(email.value, password.value, name.value);
  };

  const sendRegister = async (
    email: string,
    password: string,
    name: string
  ) => {
    dispatch(register({ email, password, name }));
  };

  return (
    <div className={styles.login} onSubmit={sumbit}>
      <h2 className={styles.title}>Регистрация</h2>
      {registerErrorMessage && (
        <div className={styles.error}>{registerErrorMessage}</div>
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
        <div className={styles.field}>
          <label htmlFor="name">Ваще имя</label>
          <Input id="name" placeholder="Имя"></Input>
        </div>
        <Button variant="big">Зарегестрироваться</Button>
      </form>
      <div className={styles.links}>
        <div>Есть аккаунт?</div>
        <Link to="/auth/login">Войти</Link>
      </div>
    </div>
  );
};

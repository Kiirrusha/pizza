import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { AppDispatch, RootState } from "../../store/store";
import { getUserName, userActions } from "../../store/user.slice";
import styles from "./SideBar.module.css";
import { useEffect } from "react";
export const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { name, email } = useSelector((state: RootState) => state.user);
  const items = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    dispatch(getUserName());
  }, []);

  const logOut = () => {
    dispatch(userActions.logout());
    navigate("/auth/login");
  };
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.user}>
          <img src="/icons8-avatar-80.png" className={styles.avatar} />
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.email}>{email}</p>
        </div>
        <div className={styles.menu}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${styles.link} ${isActive && styles.active}`
            }
          >
            <img src="/icons8-menu.svg" className={styles.icons} />
            Menu
          </NavLink>
          <NavLink
            to={"/Cart"}
            className={({ isActive }) =>
              `${styles.link} ${isActive && styles.active}`
            }
          >
            <img src="/icons8-cart-50.png" className={styles.icons} />
            Корзина{" "}
            <span className={styles.cartCount}>
              {items.reduce((acc, item) => (acc += item.count), 0)}
            </span>
          </NavLink>
        </div>
        <Button className={styles.exit} variant="small" onClick={logOut}>
          <img src="/icons8-close-64.png" className={styles.iconExit} />
          Выход
        </Button>
      </div>
    </div>
  );
};

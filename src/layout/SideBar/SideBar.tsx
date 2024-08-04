import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./SideBar.module.css";
export const SideBar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("jwt");
    navigate("/auth/login");
  };
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.user}>
          <img src="/icons8-avatar-80.png" className={styles.avatar} />
          <h2 className={styles.name}>Кирилл Руденков</h2>
          <p className={styles.email}>k.rudenkov@mail.ru</p>
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
            Корзина
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

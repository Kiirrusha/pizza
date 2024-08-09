import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import styles from "./CartItem.module.css";
import { CartItemProps } from "./CartItem.props";
import Plus from "@icons/plusIcon.svg?react";
import Minus from "@icons/minus.svg?react";
import Remove from "@icons/close.svg?react";
import { cartActions } from "../../store/cart.slice";
export const CartItem = (props: CartItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const increase = () => {
    dispatch(cartActions.add(props.id));
  };

  const descrease = () => {
    dispatch(cartActions.remove(props.id));
  };

  const remove = () => {
    dispatch(cartActions.delete(props.id));
  };

  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{ backgroundImage: `URL('${props.image}')` }}
      ></div>
      <div className={styles.description}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.price}> {props.price}&nbsp;₽</div>
      </div>
      <div className={styles.actions}>
        <button className={styles.minus} onClick={descrease}>
          <Minus className={styles.minusIcon} />
        </button>
        <div className={styles.number}>{props.count}</div>
        <button className={styles.plus} onClick={increase}>
          <Plus className={styles.plusIcon} />
        </button>
        <button className={styles.remove} onClick={remove}>
          <Remove className={styles.removeIcon} />
        </button>
      </div>
    </div>
  );
};

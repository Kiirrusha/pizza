import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";
export const ProductCard = (props: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const add = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(cartActions.add(props.id));
    console.log("123");
  };

  return (
    <Link to={`/product/${props.id}`} className={styles.link}>
      <div className={styles.card}>
        <div
          className={styles.head}
          style={{ backgroundImage: `URL('${props.img}')` }}
        >
          <div className={styles.price}>
            {props.price}&nbsp;
            <span className={styles.currency}>₽</span>
          </div>
          <button className={styles.addToCard} onClick={add}>
            <img
              src="/food_delivery_bag_icon_179645.svg"
              className={styles.cartImg}
            />
          </button>
          <div className={styles.rating}>
            {props.rating}
            <img src="/star_icon.svg" className={styles.star} />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.title}>{props.name}</div>
          <div className={styles.description}>{props.ingredients}</div>
        </div>
      </div>
    </Link>
  );
};

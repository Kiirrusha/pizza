import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { CartItem } from "../../components/CartItem/CartItem";
import { IProduct } from "../../interfaces/product.intarfaces";
import { useEffect, useState } from "react";
import { PREFIX } from "../../helpers/API";
import styles from "./Cart.module.css";
import axios from "axios";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cart.slice";

const DELIVERY_FEE = 169;

export const Cart = () => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>();
  const items = useSelector((s: RootState) => s.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const jwt = useSelector((s: RootState) => s.user.jwt);
  const navigate = useNavigate();

  const total = items
    .map((i) => {
      const product = cartProducts?.find((p) => p.id === i.id);
      if (!product) {
        return 0;
      }
      return i.count * product.price;
    })
    .reduce((acc, i) => (acc += i), 0);

  const getItem = async (id: number) => {
    const { data } = await axios.get(`${PREFIX}/products/${id}`);
    return data;
  };

  const loadAllItems = async () => {
    const res = await Promise.all(items.map((i) => getItem(i.id)));
    setCartProducts(res);
  };

  const checkout = async () => {
    const { dada } = await axios.post(
      `${PREFIX}/order`,
      {
        products: items,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    dispatch(cartActions.clean());
    navigate(`/success`);
  };

  useEffect(() => {
    loadAllItems();
  }, [items]);

  return (
    <>
      <h2 className={styles.headling}>Корзина</h2>
      {items.map((i) => {
        const product = cartProducts?.find((p) => p.id === i.id);
        if (!product) {
          return;
        }
        return <CartItem key={i.id} count={i.count} {...product} />;
      })}
      <div className={styles.line}>
        <div className={styles.text}>Итог</div>
        <div className={styles.price}>
          {total}&nbsp; <span>₽</span>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.line}>
        <div className={styles.text}>Доставка</div>
        <div className={styles.price}>
          {DELIVERY_FEE}&nbsp;
          <span>₽</span>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.line}>
        <div className={styles.text}>
          Итог <span className={styles.totalCount}>({items.length})</span>
        </div>
        <div className={styles.price}>
          {total + DELIVERY_FEE}&nbsp;
          <span>₽</span>
        </div>
      </div>
      <div className={styles.checkout}>
        <Button variant="big" onClick={checkout}>
          ОФОРМИТЬ
        </Button>
      </div>
    </>
  );
};

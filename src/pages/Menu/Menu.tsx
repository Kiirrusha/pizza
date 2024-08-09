import axios, { AxiosError } from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Search } from "../../components/Search/Search";
import { PREFIX } from "../../helpers/API";
import { IProduct } from "../../interfaces/product.intarfaces";
import styles from "./Menu.module.css";
import { MenuList } from "./MenuList/MenuList";
import { SkeletonMenuList } from "./SkeletonMenuList/SkeletonMenuList";

export const Menu = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [filter, setFilter] = useState<string>();

  useEffect(() => {
    getMenu(filter);
  }, [filter]);
  const getMenu = async (name?: string) => {
    try {
      setIsLoading(true);
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
      const { data } = await axios.get<IProduct[]>(`${PREFIX}/products`, {
        params: {
          name,
        },
      });
      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      setIsLoading(false);
    }
  };

  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>Меню</h2>
        <Search
          placeholder="Введите блюдо или состав"
          onChange={updateFilter}
        />
      </div>
      <div className={styles.wrapper}>
        {!isLoading && products.length > 0 && <MenuList products={products} />}
        {isLoading && <SkeletonMenuList />}
        {error && <>{error}</>}
        {!isLoading && products.length === 0 && (
          <>Не найдено блюдо по запросу</>
        )}
      </div>
    </>
  );
};

export default Menu;

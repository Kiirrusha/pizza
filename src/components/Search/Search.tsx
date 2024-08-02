import { forwardRef } from "react";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ isValid = true, ...props }, ref) => {
    return (
      <div className={styles.SearchWrapper}>
        <img src="icons8-поиск.svg" className={styles.imgSearch} />
        <input
          ref={ref}
          className={`${styles.input} ${isValid && styles.valid}`}
          {...props}
        />
      </div>
    );
  }
);

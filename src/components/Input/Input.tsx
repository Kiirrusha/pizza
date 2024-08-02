import { forwardRef } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isValid = true, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          className={`${styles.input} ${isValid && styles.valid}`}
          {...props}
        />
      </>
    );
  }
);

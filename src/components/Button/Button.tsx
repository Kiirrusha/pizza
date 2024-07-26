import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button = ({ children, ...props }: ButtonProps) => {
  const { variant } = props;
  return (
    <button
      className={`${variant === "big" ? styles.bigButton : styles.smallButton} 
      ${styles.accent} ${styles.button}`}
      {...props}
    >
      {children}
    </button>
  );
};

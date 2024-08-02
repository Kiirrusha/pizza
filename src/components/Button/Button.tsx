import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button = ({ children, className, ...props }: ButtonProps) => {
  const { variant } = props;
  // const buttonClassNames = [
  //   variant === "big" ? styles.bigButton : styles.smallButton,
  //   styles.accent,
  //   styles.button,
  //   className,
  // ].join(" ");

  return (
    <button
      className={`${variant === "big" ? styles.bigButton : styles.smallButton}
      ${styles.accent} ${styles.button} ${className}`}
      // className={buttonClassNames}
      {...props}
    >
      {children}
    </button>
  );
};

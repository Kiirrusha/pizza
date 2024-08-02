import styles from "./SkeletonCard.module.css";

export const SkeletonCard = () => {
  return (
    <div className={`${styles.skeletonCard} ${styles.skeletonAnimate}`}>
      <div className={styles.skeletonImage}></div>
      <div className={`${styles.skeletonText} ${styles.skeletonTitle}`}></div>
      <div
        className={`${styles.skeletonText} ${styles.skeletonDescription}`}
      ></div>
    </div>
  );
};

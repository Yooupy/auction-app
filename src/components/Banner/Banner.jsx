import React from "react";
import bannerImage from "../../assets/banner.jpg";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={bannerImage} alt="Banner" className={styles.image} />
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Auction AEH</h1>
        <p className={styles.subtitle}>Find the best deals on our platform</p>
      </div>
    </div>
  );
};

export default Banner;

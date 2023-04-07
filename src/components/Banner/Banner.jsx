import React from "react";
import bannerImage1 from "../../assets/banner1.jpg";
import bannerImage2 from "../../assets/banner2.jpg";
import bannerImage3 from "../../assets/banner3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        style={{ width: "90%", margin: "0 auto" }}
      >
        <div>
          <img
            src={bannerImage1}
            alt="Banner 1"
            className={styles.image}
            style={{ height: "400px" }}
          />
          <div className={styles.content}>
            <h1 className={styles.title}>Welcome to Auction AEH</h1>
            <p className={styles.subtitle}>
              Find the best deals on our platform
            </p>
          </div>
        </div>
        <div>
          <img
            src={bannerImage2}
            alt="Banner 2"
            className={styles.image}
            style={{ height: "400px" }}
          />
          <div className={styles.content}>
            <h1 className={styles.title}>New deals every day</h1>
            <p className={styles.subtitle}>
              Bid on your favorite items and win
            </p>
          </div>
        </div>
        <div>
          <img
            src={bannerImage3}
            alt="Banner 3"
            className={styles.image}
            style={{ height: "400px" }}
          />
          <div className={styles.content}>
            <h1 className={styles.title}>Sell your items</h1>
            <p className={styles.subtitle}>
              Start selling and reach millions of customers
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

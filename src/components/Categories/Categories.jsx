import React from "react";
import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Categories</h2>
      <ul className={styles.list}>
        <li>
          <a href="#" className={styles.link}>
            Top
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Popular
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            New
          </a>
        </li>
        <li>
          <a href="#" className={styles.link}>
            Finishes Soon
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;

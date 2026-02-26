import React from "react";
import styles from "./Image.module.css";

const Image = ({ title, url, onClick, type }) => {
  return (
    <a onClick={onClick}>
      <img
        src={url}
        alt={title}
        className={type === "selected" ? styles.selected : styles.gallery}
      />
    </a>
  );
};

export default Image;

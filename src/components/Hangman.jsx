import React, { useState } from "react";
import styles from "./hangman.module.css";
import img0 from "../assets/images/0.jpg";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";

const imgs = [img0, img1, img2, img3, img4, img5, img6];

export default function Hangman() {
  const [images, setImages] = useState(imgs);
  return (
    <div className={styles.hangman}>
      <img src={images[0]} />
    </div>
  );
}

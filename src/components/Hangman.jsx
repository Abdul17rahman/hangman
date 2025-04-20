import React, { useState } from "react";
import styles from "./hangman.module.css";
import img0 from "../assets/images/0.jpg";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import Keyboard from "./Keyboard";
import { useGame } from "../context/GameProvider";

const imgs = [img0, img1, img2, img3, img4, img5, img6];

export default function Hangman() {
  const [images, setImages] = useState(imgs);

  const { state } = useGame();

  const { guess, guessed } = state;

  console.log(guessed);

  return (
    <div className={styles.hangman}>
      <h3>Level</h3>
      <div className="top">
        <h4>Score : 0</h4>
        <h4>Lives ❤️ 5</h4>
      </div>
      <img src={images[0]} />

      <p>
        {guess.split("").map((ltr) => (guessed.includes(ltr) ? ltr : " _ "))}
      </p>

      <Keyboard />

      <button>Restart</button>
    </div>
  );
}

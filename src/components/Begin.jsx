import React from "react";
import { useGame } from "../context/GameProvider";
import styles from "./begin.module.css";

export default function Begin() {
  const { dispatch } = useGame();

  function handleLevel(e) {
    dispatch({ type: "setLevel", payload: e.target.value });
  }
  return (
    <div className={styles.begin}>
      <p>Welcome to hangman game. You either win or get hanged.</p>

      <div className={styles.instructions}>
        <h4>Instructions:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          provident ea placeat debitis, obcaecati rem nam earum culpa maiores
          dolore sequi hic ad. Nisi, officia eligendi, debitis, repudiandae unde
          temporibus dolorem voluptas voluptates adipisci eius dolore dolor aut
          facilis nostrum.
        </p>

        <h5>
          Note: This game uses your browser's storage. If you switch, clear
          history or cache, game data will be lost.
        </h5>
      </div>

      <label htmlFor="level">Select Your difficult level.</label>
      <select name="level" id="level" onChange={(e) => handleLevel(e)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button>Start</button>
    </div>
  );
}

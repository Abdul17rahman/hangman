import { useGame } from "../context/GameProvider";
import styles from "./keyboard.module.css";

export default function Keyboard() {
  const { dispatch } = useGame();

  function handleGuess(ltr) {
    dispatch({ type: "setGuessed", payload: ltr });
  }

  function generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        // value={ltr}
        onClick={() => handleGuess(ltr)}
        // disabled={this.state.guessed.has(ltr)}
        key={ltr}
      >
        {ltr}
      </button>
    ));
  }
  return (
    <div className={styles.btndiv}>
      <p className={`${styles.keyboard} ${styles.keyboardBtn}`}>
        {generateButtons()}
      </p>
    </div>
  );
}

import styles from "./keyboard.module.css";

export default function Keyboard() {
  function generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        // value={ltr}
        // onClick={this.handleGuess}
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

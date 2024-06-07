import styles from "./Display.module.css";

function Display({ displayValue }) {
  return (
    <>
      <input
        id={styles.display}
        type="text"
        value={displayValue}
        readOnly
      ></input>
    </>
  );
}
export default Display;

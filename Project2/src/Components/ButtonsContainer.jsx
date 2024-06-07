import styles from "./ButtonsContainer.module.css";
import Buttons from "./Buttons";
function ButtonsContainer({ onButtonClick }) {
  return (
    <>
      <div className={styles.buttonsContainer}>
        <Buttons onButtonClick={onButtonClick}></Buttons>
      </div>
    </>
  );
}
export default ButtonsContainer;

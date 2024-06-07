import styles from "./App.module.css";
import { useState } from "react";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
function App() {
  let [calVal, setCalVal] = useState("");
  let onButtonClick = (item) => {
    if (item === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else if (item === "C") {
      setCalVal("");
    } else {
      let newVal = calVal + item;
      setCalVal(newVal);
    }
  };
  return (
    <>
      <div id={styles.body}>
        <div id={styles.calculator}>
          <Display displayValue={calVal}></Display>
          <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
        </div>
      </div>
    </>
  );
}
export default App;

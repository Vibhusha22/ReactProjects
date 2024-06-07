import styles from "./AppInput.module.css";
import { useRef } from "react";
import { TodoItemsContext } from "../Store/ContextProvider";
import { useContext } from "react";
import { MdOutlineAddCircle } from "react-icons/md";

function AppInput() {
  const { onAddClick } = useContext(TodoItemsContext);
  const workItem = useRef();
  const dateItem = useRef();

  const handleAddClick = (e) => {
    e.preventDefault();
    onAddClick(workItem.current.value, dateItem.current.value);
    workItem.current.value = "";
    dateItem.current.value = "";
  };

  return (
    <div className="container">
      <form onSubmit={handleAddClick} className="row row-content" id={workItem}>
        <div className="col">
          <input
            className={styles.input}
            type="text"
            placeholder="Enter TODO Here"
            ref={workItem}
          ></input>
        </div>
        <div className="col-md-auto">
          <input className={styles.input} type="date" ref={dateItem}></input>
        </div>
        <div className="col col-lg-2">
          <button type="submit" className="btn btn-success Button">
            <MdOutlineAddCircle style={{ color: "black" }} />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AppInput;

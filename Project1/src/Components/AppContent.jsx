import styles from "./AppContent.module.css";
import { TodoItemsContext } from "../Store/ContextProvider";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";

function AppContent({ itemFood, itemDate }) {
  const { onDeleteClick } = useContext(TodoItemsContext);
  return (
    <>
      <div className="container">
        <div
          className="row row-content"
          style={{ padding: "8px", fontWeight: "bold" }}
        >
          <div className="col">{itemFood}</div>
          <div className={`${styles.itemsConatiner} col-md-auto`}>
            {itemDate}
          </div>
          <div className="col col-lg-2">
            <button
              type="button"
              className="btn btn-danger Button"
              onClick={() => {
                onDeleteClick(itemFood);
              }}
            >
              <MdDelete style={{ color: "black" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AppContent;

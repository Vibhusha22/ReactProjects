import { TodoItemsContext } from "../Store/ContextProvider";
import { useContext } from "react";

function DefaultMessage() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p style={{ fontWeight: "bold", color: "grey" }}>Add Items!</p>
    )
  );
}

export default DefaultMessage;

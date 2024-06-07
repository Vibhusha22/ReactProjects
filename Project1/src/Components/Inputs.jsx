import AppContent from "./AppContent";
import { TodoItemsContext } from "../Store/ContextProvider";
import { useContext } from "react";

function Inputs() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.map((item) => (
        <AppContent
          itemFood={item.name}
          itemDate={item.dueDate}
          key={item.name}
        />
      ))}
    </>
  );
}

export default Inputs;

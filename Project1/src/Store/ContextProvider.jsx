import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext([]);

const todoReducer = (todoItems, action) => {
  let NewItems = todoItems;
  if (action.type === "NEW_ITEM") {
    NewItems = [
      ...todoItems,
      { name: action.payload.itemFood, dueDate: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    NewItems = todoItems.filter(
      (item) => item.name !== action.payload.itemFood
    );
  }
  return NewItems;
};

const TodoItemsContextProvider = ({ children }) => {
  let initialtodoItems = [
    {
      name: "Go to Gym",
      dueDate: "31/7/2024",
    },
    {
      name: "Give Contest",
      dueDate: "31/7/2024",
    },
    {
      name: "OOPs",
      dueDate: "31/7/2024",
    },
    {
      name: "React",
      dueDate: "10/7/24",
    },
  ];
  const [todoItems, Dispatch] = useReducer(todoReducer, initialtodoItems);
  let onAddClick = (itemFood, itemDate) => {
    let NewDispatch = {
      type: "NEW_ITEM",
      payload: {
        itemFood,
        itemDate,
      },
    };
    return Dispatch(NewDispatch);
  };

  let onDeleteClick = (itemFood) => {
    let NewDispatch = {
      type: "DELETE_ITEM",
      payload: {
        itemFood,
      },
    };
    return Dispatch(NewDispatch);
  };
  return (
    <>
      <TodoItemsContext.Provider
        value={{ todoItems, onAddClick, onDeleteClick }}
      >
        {children}
      </TodoItemsContext.Provider>
    </>
  );
};

export default TodoItemsContextProvider;

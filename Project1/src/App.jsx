import AppHeading from "./Components/AppHeading";
import AppInput from "./Components/AppInput";
import Inputs from "./Components/Inputs";
import DefaultMessage from "./Components/DefaultMessage";
import "./App.css";
import TodoItemsContextProvider from "./Store/ContextProvider";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="bodyContent">
        <AppHeading />
        <div className="items-container">
          <AppInput />
          <DefaultMessage />
          <Inputs />
        </div>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;

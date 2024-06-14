import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counterObj = useSelector((store) => store.counter);
  const counter = counterObj.counterVal;
  //or const {counter} = useSelector((store) => store.counter);

  return <p className="lead mb-4">Counter current Value: {counter}</p>;
};

export default DisplayCounter;

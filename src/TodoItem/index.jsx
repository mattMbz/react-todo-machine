import { useState } from "react";
import { TodoItemUI } from "./TodoItemUI";

const TodoItem = (props) => {
  const [localPrice, setlocalPrice] = useState(props.price);
  const [warning, setWarning] = useState(false);

  const sendPrice = () => {
    localPrice > 0
      ? props.onComplete(localPrice, props.text) & setWarning(false)
      : setWarning(true);
  };

  return (
    <TodoItemUI
      onDelete={props.onDelete}
      sendPrice={sendPrice}
      setlocalPrice={setlocalPrice}
      completed={props.completed}
      price={props.price}
      warning={warning}
      text={props.text}
    />
  );
};

export { TodoItem };

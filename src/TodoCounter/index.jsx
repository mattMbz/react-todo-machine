import React from "react";
import { TodoContext } from "../TodoContext";


const TodoCounter = () => {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);

  return (
    <h1 className="ml-2 sm:text-lg lg:text-4xl font-ubuntu">
      Has comprado {completedTodos} de {totalTodos} productos
    </h1>
  );
};

export { TodoCounter };

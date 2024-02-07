import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./hooks/useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [todos, todoFunctions] = useLocalStorage("TODO_MACHINE", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.items.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.items.length;

  const searchedTodos = todos.items.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos.items];
    newTodos.push({
      completed: false,
      id: uuidv4().split('-')[0],
      price: 0.00,
      text: text
    });
    todoFunctions.saveTodo(newTodos);
  }

  const completeTodo = (price, text) => {
    if (price == 0) {
      alert(`Falta el precio en el producto ${text}`);
    } else {
      let floatPrice = parseFloat(price);
      const newTodos = [...todos.items];
      const todoIndex = newTodos.findIndex((todo) => todo.text == text);
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      newTodos[todoIndex].price = floatPrice;
      todoFunctions.saveTodo(newTodos);
      newTodos[todoIndex].completed
        ? todoFunctions.saveTotal(todos.total + floatPrice)
        : todoFunctions.saveTotal(todos.total - floatPrice);
    }
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos.items];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed
      && todoFunctions.saveTotal(todos.total - newTodos[todoIndex].price) ;
    newTodos.splice(todoIndex, 1);
    todoFunctions.saveTodo(newTodos);
  };


  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        completeTodo,
        deleteTodo,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        todos,
        todoFunctions,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

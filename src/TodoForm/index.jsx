import React from "react";
import { TodoContext } from "../TodoContext";


const TodoForm = () => {
  const {setOpenModal, addTodo} = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const handleInvalid = (event) => {
    event.target.setCustomValidity('Debe introducir un producto.');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <form className="p-6 border-4 border-blue-500" onSubmit={onSubmit}>
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Agregar un nuevo producto
        </label>
        <textarea
          required
          spellCheck="false"
          placeholder="Ingrese un producto"
          maxLength="56"
          className="w-full h-24 px-3 py-2 mb-4 text-base placeholder-gray-500 
          border rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-blue-200
          text-black"
          value={newTodoValue}
          onChange={onChange}
          onInvalid={handleInvalid}
        ></textarea>
        <div className="flex justify-between">
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 
            focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 
            focus:outline-none"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
          >
            Añadir <span>+</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export { TodoForm };

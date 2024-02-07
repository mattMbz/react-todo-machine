import React from "react";

const EmptyTodos = () => {
  return (
    <section className="flex flex-col p-4 border-gray-200 bg-gray-100 mt-3 rounded">
      <p className="text-sm font-normal text-gray-900">
        🚨 Todavía no se han agregado productos. Para cargar un producto
        presione el botón "
        <strong
          className="
          mr-1
          ml-1 
          rounded-full 
          border 
          border-green-600 
          bg-green-600 
          text-white 
          pl-[2px] pr-[2px]"
        >
          +
        </strong>
        " ubicado a la izquierda del panel inferior.
      </p>
    </section>
  );
};

export { EmptyTodos };

import React from "react";
import "./TodosLoading.css";

const TodosLoading = () => {
  return (
    <section className="text-center mt-48">
      <span className="flex justify-center items-center mb-4">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </span>
      <span className="text-blue-800">Cargando...</span>
    </section>
  );
};

export { TodosLoading };

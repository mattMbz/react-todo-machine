import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { BottomPanel } from "../BottomPanel";
import { TotalPanel } from "../BottomPanel/TotalPanel";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../BottomPanel/CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { NotFounded } from "../NotFounded";

const AppUI = () => {
  return (
    <div className="container mx-auto mt-5 mb-20">
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({
          todos,
          totalTodos,
          todoFunctions,
          completeTodo,
          deleteTodo,
          searchedTodos,
          openModal,
          setOpenModal,
        }) => (
          <TodoList loading={todoFunctions.loading}>
            <ul
              className={`flex flex-wrap ${
                todoFunctions.loading && "justify-center"
              }`}
            >
              {todoFunctions.loading && <TodosLoading />}
              {todos.error && <TodosError />}
              
              {!todoFunctions.loading && (
               <>
                 {(searchedTodos.length === 0 && totalTodos > 0) && (<NotFounded />)}
                 {totalTodos === 0 && <EmptyTodos />}
               </>
             )}

              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  text={todo.text}
                  price={todo.price}
                  completed={todo.completed}
                  onComplete={completeTodo}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </ul>

            {openModal && (
              <Modal>
                <TodoForm />
              </Modal>
            )}

            <BottomPanel>
              <TotalPanel />
              <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            </BottomPanel>
          </TodoList>
        )}
      </TodoContext.Consumer>
    </div>
  );
};

export { AppUI };

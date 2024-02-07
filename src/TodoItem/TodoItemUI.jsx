import React from "react";
import { Icon } from "../Icons";

const TodoItemUI = ({
  onDelete,
  sendPrice,
  setlocalPrice,
  completed,
  price,
  warning,
  text,
}) => {
  return (
    <li
      className="
        border border-gray-300
        hover:shadow-md
        mt-5
        w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 bg-yellow-200
      "
    >
      <section className="">
        <div className="cursor-default flex justify-end">
          <span onClick={onDelete} className="hover:bg-yellow-300 rounded-md">
            <Icon type={"trash"} />
          </span>
        </div>
      </section>

      <hr />

      <section className="flex items-center mb-5">
        <span
          className="text-3xl mr-1 cursor-pointer hover:bg-yellow-100 rounded-sm"
          onClick={sendPrice}
        >
          <Icon type={"check"} color={`${completed ? "#597E52" : "#E0CCBE"}`} />
        </span>
        <span className={`text-xl md:text-sm ${completed && "line-through"}`}>
          {text}
        </span>
      </section>

      <span className="text-xl md:text-sm">
        $R
        <input
          className="w-20 p-1 bg-yellow-100 border border-yellow-400 rounded-md"
          type="number"
          maxLength={5}
          onChange={(event) => setlocalPrice(event.target.value)}
          placeholder={completed ? price : 0}
          disabled={completed}
        />
        <span className="text-red-600 ml-2">
          {`${!!warning ? "Ingrese el precio!" : ""}`}
        </span>
      </span>
    </li>
  );
};

export { TodoItemUI };

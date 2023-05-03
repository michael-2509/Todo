import React, { ChangeEventHandler, useState } from "react";

const Input = () => {
  const [todo, setTodo] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const setTodoChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      {" "}
      <input
        type="text"
        placeholder="Create a new todo..."
        className="m-auto block w-full rounded-md bg-Very-Dark-Desaturated-Blue px-4 py-3 text-white outline-none"
        value={todo}
        onChange={setTodoChangeHandler}
      />
    </form>
  );
};

export default Input;

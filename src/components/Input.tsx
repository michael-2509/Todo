import React, { ChangeEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { Configuration, OpenAIApi } from "openai";

import { InputAction } from "../store/input-slice";

interface choiceType {
  text: string;
  index: number;
  logprobs: any; // or a more specific type if you know it
  finish_reason: string;
}

interface responseType {
  choices: choiceType[];
}

const Input = ({ response }: { response: responseType }) => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  // console.log(JSON.stringify(response));

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodo("");
    // console.log(`type: ${typeof response}`);
    const newItem = { id: Date.now().toString(), title: todo };
    dispatch(InputAction.submitHandler(newItem));
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

export const getServerside = async () => {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_API_KEY",
        },
        body: JSON.stringify({
          prompt: "create a todo for a birthday in the next 3 hours",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const choices = data.choices;

    return {
      props: { response: choices },
    };
  } catch (error) {
    console.error("Error during API request:", error);
    return {
      props: { data: [] }, // Return an empty array or a fallback value in case of error
    };
  }
};

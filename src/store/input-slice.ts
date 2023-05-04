import { createSlice } from "@reduxjs/toolkit";

interface TodoItem {
  id: number;
  title: string;
}

interface SubmitAction {
  type: string;
  payload: any;
}

const InputSlice = createSlice({
  name: "input",
  initialState: { todoData: [] as TodoItem[] },
  reducers: {
    submitHandler(state, action: SubmitAction) {
      const newItem = action.payload;
      state.todoData.push(newItem);
      console.log(newItem);
      console.log(state.todoData.slice());
    },

    changeHandler(state) {
      // event.target.value
    },
  },
});

export type { TodoItem };
export const InputAction = InputSlice.actions;
export default InputSlice;

import { createSlice } from "@reduxjs/toolkit";

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

interface SubmitAction {
  type: string;
  payload: any;
}

const InputSlice = createSlice({
  name: "input",
  initialState: { todoData: [] as TodoItem[], filter: "all" as string },
  reducers: {
    submitHandler(state, action: SubmitAction) {
      const newItem = action.payload;
      state.todoData.push(newItem);
      // console.log(state.todoData.slice());
    },

    removeHandler(state, action) {
      const id = action.payload;
      const existingIndex = state.todoData.findIndex((item) => item.id === id);
      if (existingIndex >= 0) {
        state.todoData.splice(existingIndex, 1);
      }
    },

    toggleCompleteHandler(state, action: SubmitAction) {
      const id = action.payload;
      const existingItem = state.todoData.find((item) => item.id === id);
      if (existingItem) {
        existingItem.completed = !existingItem.completed;
      }
    },

    clearCompletedHandler(state) {
      state.todoData = state.todoData.filter((item) => !item.completed);
    },

    setFilterType(state, action: SubmitAction) {
      state.filter = action.payload;
    },
    //to reorder the states
    reorderHandler(state, action) {
      // Get the drag index and hover index from the action payload
      const { dragIndex, hoverIndex } = action.payload;
      // Get the dragged item and the hovered item from the state.todoData array
      const draggedItem = state.todoData[dragIndex];
      const hoveredItem = state.todoData[hoverIndex];
      // Swap their positions in the state.todoData array
      state.todoData[dragIndex] = hoveredItem;
      state.todoData[hoverIndex] = draggedItem;
      console.log("for reordering Handler");
    },
  },
});

export type { TodoItem };
export const InputAction = InputSlice.actions;
export default InputSlice;

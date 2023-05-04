import { configureStore } from "@reduxjs/toolkit";
import InputSlice, { TodoItem } from "./input-slice";

// come back later to make this work --
// interface RootState {
//   todo: TodoItem[];
// }

const Store = configureStore({ reducer: { inputReducer: InputSlice.reducer } });

export default Store;

//another way to export the state that matches my actual state
export type RootState = ReturnType<typeof Store.getState>;

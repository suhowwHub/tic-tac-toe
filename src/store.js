import { configureStore as createStore } from "@reduxjs/toolkit";
import { gameReducer } from "./reducer";

export default createStore({ reducer: gameReducer })

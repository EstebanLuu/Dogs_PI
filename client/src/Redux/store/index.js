import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/index";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const globalState = localStorage.getItem("GLOBAL_STATE");
const initialState = globalState ? JSON.parse(globalState) : undefined;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export const saveState = () => {
  const state = store.getState();
  localStorage.setItem("GLOBAL_STATE", JSON.stringify(state));
};

export default store;

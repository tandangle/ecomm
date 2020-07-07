import { createStore } from "redux";
import reducer from "./reducers";

export default createStore(reducer,
    typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

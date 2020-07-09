import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

// Membuat store agar dapat dilakukan connect nantinya pada component react
const store = createStore(reducer, applyMiddleware(thunk));
export default store;

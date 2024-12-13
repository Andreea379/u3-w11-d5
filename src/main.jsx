import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { mainReducer } from "./redux/store/index.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider mainReducer={mainReducer}>
    <App />
  </Provider>
);

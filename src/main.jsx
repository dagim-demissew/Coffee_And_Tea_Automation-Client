import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>
);

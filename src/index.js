import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/Authentication-context";
import { UserCartContextProvider } from "./store/UserCart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserCartContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </UserCartContextProvider>
);

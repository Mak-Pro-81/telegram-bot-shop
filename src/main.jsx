import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import { theme } from "./theme/index.js";
import { AppContextProvider } from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <ConfigProvider theme={theme}>
        <App />
      </ConfigProvider>
    </AppContextProvider>
  </React.StrictMode>
);

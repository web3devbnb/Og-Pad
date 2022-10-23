import React from "react";
import ReactDOM from "react-dom";
import "./fonts/stylesheet.css";
import "./scss/style.scss";
import App from "./App";
import { MoralisProvider } from "react-moralis";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MoralisProvider
        serverUrl="https://37hd7gawgjzk.usemoralis.com:2053/server"
        appId="pUdxv3fP3DCzGfmI3F1wcesHk0rF1k3ZPe9OejRt"
      >
        <App />
      </MoralisProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

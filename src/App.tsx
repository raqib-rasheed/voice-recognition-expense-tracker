import React from "react";

import Chart from "./components/chart/Chart";

import "./App.css";
import UsersArea from "./components/Main/UsersArea";
import { Provider } from "./context/Context";

function App() {
  return (
    <Provider>
      <div className="wrapper">
        <Chart title="income" />
        <UsersArea />
        <Chart title="expense" />
      </div>
    </Provider>
  );
}

export default App;

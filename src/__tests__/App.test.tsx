import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../App";

jest.mock("react-chartjs-2", () => ({
  Doughnut: () => null,
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

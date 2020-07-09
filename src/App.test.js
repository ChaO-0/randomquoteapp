import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { QuoteContent } from "./components/SimpleCard/QuoteContent";
import { QuoteButtons } from "./components/SimpleCard/QuoteButtons";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);
it("Renders without crashing", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
});

it("Renders copyright correctly", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("footer").textContent).toBe("Copyright©ChaO");
});

it("Matches snapshot", () => {
  const tree = renderer.create(<QuoteContent />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Matches button snapshot", () => {
  const tree = renderer.create(<QuoteButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});

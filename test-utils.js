// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// Import your own reducer
import rootReducer from "./redux/reducers/index";
import thunk from "redux-thunk";

function render(
  ui,
  {
    initialState,
    store = createStore(rootReducer, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };

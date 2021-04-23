import { shallow } from "enzyme";
import MyApp from "./pages/_app";
import { render, fireEvent, screen } from "./test-utils";

describe("<MyApp/>", () => {
  describe("App renders without crashing", () => {
    const component = render(<MyApp />);
    test("by matching snapshot", () => {
      expect(component).toMatchSnapshot();
    });
  });
});

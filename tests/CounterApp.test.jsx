import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

const initialValue = 100;
describe("Testing <CounterApp/> component", () => {
  test("should match the snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });
  test("should start the counter from val 100", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe("100");
  });
  test("should increment the counter +1", () => {
    render(<CounterApp value={initialValue} />);
    const plusBtn = screen.getByRole("button", { name: "btn-plus" });
    fireEvent.click(plusBtn); // Se usa fireEvent() para accionar eventos como "click"
    expect(screen.getByText("101")).toBeTruthy();
  });
  test("should decrement the counter -1", () => {
    render(<CounterApp value={initialValue} />);
    const minusBtn = screen.getByRole("button", { name: "btn-minus" });
    fireEvent.click(minusBtn);
    expect(screen.getByText("99")).toBeTruthy();
  });
  test("should reset the counter back to zero", () => {
    render(<CounterApp value={initialValue} />);
    const resetBtn = screen.getByRole("button", { name: "btn-reset" }); // The name attr will be the aria-label defined in the JSX
    const plusBtn = screen.getByRole("button", { name: "btn-plus" });
    fireEvent.click(plusBtn);
    fireEvent.click(plusBtn);
    fireEvent.click(plusBtn);
    fireEvent.click(resetBtn);
    expect(screen.getByText(100)).toBeTruthy();
  });
});

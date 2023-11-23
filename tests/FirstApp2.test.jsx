import { render, screen } from "@testing-library/react"; // import screen
import { FirstApp } from "../src/FirstApp";
describe("Pruebas en FirstApp component", () => {
  const title = "Home Screen";
  const subTitle = "Subtitle";
  test("should match the snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
  test('should display the message "Home Screen"', () => {
    render(<FirstApp title={title} />); // Se puede usar reder() para renderizar el componente
    expect(screen.getByText(title)).toBeTruthy(); // Se puede usar screen para buscar elementos en el DOM
  });
  test("should show the title in an h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });
  test("should show the subtitle sent by props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});

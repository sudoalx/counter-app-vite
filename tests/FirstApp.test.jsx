import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";
describe("Pruebas en FirstApp component", () => {
  // Mientras estemos desarrollando no es recomenado hacer la prueba del snapshot
  // test("should match the snapshot", () => {
  //   const title = "Welcome Screen";
  //   const { container } = render(<FirstApp title={title} />); //Container obtiene el DOM completo del snapshot

  //   expect(container).toMatchSnapshot();
  // });

  test("should show the title in an h1", () => {
    // Debemos hacer nuestras pruebas flexibles y menos estrictas
    const title = "Welcome Screen";
    const subTitle = "Hey there";
    const { getAllByText, getByTestId } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );
    expect(getAllByText(subTitle).length).toBe(2); // Definir cuantas veces puede estar el subtitle
  });
});

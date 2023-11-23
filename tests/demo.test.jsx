describe("Pruebas en <DemoComponent/>", () => {
  test("Esta prueba no debe fallar", () => {
    // 1. Inicialización
    const message = "Hola Mundo";
    // 2. Estímulo
    const message2 = message.trim();
    // 3. Observar el comportamiento
    expect(message).toBe(message2);
    expect(message).toBe(message2);
  });
});

# Pruebas unitarias y de integración

## Que se verá en esta sección

- Introducción a las pruebas
- AAA
  - Arrange - Arreglar
  - Act - Actuar
  - Assert - Afirmar
- Primeras pruebas
- Jest
- Expect
- toBe
- Enzyme
- Comandos útiles en la terminal para pruebas
- Revisar elementos renderizados en el componente
- Simular eventos

Esta sección de pruebas es muy importante porque dará la base de las pruebas que se harán durante el curso. Las pruebas irán creciendo en complejidad, por lo que se deben comprender bien todos estos conceptos para que sean más fáciles las siguientes secciones de pruebas.

### Notas

- Se usará Jest como framework de pruebas.
- En este proyecto las pruebas se harán en la carpeta `src/tests/base-pruebas/` [Ir a la carpeta]('../../tests/base-pruebas/')
- Se harán pruebas unitarias para funciones en JavaScript y pruebas de integración para componentes de React.
- En la carpeta `src/tests/base-pruebas/` haremos un mirror de la carpeta `src/base-pruebas/` para hacer las pruebas de cada archivo.
- Documentación de Jest: <https://jestjs.io/docs/en/getting-started>
- Para probar componentes de React se usará React Testing Library que se usa en combinación con Jest: <https://testing-library.com/docs/react-testing-library/intro>

Algunas de las palabras clave mas comunes para las pruebas en Jest y react Testing Library son:

- `describe`: Agrupa pruebas por categorías. Recibe dos parámetros, el primero es el nombre de la categoría y el segundo es una función que contiene las pruebas.
- `test` o `it`: Son lo mismo, sirven para hacer una prueba. Reciben dos parámetros, el primero es el nombre de la prueba y el segundo es una función que contiene el código de la prueba.
- `expect`: Es una función que recibe un valor y se le pueden encadenar funciones para hacer afirmaciones (asserts) sobre ese valor.
- `toBe`: Es una función que recibe un valor y hace una comparación estricta (===) con el valor que se le pasa como parámetro.
- `toEqual`: Es una función que recibe un valor y hace una comparación profunda (deep) con el valor que se le pasa como parámetro.

Para hacer una selección mas exacta de los elementos que queremos seleccionar a traves de Jest para realizar pruebas podemos usar diferentes métodos como el siguiente para obtener un `button` por el tipo de elemento y `aria-label`:

```javascript
// Busca el elemento button y filtra al que tiene name/aria-label: "btn-plus"
  const plusBtn = screen.getByRole("button", { name: "btn-plus" });
// Acciona el evento de click en el button referenciado arriba almacenado en const plusBtn
  fireEvent.click(plusBtn);
```

import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name, age }) => {
  return (
    <>
      {/* Se usa el atributo data-testid para hacer tests por medio del test id en Jest */}
      <h1 data-testid="test-title">{title}</h1>
      <h3>{subTitle}</h3>
      <h3>{subTitle}</h3>
      <p>
        Hello {name}, {age} years old
      </p>
      <p>Year of birth: {age ? new Date().getFullYear() - age : age}</p>
    </>
  );
};

// Las definiciones de default props y props son definidas después del código a ejecutar
// Definir default props. Default props se definen antes de prop types
FirstApp.defaultProps = {
  title: "No title provided",
  subTitle: "No subtitle provided",
  name: "No name provided",
  age: 0,
};

// Los proptypes se definen de la siguiente manera:
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired, // Si se pasa un numero como String, automaticamente se convierte a number
};

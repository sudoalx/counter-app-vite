import { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  /*
    Tarea: Manejar butones de resta y reset con hooks
  */

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <div className="counter-display">
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
      </div>
      <div className="button-controls">
        <button aria-label="btn-minus" onClick={() => handleSubstract()}>
          -1
        </button>
        <button aria-label="btn-reset" onClick={() => handleReset()}>
          Reset
        </button>
        <button aria-label="btn-plus" onClick={() => handleAdd()}>
          +1
        </button>
      </div>
    </>
  );
};

CounterApp.defaultProps = {
  value: 0,
};

CounterApp.defaultProps = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;

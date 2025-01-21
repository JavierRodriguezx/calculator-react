import React from "react";

function Botones({
  setOperando2,
  operando2,
  setOperando1,
  operando1,
  operador,
  setOperador,
}) {
  const handleClear = () => {
    setOperando1(0);
    setOperando2(0);
    setOperador("");
  };

  const handleDelete = () => {
    console.log("Eliminar");
  };

  const handleOperation = (operation) => {
    if (operando2) {
      // Si hay un segundo operando
      calculateResult();
      setOperador(operation);
      setOperando2("");
    } else {
      // Si no hay segundo operando
      setOperador(operation);
      setOperando1(operando1 + operation);
    }
  };

  const handleNumber = (number) => {
    if (operador) {
      // Si hay un operador, el número se agrega a operando2
      setOperando2(operando2 + number.toString());
    } else {
      // Si no hay operador, el número se agrega a operando1
      setOperando1(operando1 + number.toString());
    }
  };

  const handleEquals = () => {
    calculateResult();
  };

  const calculateResult = () => {
    if (operando1 && operando2 && operador === "+") {
      const result = parseFloat(operando1) + parseFloat(operando2);
      setOperando1(result.toString());
      setOperando2("");
      setOperador("");
    }
  };
  return (
    <>
      <div className="btn-container">
        <div id="btn-grid">
          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handleDelete()}>⬅</button>
          <button onClick={() => handleOperation("/")}>/</button>
          <button onClick={() => handleNumber(7)}>7</button>
          <button onClick={() => handleNumber(8)}>8</button>
          <button onClick={() => handleNumber(9)}>9</button>
          <button onClick={() => handleOperation("*")}>*</button>
          <button onClick={() => handleNumber(4)}>4</button>
          <button onClick={() => handleNumber(5)}>5</button>
          <button onClick={() => handleNumber(6)}>6</button>
          <button onClick={() => handleOperation("-")}>-</button>
          <button onClick={() => handleNumber(1)}>1</button>
          <button onClick={() => handleNumber(2)}>2</button>
          <button onClick={() => handleNumber(3)}>3</button>
          <button onClick={() => handleOperation("+")}>+</button>
          <button onClick={() => handleNumber(0)}>0</button>
          <button onClick={() => handleNumber(".")}>.</button>
          <button onClick={handleEquals}>=</button>
        </div>
      </div>
    </>
  );
}

export default Botones;

import React from "react";

function ComponeteVentana({ operando1, operando2 }) {
  return (
    <>
      <div className="operands__container">
        <div className="operands">
          <div className="operand__primero" data-operand-1>
            {operando1}
          </div>
          <div data-operand-2>{operando2}</div>
        </div>
      </div>
    </>
  );
}

export default ComponeteVentana;

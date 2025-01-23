import React from "react";

function ComponeteVentana({ visor1, visor2 }) {
  return (
    <>
      <div className="operands__container">
        <div className="operands">
          <div className="operand__primero" data-operand-1>
            {visor1}
          </div>
          <div data-operand-2>{visor2}</div>
        </div>
      </div>
    </>
  );
}

export default ComponeteVentana;

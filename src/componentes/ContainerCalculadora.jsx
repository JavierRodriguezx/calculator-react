import React from "react";

function ContainerCalculadora({ children }) {
  return (
    <div>
      <section className="flex-container color-2">
        <div className="container__fondo">{children}</div>
      </section>
    </div>
  );
}

export default ContainerCalculadora;

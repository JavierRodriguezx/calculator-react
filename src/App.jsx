import "./App.css";
import React, { useState } from "react";
import ContainerCalculadora from "./componentes/ContainerCalculadora";
import ComponeteVentana from "./componentes/ComponeteVentana";
import Botones from "./Botones";

function App() {
  const [operando1, setOperando1] = useState(0);
  const [operando2, setOperando2] = useState(0);
  const [operador, setOperador] = useState("");
  console.log(operando2);
  return (
    <div>
      <ContainerCalculadora>
        <ComponeteVentana operando1={operando1} operando2={operando2} />
        <Botones
          operando2={operando2}
          operando1={operando1}
          setOperando2={setOperando2}
          setOperando1={setOperando1}
          operador={operador}
          setOperador={setOperador}
        />
      </ContainerCalculadora>
    </div>
  );
}

export default App;

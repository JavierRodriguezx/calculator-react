import "./App.css";
import React, { useState } from "react";
import ContainerCalculadora from "./componentes/ContainerCalculadora";
import ComponeteVentana from "./componentes/ComponeteVentana";
import Botones from "./Botones";

function App() {
  const [state, setState] = useState({
    visor1: "|",
    visor2: " ",
    operador: null,
    valorActual1: "",
    valorActual2: "",
    total: 0,
  });
  
  
  return (
    <div>
      <ContainerCalculadora>
        <ComponeteVentana visor1={state.visor1} visor2={state.visor2} />
        <Botones
          state={state} setState={setState}
        />
      </ContainerCalculadora>
    </div>
  );
}

export default App;

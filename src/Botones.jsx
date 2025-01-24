import React from "react";
function Botones({
  state,
  setState
}) {
  const { 
    visor1,
    visor2,
    operador,
    valorActual1,
    valorActual2,
    total, } = state;

  const handleClear = () => {
    setState({
      ...state,
      visor1: "|",
      visor2: " ",
      operador: null,
      valorActual1: 0,
      valorActual2: 0,
      total: 0,
    })
  };
  const handleDelete = () => {
    setState({
      ...state,
      visor1: "|",
      visor2: " ",
      operador: null,
      valorActual1: 0,
      valorActual2: 0,
      total: 0,
    })
  };
  const handleOperation = (operation) => {
  if (state.visor1 === '|' && operation === '+'){
    return
  }
  if (state.visor1 === '|' && operation === '-'){
    return
  }
  if (state.visor1 === '|' && operation === '/'){
    return
  }
  if (state.visor1 === '|' && operation === '*'){
    return
  }
    if (!state.operador){
      setState({
        ...state,
        operador: operation,
        visor1: state.visor1 + operation,
      })
    }
    }
  const handleNumber = (number) => {
console.log(number)
    if(state.operador){
      setState({
        ...state,
        valorActual2: state.valorActual2 + number,
        visor1: state.visor1 + number,
      }
      )
    }
    else{
      setState({
        ...state, 
        visor1: state.visor1 === "|" ? number : state.visor1 + number,
        valorActual1: state.valorActual1 === 0 ? number : state.valorActual1 + number,
      })  
    }
    console.log("valorActual1 después:", state.valorActual1, "Tipo:", typeof state.valorActual1);
    console.log("valorActual2 después:", state.valorActual2, "Tipo:", typeof state.valorActual2);
  };
  const handleEquals = () => {
    let resultado = 0;
    switch(state.operador){
    
      case '+':
        resultado = parseFloat(state.valorActual1) + parseFloat(state.valorActual2);
        setState({
          ...state,
          visor2: resultado.toString()
        })        
        breack;
      case '-':
        resultado = parseFloat(state.valorActual1) - parseFloat(state.valorActual2);
        setState({
          ...state,
          visor2: resultado.toString()
        })
        break;
      case '*':
        resultado = parseFloat(state.valorActual1) * parseFloat(state.valorActual2);
        setState({
          ...state,
          visor2: resultado.toString()
        })
        break;
      case '/':
        resultado = parseFloat(state.valorActual1) / parseFloat(state.valorActual2);
        setState({
          ...state,
          visor2: resultado.toString()
        })
        break;
      
    }
    

console.log(state.valorActual1)
console.log(state.valorActual2)
  };
  const calculateResult = (operation) => {
  };
  return (
    <>
      <div className="btn-container">
        <div id="btn-grid">
          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handleDelete()}>⬅</button>
          <button onClick={() => handleOperation("/")}>/</button>
          <button onClick={() => handleNumber('7')}>7</button>
          <button onClick={() => handleNumber('8')}>8</button>
          <button onClick={() => handleNumber('9')}>9</button>
          <button onClick={() => handleOperation("*")}>*</button>
          <button onClick={() => handleNumber('4')}>4</button>
          <button onClick={() => handleNumber('5')}>5</button>
          <button onClick={() => handleNumber('6')}>6</button>
          <button onClick={() => handleOperation("-")}>-</button>
          <button onClick={() => handleNumber('1')}>1</button>
          <button onClick={() => handleNumber('2')}>2</button>
          <button onClick={() => handleNumber('3')}>3</button>
          <button onClick={() => handleOperation("+")}>+</button>
          <button onClick={() => handleNumber('0')}>0</button>
          <button onClick={() => handleNumber(".")}>.</button>
          <button onClick={handleEquals}>=</button>
        </div>
      </div>
    </>
  );
}
 

export default Botones;

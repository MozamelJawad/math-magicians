import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const MainCalculatorContainer = () => (
  <div className="main-grid">
    <Calculator />
  </div>
);

function Calculator() {
  const [state, setState] = useState({
    operation: null,
    total: null,
    next: null,
  });
  const { operation, total, next } = state;
  const handleClick = (e) => {
    const value = e.target.textContent;
    const calculationResult = calculate(state, value);
    setState(calculationResult);
  };
  return (
    <>
      <div className="output">
        <div className="pre-operand" />
        <div className="cur-operand">
          {total}
          {operation}
          {next}
        </div>
      </div>
      <button type="button" onClick={handleClick}>AC</button>
      <button type="button" onClick={handleClick}>+/-</button>
      <button type="button" onClick={handleClick}>%</button>
      <button type="button" onClick={handleClick} className="lastBtn">÷</button>
      <button type="button" onClick={handleClick}>7</button>
      <button type="button" onClick={handleClick}>8</button>
      <button type="button" onClick={handleClick}>9</button>
      <button type="button" onClick={handleClick} className="lastBtn">x</button>
      <button type="button" onClick={handleClick}>4</button>
      <button type="button" onClick={handleClick}>5</button>
      <button type="button" onClick={handleClick}>6</button>
      <button type="button" onClick={handleClick} className="lastBtn">-</button>
      <button type="button" onClick={handleClick}>1</button>
      <button type="button" onClick={handleClick}>2</button>
      <button type="button" onClick={handleClick}>3</button>
      <button type="button" onClick={handleClick} className="lastBtn">+</button>
      <button type="button" onClick={handleClick} className="span-two">0</button>
      <button type="button" onClick={handleClick}>.</button>
      <button type="button" onClick={handleClick} className="lastBtn">=</button>
    </>
  );
}

export default MainCalculatorContainer;

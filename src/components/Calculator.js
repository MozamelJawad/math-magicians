import './Calculator.css';

const MainCalculatorContainer = () => (
  <div className="main-grid">
    <OutputContainer />
  </div>
);

const OutputContainer = () => (
  <>
    <div className="output">
      <div className="pre-operand" />
      <div className="cur-operand">0</div>
    </div>
    <Calculator />
  </>
);

const Calculator = () => (
  <>
    <button type="button">AC</button>
    <button type="button">+/-</button>
    <button type="button">%</button>
    <button type="button" className="lastBtn">÷</button>
    <button type="button">7</button>
    <button type="button">8</button>
    <button type="button">9</button>
    <button type="button" className="lastBtn">x</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <button type="button">6</button>
    <button type="button" className="lastBtn">-</button>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button" className="lastBtn">+</button>
    <button type="button" className="span-two">0</button>
    <button type="button">.</button>
    <button type="button" className="lastBtn">=</button>
  </>
);

export default MainCalculatorContainer;

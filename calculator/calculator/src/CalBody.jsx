import React, { useState } from 'react'


function CalBody() {
    const [input, setInput] = useState('');
    const [previousInput, setPreviousInput] = useState('');
    const [operator, setOperator] = useState(null);


    const handleNumberClick = (value) => {
        setInput(input + value);
    };

    const handleOperatorClick = (op) => {
        setOperator(op);
        setPreviousInput(input);
        setInput('');
    };

    const handleTotalClick = () => {
        if (!operator || !previousInput) {
            alert("Enter value");
            return;
        }
        const current = parseFloat(input);
        const previous = parseFloat(previousInput);
        let ans = 0;
        switch (operator) {
            case '+':
                ans = current + previous;
                break;
            case '-':
                ans = current - previous;
                break;
            case '*':
                ans = current * previous;
                break;
            case '/':
                ans = current / previous;
                break;
            default:
                break;
        }
        setInput(ans.toString());
        setPreviousInput('');
        setOperator(null);
    };

    const handleClearClick = () => {
        setInput('');
        setOperator(null);
        setPreviousInput('');
    };
    return (
        <div className="calculator width: 200px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);" >
            <div className="display height: 40px;
  background-color: #222;
  color: #fff;
  text-align: right;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 24px;
  border-radius: 5px;">{input || '0'}</div>
            <div className="buttons display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
                <button className="" onClick={handleClearClick}>C</button>
                <button className="" onClick={() => handleOperatorClick('+')}>+</button>
                <button className="" onClick={() => handleOperatorClick('/')}>/</button>
                <button className="" onClick={() => handleOperatorClick('*')}>*</button>
                <button className="" onClick={() => handleOperatorClick('-')}>-</button>
                <button className="" onClick={() => handleNumberClick('7')}>7</button>
                <button className="" onClick={() => handleNumberClick('8')}>8</button>
                <button className="" onClick={() => handleNumberClick('9')}>9</button>
                <button className="" onClick={() => handleNumberClick('4')}>4</button>
                <button className="" onClick={() => handleNumberClick('5')}>5</button>
                <button className="" onClick={() => handleNumberClick('6')}>6</button>
                <button className="" onClick={() => handleNumberClick('1')}>1</button>
                <button className="" onClick={() => handleNumberClick('2')}>2</button>
                <button className="" onClick={() => handleNumberClick('3')}>3</button>
                <button className="" onClick={() => handleNumberClick('0')}>0</button>
                <button className="" onClick={() => handleNumberClick('.')}>.</button>
                <button className="" onClick={handleTotalClick}>=</button>
            </div>
        </div>
    )
}

export default CalBody

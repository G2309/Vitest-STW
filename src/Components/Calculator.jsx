import React, { useState, useEffect } from 'react'

const Calculator = () => {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')
  const MAX_DIGITS = 9

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleKeyDown = (event) => {
    const { key } = event
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '=', 'Enter', 'Backspace']

    if (allowedKeys.includes(key)) {
      event.preventDefault()
      if ((key !== '.' && expression.length < MAX_DIGITS) || key === 'Backspace') {
        handleClick(key === 'Enter' ? '=' : key)
      }
    }
  }

  const handleClick = (value) => {
    if (value === '=') {
      try {
        let evalResult = eval(expression)
        if (evalResult.toString().length > MAX_DIGITS) {
          setResult('Overflow')
        } else {
          setResult(evalResult)
        }
      } catch (error) {
        setResult('Error')
      }
    } else if (value === 'C') {
      setExpression('')
      setResult('')
    } else if (value === '+/-') {
      setExpression(prevExpression => {
        if (prevExpression.startsWith('-')) {
          return prevExpression.slice(1)
        } else {
          return '-' + prevExpression
        }
      })
    } else if (value === '.') {
      if (!expression.includes('.') && expression.length < MAX_DIGITS) {
        setExpression(prevExpression => prevExpression + value)
      }
    } else {
      if (expression.length < MAX_DIGITS) {
        setExpression(prevExpression => prevExpression + value)
      }
    }
  }

  return (
    <div className="calculator">
      <h3>Visualmente, solo limita si se le da click a los botones</h3>
      <input type="text" value={expression} readOnly />
      <input data-testid="result" type="text" value={result} readOnly />

      <div className="buttons">
        <div className="numeric-buttons">
          <div className="row">
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('/')}>/</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button onClick={() => handleClick('=')}>=</button>
            <button onClick={() => handleClick('+')}>+</button>
          </div>
        </div>
        <div className="extra-buttons">
          <button onClick={() => handleClick('C')}>C</button>
          <button onClick={() => handleClick('+/-')}>+/-</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator


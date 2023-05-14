import React, { useState } from 'react'

function Calculadora() {
  const [result, setResult] = useState('')

  const handleClick = (e) => {
    if (
      result.length < 9
      && parseInt(result + e.target.name, 10) <= 999999999
    ) {
      setResult(result + e.target.name)
    }
  }

  const handleClear = () => {
    setResult('')
  }

  const handleDelete = () => {
    setResult(result.slice(0, -1))
  }

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const calculatedResult = eval(result).toString()
      setResult(calculatedResult.includes('-') ? 'ERROR' : calculatedResult)
    } catch (error) {
      setResult('ERROR')
    }
  }

  const handleSuma = () => {
    setResult(`${result}+`)
  }

  const handleResta = () => {
    setResult(`${result}-`)
  }

  const handleMultiplicacion = () => {
    setResult(`${result}*`)
  }

  const handleDivision = () => {
    setResult(`${result}/`)
  }

  const handleModulo = () => {
    setResult(`${result}%`)
  }

  const handleNegativo = () => {
    if (result.length < 9) {
      setResult(parseFloat(result) * -1)
    }
  }

  return (
    <div className="Container">
      <div className="Calculadora">
        <input className="Display" value={result} />
        <button type="button" onClick={handleClear} style={{ color: 'red' }}>
          C
        </button>
        <button type="button" onClick={handleDelete}>&larr;</button>
        <button type="button" onClick={handleModulo}>%</button>
        <button type="button" onClick={handleDivision}>/</button>
        <button type="button" name="7" onClick={handleClick}>
          7
        </button>
        <button type="button" name="8" onClick={handleClick}>
          8
        </button>
        <button type="button" name="9" onClick={handleClick}>
          9
        </button>
        <button type="button" onClick={handleMultiplicacion}>x</button>
        <button type="button" name="4" onClick={handleClick}>
          4
        </button>
        <button type="button" name="5" onClick={handleClick}>
          5
        </button>
        <button type="button" name="6" onClick={handleClick}>
          6
        </button>
        <button type="button" onClick={handleResta}>-</button>
        <button type="button" name="1" onClick={handleClick}>
          1
        </button>
        <button type="button" name="2" onClick={handleClick}>
          2
        </button>
        <button type="button" name="3" onClick={handleClick}>
          3
        </button>
        <button type="button" onClick={handleSuma}>+</button>
        <button type="button" onClick={handleNegativo}>+/-</button>
        <button type="button" name="0" onClick={handleClick}>
          0
        </button>
        <button type="button" name="." onClick={handleClick}>
          .
        </button>
        <button type="button" onClick={handleCalculate}>=</button>
      </div>
    </div>
  )
}

export default Calculadora

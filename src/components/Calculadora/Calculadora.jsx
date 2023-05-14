import React, { useState } from 'react'

const Calculadora = () => {

    const [result, setResult] = useState('');

    const handleClick = (e) => {
        if (result.length < 9 && parseInt(result + e.target.name) <= 999999999) {
          setResult(result + e.target.name);
        }
      };

    const handleClear = () => {
        setResult('');
    };

    const handleDelete = () => {
        setResult(result.slice(0, -1));
    };
      

    const handleCalculate = () => {
        try {
          const calculatedResult = eval(result).toString();
          setResult(calculatedResult.includes('-') ? 'ERROR' : calculatedResult);
        } catch (error) {
          setResult('ERROR');
        }
    };

    const handleSuma = () => {
        setResult(result + '+');
      };
    
      const handleResta = () => {
        setResult(result + '-');
      };
    
      const handleMultiplicacion = () => {
        setResult(result + '*');
      };
    
      const handleDivision = () => {
        setResult(result + '/');
      };    

      const handleModulo = () => {
        setResult(result + '%');
      };

      const handleNegativo = () => {
        setResult(parseFloat(result) * -1);
      }

    return (
        <div className='Container'>
            <div className='Calculadora'>
                <input className='Display' value={result}/>
                <button onClick={handleClear} style={{color:"red"}}>C</button>
                <button onClick={handleDelete}>&larr;</button>
                <button onClick={handleModulo}>%</button>
                <button onClick={handleDivision}>/</button>
                <button name='7' onClick={handleClick}>7</button>
                <button name='8' onClick={handleClick}>8</button>
                <button name='9' onClick={handleClick}>9</button>
                <button onClick={handleMultiplicacion}>X</button>
                <button name='4' onClick={handleClick}>4</button>
                <button name='5' onClick={handleClick}>5</button>
                <button name='6' onClick={handleClick}>6</button>
                <button onClick={handleResta}>-</button>
                <button name='1' onClick={handleClick}>1</button>
                <button name='2' onClick={handleClick}>2</button>
                <button name='3' onClick={handleClick}>3</button>
                <button onClick={handleSuma}>+</button>
                <button onClick={handleNegativo}>+/-</button>
                <button name='0' onClick={handleClick}>0</button>
                <button name='.' onClick={handleClick}>.</button>
                <button onClick={handleCalculate}>=</button>
            </div>      
        </div>
    )
}

export default Calculadora
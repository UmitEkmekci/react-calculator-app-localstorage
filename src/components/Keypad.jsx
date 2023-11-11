import React from 'react'

import KeypadCss from '../styles/Keypad.css'

export const Keypad = ({handleButton,handleClear,handleBackspace,handleCalculate}) => {
    return (
        <div className='keypad'>
            <button onClick={handleClear} id="clear" className="highlight">Clear</button>
            <button onClick={handleBackspace} id="backspace" className="highlight">C</button>
            <button value ="/" onClick={handleButton} className="highlight">/</button>
            <button value ="7" onClick={handleButton}>7</button>
            <button value ="8" onClick={handleButton}>8</button>
            <button value="9" onClick={handleButton}>9</button>
            <button value ="*" onClick={handleButton} className="highlight">*</button>
            <button value ="4" onClick={handleButton}>4</button>
            <button value ="5" onClick={handleButton}>5</button>
            <button value ="6" onClick={handleButton}>6</button>
            <button value ="-" onClick={handleButton} className="highlight">-</button>
            <button value ="1" onClick={handleButton}>1</button>
            <button value ="2" onClick={handleButton}>2</button>
            <button value ="3" onClick={handleButton}>3</button>
            <button value ="+" onClick={handleButton} className="highlight">+</button>
            <button value ="0" onClick={handleButton}>0</button>
            <button value ="." onClick={handleButton}>.</button>
            <button onClick={handleCalculate} id="result">=</button>
        </div>
    )
}

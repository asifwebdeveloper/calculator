import '../components/calcLayout.css'
import React from 'react'

const calcLayout = () => {
    return (
        <div className='container'>

            <div className="calculator">
                <input type="text" className='calc-number' value="0" />
                <div className="firstrow">
                    <button className="btn clear span-2">C</button>
                    <button className="btn orange">&larr;</button>
                    <button className="btn orange">&divide;</button>
                </div>
                <div className="calculator-button">

                    <button className="btn">7</button>
                    <button className="btn">8</button>
                    <button className="btn">9</button>
                    <button className="btn orange">x</button>
                    <button className="btn">4</button>
                    <button className="btn">5</button>
                    <button className="btn">6</button>
                    <button className="btn orange">-</button>
                    <button className="btn">1</button>
                    <button className="btn">2</button>
                    <button className="btn">3</button>
                    <button className="btn orange">+</button>
                </div>
                <div className="bottom">
                        <button className="btn span-3">0</button>
                        <button className="btn orange equal">=</button>
                    </div>
            </div>

        </div>
    )
}

export default calcLayout
import React, { useState } from 'react'
import c from "./input.module.css"

function Input(props) {
  const [inputvalue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
      <label>
        <input 
            className={c.input} 
            {...props} 
            value={inputvalue}
            onChange={handleChange}
        />
      </label> 
  )
}

export default Input
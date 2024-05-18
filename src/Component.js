import React, { useState  } from 'react'

export default function Component() {

    const [text, seText] = useState()

    const [updated,setUpdated] = useState()

    const textOnChange = (event) => {
        seText(event.target.value)
    }

    const buttonOnclick = () => {
        setUpdated(text)
    }

  return (
    <div>
       <input type="text" value={text} onChange={textOnChange} /> 
       <button onClick={buttonOnclick}>Actualizar</button>
       <p>Texto del input: {text} </p>
       <p>Texto Actualizando: {updated} </p>
    </div>
  )
}

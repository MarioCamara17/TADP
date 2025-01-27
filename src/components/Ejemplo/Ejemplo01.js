import React, {useState} from 'react'

//hooks usetate


export function Ejemplo01() {
    const [contador, setContador] = useState(0)

    const incrementarValor =()=>{
        setContador(contador+1)
    }
    const reducirValor =()=>{
        setContador(contador-1)
    }


  return (
    <div>
        <h1>{contador}</h1>
        <button onClick={incrementarValor}>Incrementar</button>
        <button onClick={reducirValor}>Restar</button>
    </div>
  )
}

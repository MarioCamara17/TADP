import React from 'react';
import {Menu} from "../components/inicio"

export  function Plantilla({children}) {
  return (
    <div>
        <div className=''>
            <Menu />
        </div>
        {children}
    </div>
  )
}

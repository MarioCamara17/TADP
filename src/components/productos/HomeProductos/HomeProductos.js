import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import {ItemProductos} from '../ItemProductos/ItemProductos'
import {Datos} from '../../../utils/bd'

console.log(Datos);


export function HomeProductos() {

    const fondo={
        tema:{
            backgroundColor:"black",
            color:"white",
            fontSize:"50px"
        }
    }
  return (
    <div className='container' style={fondo.tema}>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Lista de productos">
        {
            Datos.map((producto)=>{
                return(
                <ItemProductos/> 
                )   
            })
        }   
    </Tab>
</Tabs>
</div>
  )
}

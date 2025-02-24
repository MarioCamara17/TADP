import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeProductos } from "../components/productos";
import { Home } from "../page";
import { Layout, Plantilla } from "../layouts";
import {Productos} from "../components/formulario"

export function Rutas() {
 const Plant=(Plantilla,Page)=>(
    <Layout>
    <Page />
</Layout>
 )
   
 

  return (
   
    <Routes>
        
        <Route path="/" element={Plant(Plantilla,Home)}/>
        <Route path="/producto" element={Plant(Plantilla,HomeProductos)} />
        <Route path="/formproductos" element={Plant(Plantilla,Productos)}/>
       
      
    </Routes>
    
  );
}
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeProductos } from "../components/productos";
import { Home } from "../page";
import { Plantilla } from "../layouts";

export function Rutas() {
 const Plant=(Layout,Page)=>(
    <Layout>
    <Page />
</Layout>
 )
   
 

  return (
   
    <Routes>
        
        <Route path="/" element={Plant(Plantilla,Home)}/>
        <Route path="/producto" element={Plant(Plantilla,HomeProductos)} />
       
      
    </Routes>
    
  );
}
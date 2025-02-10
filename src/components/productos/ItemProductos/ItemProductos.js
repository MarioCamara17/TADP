import React from "react";
import { Card } from "react-bootstrap";
import "./ItemProductos.scss";

export function ItemProductos({ producto }) {
  return (
    <Card>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body className="body">
        <Card.Title className="body__title">
          {producto.nombre}
        </Card.Title>
        <Card.Text className="body__text">
          Precio: {producto.precio} <br/>
          Cantidad: {producto.cantidad} <br/>
          Unidad: {producto.unidad}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
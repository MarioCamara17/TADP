import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import { initialValues, validationSchema } from "./Productos.form";
import { Producto } from "../../api";
import { ListProductos } from "../ListProductos/ListProductos";

const ctrProducto = new Producto();

export function Productos() {
  const [listaProductos, setListaProductos] = useState([]);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await ctrProducto.createProduct(formValue);
        obtenerProductos(); // Cambiado a "obtenerProductos"
      } catch (error) {
        console.error("Error al crear el producto:", error);
      }
    },
  });

  const obtenerProductos = async () => { // Cambiado a "obtenerProductos"
    try {
      const listaPro = await ctrProducto.getProductos(); // Cambiado a "getProductos"
      setListaProductos(listaPro || []); // Asegurarse de que listaPro sea un array
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      setListaProductos([]); // En caso de error, establecer listaProductos como un array vacío
    }
  };

  const eliminarProducto = async (id) => {
    try {
      console.log("Eliminando producto con ID:", id);
      await ctrProducto.deleteProduct(id);
      setListaProductos((prevLista) => prevLista.filter((producto) => producto._id !== id));
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  useEffect(() => {
    obtenerProductos(); // Cambiado a "obtenerProductos"
  }, []);

  return (
    <div className="p-4">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Producto"
              name="nombre"
              onChange={formik.handleChange}
              value={formik.values.nombre}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="precio"
              placeholder="Precio"
              value={formik.values.precio}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Cantidad</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                name="cantidad"
                placeholder="Cantidad"
                value={formik.values.cantidad}
                onChange={formik.handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Unidad</Form.Label>
            <Form.Control
              type="text"
              name="unidad"
              placeholder="Unidad"
              value={formik.values.unidad}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="file"
              name="imagen"
              onChange={(event) => formik.setFieldValue("imagen", event.currentTarget.files[0])}
            />
          </Form.Group>
        </Row>

        <Button type="submit">Enviar</Button>
      </Form>

      <Row className="mt-4">
        <Col>
          <ListProductos productos={listaProductos} eliminarProducto={eliminarProducto} />
        </Col>
      </Row>
    </div>
  );
}
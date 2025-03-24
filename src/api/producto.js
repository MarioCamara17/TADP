import { ENV } from "../utils/Constantes";
import Axios from "axios";

export class Producto {
    baseApi = ENV.BASE_API;

    async createProduct(data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });

            const response = await Axios.post(`${this.baseApi}/${ENV.API_ROUTES.CREATEPRODUCTO}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Se agregó el producto correctamente");
            return response.data; // Devuelve el producto creado
        } catch (error) {
            console.error("Error al crear producto:", error);
            throw error;
        }
    }

    async getProducto() {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.GETPRODUCTO}`;
            const response = await Axios.get(url);
            return response.data; // Devuelve los productos correctamente
        } catch (err) {
            console.error("Error al obtener productos:", err);
            return []; // Devuelve un array vacío en caso de error
        }
    }

    async deleteProduct(id) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.DELETEPRODUCTO}/${id}`;
            await Axios.delete(url);
            console.log("Producto eliminado correctamente");
        } catch (error) {
            console.error("Error al eliminar producto:", error);
            throw error;
        }
    }
}
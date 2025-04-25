const localH = "http://localhost:4000/api";
const basePath = "http://localhost:4000";

export const ENV = {
    BASE_PATH: basePath,
    BASE_API: localH,
    API_ROUTES: {
        CREATEPRODUCTO: "createproducto",
        GETPRODUCTO: "getproducto",
        DELETEPRODUCTO: "delproducto" // corregido aquí
    }
}

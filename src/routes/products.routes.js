// modulo de rutas de gestion de productos

import { Router } from "express"; 

import {getAllProdtucts, searchProductByCategory, searchProductByID , postProduct, putProduct, deleteProduct} from "../controllers/products.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";

const router = Router();

//Devuelve todos los juegos
router.get("/products", getAllProdtucts)

//Devuelve productos segun parametros de busqueda
router.get("/products/search", searchProductByCategory)

//Devuelve producto por id
router.get("/products/:id", searchProductByID)

//Postear un producto
router.post("/products/create", authentication ,postProduct);

//editar un producto por id
router.put("/products/:id", authentication ,putProduct);

//borrar un producto
router.delete("/products/:id", authentication ,deleteProduct);

export default router;



// modulo de rutas de gestion de productos

import { Router } from "express"; 

import {login} from "../controllers/products.controller.js";

const router = Router();

router.post("/login", login);

export default router;

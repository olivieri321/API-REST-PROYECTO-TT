


// modulo de rutas de gestion de productos

import { Router } from "express"; 

import {userLogin} from "../controllers/products.controller.js";

const router = Router();

router.post("/login", userLogin);

export default router;

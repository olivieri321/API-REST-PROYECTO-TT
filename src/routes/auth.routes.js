// modulo de rutas de login

import { Router } from "express"; 

import {userLogin} from "../controllers/products.controller.js";

const router = Router();

router.post("/login", userLogin);

export default router;

// modulo de rutas de login

import { Router } from "express"; 

import {userLogin, userRegister} from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", userLogin);

router.post("/register", userRegister)

export default router;

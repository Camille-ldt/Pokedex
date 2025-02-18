import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import * as typeController from '../controllers/typeController.js';

export const router = Router();

router.get('/types', cw(typeController.getAllTypes));
router.get('/type/:id/pokemons', cw(typeController.getOneTypeAndPokemons));
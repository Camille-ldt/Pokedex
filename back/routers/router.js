import { Router } from "express";
import { router as pokemonRouter } from "./pokemonRouter.js";
import { router as typeRouter } from "./typeRouter.js";
import { router as teamRouter } from "./teamRouter.js";



// Main API router
export const router = Router();



// All sub-routers go here !
router.use(pokemonRouter);
router.use(typeRouter);
router.use(teamRouter);
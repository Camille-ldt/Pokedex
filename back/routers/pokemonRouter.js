import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import * as pokemonController from "../controllers/pokemonController.js";


export const router = Router();


/**
 * GET /pokemons
 * @tags Pokemon
 * @summary Returns all Pokémons
 * @return {Pokemon[]} 200 - Success response
 */
router.get("/pokemons", cw(pokemonController.getAllPokemons));
router.get("/pokemon/:id", cw(pokemonController.getOnePokemonAndTypes))




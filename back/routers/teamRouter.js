import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import * as teamController from '../controllers/teamController.js';

export const router = Router();

router.get('/teams', cw(teamController.getAllTeams));
router.get('/teams/pokemons', cw(teamController.getAllTeamsAndPokemons));
router.get('/team/:id/pokemons', cw(teamController.getOneTeamAndPokemons))
router.get('/team/:idTeam/pokemon/:idPokemon', cw(teamController.addPokemonToTeam))

router.put('/team/:id', cw(teamController.editTeam));
router.post('/team', cw(teamController.createTeam));
router.delete('/team/:teamId/pokemon/:pkmId', cw(teamController.removePokemonFromTeam));
router.delete('/team/:teamId', cw(teamController.removeTeam));

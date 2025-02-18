import { getAllPokemons } from "../controllers/pokemonController.js";
import { Pokemon } from "../models/index.js";

jest.mock("../models/index.js", () => ({
    Pokemon: {
        findAll: jest.fn(),
    },
}));

// 1- Fonctionnalité 
describe("Pokemon module", () => {
    // 2- Scénario
    describe("Get all Pokemons", () => {
        // 3- Résultat attendu 
        test("When Pokemons exist in the database, it returns all Pokemons", async () => {
            // Arrange 
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            const mockPokemons = [{ id: 1, name: "Pikachu" }];
            Pokemon.findAll.mockResolvedValue(mockPokemons);  // Simulation de la réponse

            // Act
            await getAllPokemons(req, res);  // Attendre que la fonction asynchrone se termine

            // Assert
            expect(res.status).toHaveBeenCalledWith(200);  // Vérifier que le code 200 a été retourné
            expect(res.json).toHaveBeenCalledWith(mockPokemons);  // Vérifier que les pokémons ont été retournés
        });

        test("When no Pokemons exist in the database, it returns 404", async () => {
            // Arrange 
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            Pokemon.findAll.mockResolvedValue([]);  // Simuler une base de données vide

            // Act
            await getAllPokemons(req, res);  // Attendre la fin de l'exécution

            // Assert
            expect(res.status).toHaveBeenCalledWith(404);  // Vérifier que le code 404 a été retourné
            expect(res.json).toHaveBeenCalledWith("Aucun Pokemon dans la base");  // Vérifier que le message d'erreur a été retourné
        });
    });
});
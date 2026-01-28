import { heroService } from "../services/index.js";

export async function getAllHeroes(req, res) {
  try {
    const heroes = await heroService.getAllHeroes();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getHeroById(req, res) {
  try {
    const hero = await heroService.getHeroById(req.params.id);
    res.json(hero);
  } catch (error) {
    // Problème de gestion d'erreur
    res.status(500).json({ error: error.message });
  }
}

export async function createHero(req, res) {
  try {
    const { alias, identity, powerDate } = req.body;
    const newHero = await heroService.createHero({
      alias,
      identity,
      powerDate,
    });
    res.status(201).json(newHero); // Une création de ressource réussie → 201
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

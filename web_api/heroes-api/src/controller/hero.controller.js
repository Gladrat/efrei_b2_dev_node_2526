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
    res.status(500).json({ error: error.message });
  }
}

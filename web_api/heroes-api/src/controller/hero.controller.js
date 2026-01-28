import { heroService } from "../services/index.js";

export async function getAllHeroes(req, res) {
  try {
    const heroes = await heroService.getAllHeroes();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

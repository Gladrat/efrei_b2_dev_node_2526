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
    res.status(200).json(newHero);
  } catch (error) {    
    if (error.message === "Alias already exists: Joker") {
      res.status(409).json({ error: error.message });
    } else if (error.message === "Identity malformed (3 car min)") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unexpected server error" });
    }
  }
}

export async function updateHero(req, res) {
  try {
    const { id } = req.params;
    const { alias, identity, powerDate } = req.body;
    const updatedHero = await heroService.updateHero(id, {
      alias,
      identity,
      powerDate,
    });
    res.json(updatedHero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteHero(req, res) {
  try {
    const { id } = req.params;
    const deletedHero = await heroService.deleteHero(id);
    res.json(deletedHero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function restoreHero(req, res) {
  try {
    const { id } = req.params;
    const isRestored = await heroService.restoreHero(id);
    res.json({ isRestored });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

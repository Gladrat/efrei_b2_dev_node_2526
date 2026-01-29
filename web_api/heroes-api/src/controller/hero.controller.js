import { heroService } from "../services/index.js";

export async function getAllHeroes(req, res, next) {
  try {
    const heroes = await heroService.getAllHeroes();
    res.json(heroes);
  } catch (error) {
    next(error)
  }
}

export async function getHeroById(req, res, next) {
  try {
    const hero = await heroService.getHeroById(req.params.id);
    res.json(hero);
  } catch (error) {
    next(error)
  }
}

export async function createHero(req, res, next) {
  try {
    const { alias, identity, powerDate } = req.body;
    const newHero = await heroService.createHero({
      alias,
      identity,
      powerDate,
    });
    res.status(201).json(newHero);
  } catch (error) {    
    next(error)
  }
}

export async function updateHero(req, res, next) {
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
    next(error)
  }
}

export async function deleteHero(req, res, next) {
  try {
    const { id } = req.params;
    const deletedHero = await heroService.deleteHero(id);
    res.status(204).json(deletedHero);
  } catch (error) {
    next(error)
  }
}

export async function restoreHero(req, res, next) {
  try {
    const { id } = req.params;
    const isRestored = await heroService.restoreHero(id);
    res.json({ isRestored });
  } catch (error) {
    next(error)
  }
}

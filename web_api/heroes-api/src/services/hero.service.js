import { HeroRepository } from "../repositories/index.js";

export async function getHeroById(id) {
  return await HeroRepository.getHeroById(id)
}
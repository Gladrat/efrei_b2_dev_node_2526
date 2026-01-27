import { HeroRepository } from "../repositories/index.js";

export async function getHeroById(id) {
  return await HeroRepository.getHeroById(id)
}

export async function getAllHeroes() {

}

export async function createHero() {

}

export async function deleteHero() {
  
}
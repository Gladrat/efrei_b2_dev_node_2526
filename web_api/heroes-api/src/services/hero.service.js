import { HeroRepository } from "../repositories/index.js";

export async function getHeroById(id) {
  return await HeroRepository.getHeroById(id)
}

export async function getAllHeroes() {

}

// Identity >= 3 caractères
// Alias unique
export async function createHero() {

}

// Identique au createHero
export async function updateHero() {

}

export async function deleteHero() {
  
}
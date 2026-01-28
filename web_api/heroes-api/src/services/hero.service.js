import sequelize from "../config/index.js";
import { HeroRepository } from "../repositories/index.js";

export async function getHeroById(id) {
  const hero = await HeroRepository.getHeroById(id);

  if (!hero) {
    throw new Error(`Cannot find hero with id: ${id}`);
  }

  return hero;
}

export async function getAllHeroes() {
  return await HeroRepository.getAllHeroes();
}

// Validate dupliqué entre create & update ?
export async function createHero({ alias, identity, powerDate }) {
  if (!identity || identity.length < 3) {
    throw new Error("Identity malformed (3 car min)");
  }

  if (await HeroRepository.heroExists(alias)) {
    throw new Error(`Alias already exists: ${alias}`);
  }

  return await HeroRepository.createHero({ alias, identity, powerDate });
}

/**
 * EXERCICE : Refactoriser la fonction updateHero
 *
 * Cette fonction contient 3 problèmes à corriger :
 * ATTENTION : Les solutions ne sont pas forcément à implémenter dans cet ordre !
 *
 * ------------------------------------------------------------------
 * PROBLÈME 1 : Code dupliqué (DRY - Don't Repeat Yourself)
 * ------------------------------------------------------------------
 * La validation (identity >= 3 caractères, alias unique) est dupliquée
 * entre createHero et updateHero.
 *
 * → Solution : Extraire la logique de validation dans une fonction
 *   réutilisable (ex: validateHeroData).
 *
 * ------------------------------------------------------------------
 * PROBLÈME 2 : PUT vs PATCH
 * ------------------------------------------------------------------
 * Actuellement, cette fonction agit comme un PUT (remplacement complet).
 * Elle devrait agir comme un PATCH (mise à jour partielle).
 *
 * Différence :
 * - PUT   : Tous les champs sont requis, remplace toute la ressource
 * - PATCH : Seuls les champs fournis sont modifiés, les autres gardent
 *           leur valeur actuelle
 *
 * Exemple attendu pour un PATCH :
 *   updateHero(1, { alias: "Dark Knight" })
 *   → Ne modifie que l'alias, garde identity et powerDate existants
 *
 * → Solution : Récupérer le héros existant et fusionner les nouvelles
 *   valeurs avec les anciennes.
 *
 * ------------------------------------------------------------------
 * PROBLÈME 3 : Vérification de l'alias existant
 * ------------------------------------------------------------------
 * La fonction heroExists(alias) vérifie si un alias existe en base.
 * Problème : lors d'un update, si le héros garde son propre alias,
 * la fonction retourne true et lève une erreur à tort.
 *
 * Exemple :
 *   Le héros id=1 a alias="Batman"
 *   updateHero(1, { identity: "Bruce Wayne Jr" })
 *   → Erreur "Alias already exists: Batman" alors qu'il n'a pas changé !
 *
 * → Solution : Modifier heroExists dans le repository pour accepter
 *   un paramètre optionnel excludeId qui exclut un héros de la recherche.
 *
 */
export async function updateHero(id, { alias, identity, powerDate }) {
  if (!identity || identity.length < 3) {
    throw new Error("Identity malformed (3 car min)");
  }

  await getHeroById(id);

  if (await HeroRepository.heroExists(alias)) {
    throw new Error(`Alias already exists: ${alias}`);
  }

  return await HeroRepository.updateHero(id, { alias, identity, powerDate });
}

export async function deleteHero(id) {
  const hero = await getHeroById(id);

  return await HeroRepository.deleteHero(id);
}

await sequelize.sync({ force: true });

const batman = await createHero({
  alias: "Batman",
  identity: "Bruce Wayne",
  powerDate: "2026-01-01",
});

console.log(
  (
    await createHero({
      alias: "Joker",
      identity: "Bruce Wayne",
      powerDate: "2026-01-01",
    })
  ).id,
);

console.log((await getAllHeroes()).map((h) => h.id));

console.log((await getHeroById(batman.id)).id);

console.log(
  await updateHero(batman.id, {
    alias: "Batman",
    identity: "BWWWW",
    powerDate: "2026-01-01",
  }),
);

// await deleteHero(batman.id);

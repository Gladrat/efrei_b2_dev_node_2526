import { powerService } from "../services/index.js";

const powerDatas = [
  { name: "Super Force" },
  { name: "Vol" },
  { name: "Invisibilité" },
  { name: "Télékinésie" },
  { name: "Super Vitesse" },
];

export async function seedPowers() {
  const powers = [];
  for (const p of powerDatas) {
    powers.push(await powerService.createPower(p));
  }
  return powers;
}

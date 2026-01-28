import { powerService } from "../services/index.js";

export const powersData = [
  { name: "Super Force" },
  { name: "Vol" },
  { name: "Invisibilité" },
  { name: "Télékinésie" },
];

export async function seedPowers() {
  const powers = [];
  for (const data of powersData) {
    powers.push(await powerService.createPower(data));
  }
  return powers;
}

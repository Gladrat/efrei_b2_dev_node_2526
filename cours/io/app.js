import { writeFile, readFile } from "node:fs/promises";

async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api");
  if (response.status == 200) {
    const data = await response.json();
    return data;
  }
}

async function writeRandomUser() {
  const user = await getRandomUser();

  const data = JSON.parse(await readFile("./user.json"));
  data.push(user);

  console.log("Ecriture du fichier sur le disque.");
  await writeFile("./user.json", JSON.stringify(data));
}

for (let i = 0; i < 3; i++) {
  writeRandomUser()
}

console.log("LA SUITE DU SCRIPT !!");

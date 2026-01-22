const heroes = [];

const form = document.getElementById("hero-form");
const heroList = document.getElementById("hero-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const heroName = document.getElementById("hero-name").value;

  if (heroes.includes(heroName)) {
    alert("Le héros existe déjà !");
    return;
  }

  heroes.push(heroName);

  const listItem = document.createElement("li");
  listItem.textContent = heroName;
  heroList.appendChild(listItem);

  form.reset();
});
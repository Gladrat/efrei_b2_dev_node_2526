let heroes = [];

const form = document.getElementById("hero-form");
const heroList = document.getElementById("hero-list");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const heroName = document.getElementById("hero-name").value;

  if (heroes.includes(heroName)) {
    alert("Le héros existe déjà !");
    return;
  }

  heroes.push(heroName);

  // localStorage.setItem("heroes", JSON.stringify(heroes));
  const response = await fetch('http://localhost:3000/heroes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hero: heroName
      })
    });

  const listItem = document.createElement("li");
  listItem.textContent = heroName;
  heroList.appendChild(listItem);

  form.reset();
});

window.addEventListener("DOMContentLoaded", async () => {
  // heroes = JSON.parse(localStorage.getItem("heroes")) || [];

  const response = await fetch("http://localhost:3000/heroes")
  heroes = await response.json()

  heroes.forEach((hero) => {
    const heroItem = document.createElement("li");
    heroItem.textContent = hero;
    heroList.appendChild(heroItem);
  });
});

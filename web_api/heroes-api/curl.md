# Instructions CURL

- curl "http://localhost:3000/api/v1/heroes"
  - Permet de récupérer le GET (par défaut)
- curl -X "POST" "http://localhost:3000/api/v1/heroes" -d '{"identity":"John Doe", "alias":"SuperNul", "powerDate": "1985-05-07"}' -H "Content-Type: application/json"
  - Permet d'envoyer des données en POST au service Web
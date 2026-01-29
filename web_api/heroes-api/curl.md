# Instructions CURL

## Tous les héros (GET)

curl "http://localhost:3000/api/v1/heroes"

## Créer un héro : POST

curl -X "POST" "http://localhost:3000/api/v1/heroes" -d '{"identity":"John Doe", "alias":"SuperNul", "powerDate": "1985-05-07"}' -H "Content-Type: application/json"

Erreur: Identity trop court, données manquante

curl -X "POST" "http://localhost:3000/api/v1/heroes" -d '{"identity":"xx", "alias":"JD", "powerDate": "1985-05-07"}' -H "Content-Type: application/json"

Erreur: Alias existant

curl -X "POST" "http://localhost:3000/api/v1/heroes" -d '{"identity":"John Doe", "alias":"Joker", "powerDate": "1985-05-07"}' -H "Content-Type: application/json"

## Modifier un héro : PUT ou PATCH

curl -X "POST" "http://localhost:3000/api/v1/heroes/2" -d '{"powerDate": "1985-05-07"}' -H "Content-Type: application/json"  

curl -X "PATCH" "http://localhost:3000/api/v1/heroes/2" -d '{"identity":"Jane Doe", "alias":"SuperNulle", "powerDate": "1985-05-07"}' -H "Content-Type: application/json"

## Delete un héro : DELETE

curl -X "DELETE" "http://localhost:3000/api/v1/heroes/2" -d '{"powerDate": "1985-05-07"}' -H "Content-Type: application/json"

## Restore un héro : PATCH

curl -X "PATCH" "http://localhost:3000/api/v1/heroes/1/restore" -H "Content-Type: application/json"


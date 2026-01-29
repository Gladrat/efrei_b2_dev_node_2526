# Instructions CURL

## Tous les héros (GET)

curl "http://localhost:3000/api/v1/heroes"

## Créer un héro : POST

curl -X "POST" "http://localhost:3000/api/v1/heroes" -d '{"identity":"John Doe", "alias":"SuperNul", "powerDate": "1985-05-07"}' -H "Content-Type: application/json"

## Modifier un héro : PUT ou PATCH

curl -X "POST" "http://localhost:3000/api/v1/heroes/2" -d '{"powerDate": "1985-05-07"}' -H "Content-Type: application/json"  

curl -X "PATCH" "http://localhost:3000/api/v1/heroes/2" -d '{"identity":"Jane Doe", "alias":"SuperNulle", "powerDate": "1985-05-07"}' -H "Content-Type: application/json"

## Delete un héro : DELETE

curl -X "DELETE" "http://localhost:3000/api/v1/heroes/2" -d '{"powerDate": "1985-05-07"}' -H "Content-Type: application/json"
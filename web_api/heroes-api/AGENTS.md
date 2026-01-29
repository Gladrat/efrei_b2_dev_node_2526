# AGENTS.md - Heroes API

## Aperçu du projet

API REST Node.js pour gérer des super-héros, construite avec Express.js et Sequelize (SQLite).

## Stack technique

- **Runtime**: Node.js (ES6 modules)
- **Framework**: Express.js 5.x
- **ORM**: Sequelize 6.x
- **Base de données**: SQLite3

## Architecture

Architecture en couches : Routes → Controllers → Services → Repositories → Models

```
src/
├── config/         # Configuration BDD (Sequelize/SQLite)
├── controller/     # Gestionnaires de requêtes HTTP
├── errors/         # Classes d'erreurs personnalisées (404, 409, 400, 500)
├── middlewares/    # Middleware Express (gestion d'erreurs)
├── models/         # Modèles Sequelize (Hero, Power)
├── repositories/   # Couche d'accès aux données
├── routes/         # Définitions des routes API
├── seeds/          # Données initiales
├── services/       # Logique métier et validation
└── server.js       # Point d'entrée
```

## Modèles de données

### Hero
| Champ | Type | Notes |
|-------|------|-------|
| id | INTEGER | PK, auto-increment |
| alias | STRING | Unique, requis, min 2 caractères |
| identity | STRING | Requis, min 3 caractères, **masqué dans les réponses API** |
| powerDate | DATEONLY | Requis |
| isDeleted | BOOLEAN | Soft delete (défaut: false) |

### Power
| Champ | Type | Notes |
|-------|------|-------|
| id | INTEGER | PK |
| name | STRING | Unique, requis |

## Endpoints API

Base URL: `http://localhost:3000`

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/v1/heroes` | Liste tous les héros (non supprimés) |
| POST | `/api/v1/heroes` | Crée un héros (201) |
| GET | `/api/v1/heroes/:id` | Récupère un héros |
| PUT/PATCH | `/api/v1/heroes/:id` | Met à jour un héros |
| DELETE | `/api/v1/heroes/:id` | Soft delete (204) |
| PATCH | `/api/v1/heroes/:id/restore` | Restaure un héros supprimé |

## Conventions de code

- **Nommage fichiers**: `*.controller.js`, `*.service.js`, `*.repository.js`, `*.model.js`, `*.route.js`
- **Imports**: ES6 modules (`import`/`export`)
- **Soft delete**: Les héros supprimés restent en BDD (`isDeleted: true`)
- **Confidentialité**: Le champ `identity` n'est jamais exposé via l'API

## Commandes

```bash
# Démarrer le serveur (port 3000)
node src/server.js
```

## Points d'attention

- La BDD est réinitialisée à chaque démarrage (`force: true`)
- Pas de tests automatisés configurés
- Le modèle Power existe mais n'est pas relié à Hero
- Logging des requêtes avec timestamp français
- L'utilisateur est sous windows 10 avec Powershell
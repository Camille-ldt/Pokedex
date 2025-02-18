# Installation

```bash
# Cloner le projet
git clone REPO_SSH_URL

# Se déplacer dans le projet
cd REPO_NAME

# Ouvrir le projet dans VSCode
code .

# Installer les dépendances back
cd back 
npm install

#Si vous voulez utiliser npm coté front (vite etc..) cf votre repo okanban front ;) 
#Sinon on utilise liveServer tout simplement !
```

## Mise en place de la base de données

```bash
# Se connecter à son client Postgres
sudo -i -u postgres psql

# Créer un utilisateur de base de données
CREATE USER admin_pokedex WITH LOGIN PASSWORD 'pokedex';

# Créer une base de données 
CREATE DATABASE pokedex WITH OWNER admin_pokemon;

# Quitter psql
exit
```

## Mise en place de l'environnement de développement

```bash
# Créer un fichier d'environnement backend
cp .env.example .env

# Ajuster les valeurs du fichier .env
code .env

# Lancer les scripts de création de tables et d'échantillonnage
npm run db:reset
```
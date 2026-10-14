# Étape 1 : Utiliser une image Node.js stable
FROM node:20-alpine

# Étape 2 : Définir le dossier de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier les fichiers de dépendances du serveur
COPY package*.json ./

# Étape 4 : Installer les dépendances backend
RUN npm install

# Étape 5 : Copier le reste du code backend
COPY . .

# Étape 6 : Exposer le port du serveur
EXPOSE 5000

# Étape 7 : Commande pour lancer le serveur
CMD ["node", "server.js"]

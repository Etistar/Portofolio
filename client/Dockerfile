# Étape 1 : Utiliser une image Node.js stable pour le Frontend
FROM node:20-alpine

# Étape 2 : Définir le dossier de travail du Frontend
WORKDIR /app

# Étape 3 : Copier uniquement les packages du dossier client
COPY package*.json ./

# Étape 4 : Installer les dépendances de React
RUN npm install

# Étape 5 : Copier tout le code de l'interface graphique (src, public, etc.)
COPY . .

# Étape 6 : Exposer le port de développement de React
EXPOSE 5173

# Étape 7 : Lancer le serveur de développement React du client
CMD ["npm", "start"]

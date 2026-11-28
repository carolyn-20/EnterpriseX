FROM node:20-alpine
WORKDIR /app
COPY services/api/package*.json ./
RUN npm install --omit=dev
COPY services/api/src ./src
COPY database/init.sql ./database/init.sql
EXPOSE 4000
CMD ["sh","-c","node src/init-db.js || echo \"Database initialization skipped; starting API with existing schema\"; node src/server.js"]

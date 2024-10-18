# Usar una imagen base de Node.js
FROM node:18 as build

# Definir un argumento de construcción
ARG VITE_BACKEND_URL

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Configurar la variable de entorno para Vite
RUN echo "VITE_BACKEND_URL=${VITE_BACKEND_URL}" > .env

# Construir la aplicación para producción
RUN npm run build

# Usar una imagen de nginx para servir el frontend
FROM nginx:alpine

# Copiar los archivos construidos a la carpeta de nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Exponer el puerto que utiliza nginx
EXPOSE 80

# Comando por defecto de nginx
CMD ["nginx", "-g", "daemon off;"]

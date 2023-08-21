# Dockerfile

# Utiliza una imagen base con Node.js
FROM node:18.17.1

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación al directorio de trabajo
COPY . .

# usar usuario que crea la imagen de node con uid 1000 y gid 1000
USER node

# Se ejecutará cuando inicies un contenedor
CMD [ "npm", "run", "dev" ]
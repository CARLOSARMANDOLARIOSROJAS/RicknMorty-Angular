# ===== STAGE 1: build de la app =====
FROM node:18-alpine AS build

WORKDIR /app

# Copia package.json y package-lock.json para aprovechar cache de dependencias
COPY package*.json ./

# Instala dependencias (reproducible)
RUN npm ci

# Copia el resto del proyecto y compila
COPY . .

# Ejecuta build de Angular (ajusta si tu script es distinto)
RUN npm run build -- --configuration production

# ===== STAGE 2: servidor estático con nginx =====
FROM nginx:stable-alpine

# Si deseas usar una config custom de nginx, cópiala
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos de build del stage anterior.
# En Angular 17+, los archivos se generan en dist/<project-name>/browser
COPY --from=build /app/dist/ricknmorty-angular/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

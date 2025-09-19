# 🚀 Rick and Morty Angular App

Aplicación frontend hecha con **Angular** que consume la [Rick and Morty API](https://rickandmortyapi.com/).  
El proyecto está dockerizado para facilitar su despliegue.

--  Tecnologías usadas --
Angular 18+
TypeScript
Bootstrap / Bootswatch
Docker + Nginx
---

## 📦 Requisitos previos

- [Docker](https://docs.docker.com/get-docker/) instalado en tu máquina.

---

## ▶️ Cómo correr la app con Docker

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Construir la imagem
```bash
docker build -t ricknmorty-angular .
```

### 3. Levantar el contenedor
```bash
docker run -p 8080:80 angular-rickandmorty
```

### 4. Visitar navegador
```bash
Abre http://localhost:8080/
```


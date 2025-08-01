# Portfolio - React Router v7

Un portfolio moderno desarrollado con React Router v7, TypeScript y TailwindCSS, con soporte completo para Docker y despliegue automatizado.

## 🚀 Características

- ⚡️ React Router v7 con Server-side rendering
- 🔥 Hot Module Replacement (HMR)
- 📦 Optimización de assets con Vite
- 🌐 Sistema de internacionalización (ES/EN)
- 🔒 TypeScript por defecto
- � TailwindCSS para estilos
- � Docker ready con despliegue automático
- 🔄 GitHub Actions para CI/CD

## 🛠️ Desarrollo

### Instalación

```bash
npm install
```

### Desarrollo Local

```bash
npm run dev
```

Tu aplicación estará disponible en `http://localhost:5173`.

### Construcción para Producción

```bash
npm run build
```

## 🌍 Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```bash
# API Configuration
VITE_BASE_API_URL=http://localhost:1337/api
```

## 🐳 Despliegue con Docker

### Construcción Local

```bash
# Construir la imagen
docker build -t portfolio .

# Ejecutar el contenedor
docker run -d -p 3000:3000 --name portfolio-app portfolio

# Con URL de API personalizada
docker build --build-arg VITE_BASE_API_URL=https://api.midominio.com/api -t portfolio .
```

### Descargar desde DockerHub

```bash
# Descargar la imagen latest
docker pull lebateleur/portfolio:latest

# Ejecutar el contenedor
docker run -d -p 3000:3000 --name portfolio-app lebateleur/portfolio:latest

# Verificar que está corriendo
docker ps

# Ver logs
docker logs portfolio-app

# Acceder al sitio
open http://localhost:3000
```

## 📦 Configuración de DockerHub (GitHub Actions)

Para que el despliegue automático funcione, configura estos **secrets** en tu repositorio de GitHub:

### Settings > Secrets and Variables > Actions

1. **DOCKERHUB_USERNAME**: Tu nombre de usuario de DockerHub

   ```
   lebateleur
   ```

2. **DOCKERHUB_PASSWORD**: Token de acceso de DockerHub ⚠️ (NO tu contraseña)

   ```
   Crear en: DockerHub > Account Settings > Security > Access Tokens
   ```

3. **PRODUCTION_API_URL** (Opcional): URL de tu API en producción
   ```
   https://api.midominio.com/api
   ```

## 🔄 Proceso de Despliegue Automático

### ¿Cuándo se ejecuta?

- Push a las ramas `main`, `master` o `develop`
- Creación de Pull Requests

### Tags generados automáticamente

1. **SHA del commit**: `lebateleur/portfolio:abc1234`
2. **Latest**: `lebateleur/portfolio:latest` (solo rama principal)
3. **Nombre de rama**: `lebateleur/portfolio:develop`

### Verificación del deployment

1. **GitHub Actions**: Ve a la pestaña "Actions" en tu repositorio
2. **DockerHub**: Verifica las nuevas imágenes en tu repositorio
3. **Prueba local**: Descarga y ejecuta la imagen
4. **Funcionalidad**: Verifica que todo funcione en http://localhost:3000

## 🛠️ Comandos Útiles

### Gestión de contenedores

```bash
# Parar el contenedor
docker stop portfolio-app

# Eliminar el contenedor
docker rm portfolio-app

# Reiniciar
docker restart portfolio-app

# Inspeccionar el contenedor
docker exec -it portfolio-app sh
```

### Limpieza

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

# portfolio-front

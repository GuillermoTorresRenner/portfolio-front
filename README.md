# Portfolio - React Router v7

Un portfolio moderno desarrollado con React Router v7, TypeScript y TailwindCSS, con soporte completo para Docker y despliegue automatizado. Todo el contenido se gestiona desde un archivo JSON local, sin depender de APIs externas ni bases de datos.

## 🚀 Características

- ⚡️ React Router v7 con Server-side rendering
- 🔥 Hot Module Replacement (HMR)
- 📦 Optimización de assets con Vite
- 🌐 Sistema de internacionalización (ES/EN)
- 🔒 TypeScript por defecto
- 🎨 TailwindCSS para estilos
- 📝 Contenido gestionado desde `content.json` (sin API externa)
- 🖼️ Imágenes servidas desde `public/images/`
- 🐳 Docker ready con despliegue automático
- 🔄 GitHub Actions para CI/CD

## 📝 Gestión de Contenido

Todo el contenido del portfolio se define en el archivo **`content.json`** en la raíz del proyecto. No se necesita backend ni base de datos.

### Estructura del content.json

```json
{
  "home": {
    "es": {
      "name": "Tu Nombre",
      "subtitle": "Tu Cargo",
      "description": "Breve descripción",
      "about": "Texto en **Markdown** sobre ti",
      "technologies": [...],
      "experiences": [...],
      "projects": [...],
      "socials": [...]
    },
    "en": {
      // Misma estructura en inglés
    }
  }
}
```

### Imágenes

Las imágenes se almacenan en `public/images/` y se referencian en `content.json` con rutas relativas:

```json
{
  "image": [
    {
      "id": 1,
      "url": "/images/projects/mi-proyecto.png",
      "alternativeText": "Descripción de la imagen"
    }
  ]
}
```

Estructura recomendada de carpetas de imágenes:

```
public/
└── images/
    └── projects/
        ├── proyecto1-hero.png
        ├── proyecto1-dashboard.png
        └── proyecto2-hero.png
```

### Agregar un nuevo proyecto

1. Añade las imágenes del proyecto en `public/images/projects/`
2. Agrega la entrada del proyecto en `content.json` dentro de `home.es.projects` y `home.en.projects`
3. Haz commit y push a `main` para desplegar automáticamente

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

## 🐳 Despliegue con Docker

### Construcción Local

```bash
# Construir la imagen
docker build -t portfolio .

# Ejecutar el contenedor
docker run -d -p 3000:3000 --name portfolio-app portfolio
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

3. **VPS_HOST**: IP o dominio de tu VPS
4. **VPS_USER**: Usuario SSH de la VPS
5. **VPS_PASSWORD**: Contraseña SSH
6. **VPS_PORT** (Opcional): Puerto SSH (por defecto 22)

> **Nota**: Ya no se necesita el secret `DOT_ENV` ni `PRODUCTION_API_URL`. Todo el contenido está embebido en la imagen Docker.

## 🔄 Proceso de Despliegue Automático

### ¿Cuándo se ejecuta?

- Push a la rama `main`

### ¿Qué hace?

1. Instala dependencias y construye el proyecto
2. Crea imagen Docker con el contenido embebido (content.json + imágenes en public/)
3. Sube la imagen a DockerHub con tags `latest` y SHA del commit
4. Copia `docker-compose.yaml` a la VPS
5. Hace pull de la imagen y reinicia el contenedor

### Tags generados automáticamente

1. **SHA del commit**: `lebateleur/portfolio:abc1234`
2. **Latest**: `lebateleur/portfolio:latest`

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
# Eliminar imágenes no utilizadas
docker image prune

# Eliminar contenedores parados
docker container prune

# Eliminar todo lo no utilizado
docker system prune
```

## 🔧 Troubleshooting

### El contenedor se detiene inmediatamente

- Verifica que el Dockerfile tenga el comando `CMD` con `npm start`

### Error 404 en rutas

- React Router maneja las rutas en el servidor (SSR)

### Las imágenes no se muestran

- Verifica que las rutas en `content.json` coincidan con los archivos en `public/images/`
- Las rutas deben empezar con `/images/...` (sin `public/`)

### GitHub Action falla

- Verifica que todos los secrets estén configurados
- Revisa los logs en la pestaña "Actions"

## 📁 Estructura del Proyecto

```
portfolio/
├── content.json             # Todo el contenido del portfolio (ES/EN)
├── app/                     # Código fuente React Router
│   ├── components/         # Componentes React
│   ├── routes/            # Rutas de la aplicación
│   ├── api/               # Lectura de contenido desde JSON
│   └── types/             # Tipos TypeScript
├── public/                # Archivos públicos
│   └── images/            # Imágenes del portfolio
│       └── projects/      # Screenshots y capturas de proyectos
├── .github/workflows/     # GitHub Actions
├── Dockerfile            # Configuración Docker
├── docker-compose.yaml   # Compose para despliegue en VPS
└── README.md           # Este archivo
```

## 🌐 Internacionalización

El proyecto incluye soporte para múltiples idiomas gestionado directamente en `content.json`:

- **Español** (`home.es`): Contenido en español
- **Inglés** (`home.en`): Contenido en inglés
- **Cambio dinámico**: Switch entre idiomas sin recarga

Para agregar o editar traducciones, modifica las secciones correspondientes en `content.json`.

---

**Tecnologías utilizadas:**

- React Router v7
- TypeScript
- TailwindCSS
- Vite
- Docker
- GitHub Actions

Construido con ❤️

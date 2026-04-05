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

Todo el contenido del portfolio se define en archivos TypeScript (`app/content/es.ts` y `app/content/en.ts`). No se necesita backend ni base de datos. El contenido se organiza en la interfaz `HomeData` con los siguientes atributos:

### Estructura Principal (HomeData)

Estos son los atributos raíz que definen la información general del portfolio:

| Atributo | Tipo | Requerido | Descripción |
|----------|------|-----------|-------------|
| `name` | `string` | ✅ | Nombre completo del desarrollador |
| `subtitle` | `string` | ✅ | Subtítulo o cargo principal (ej: "Full Stack Developer") |
| `description` | `string` | ✅ | Breve descripción de una línea |
| `position` | `string` | ✅ | Posición/cargo detallado |
| `location` | `string` | ✅ | Ubicación geográfica |
| `about` | `string` | ✅ | Texto largo (soporta **Markdown**) sobre ti |
| `email` | `string` | ✅ | Email de contacto |
| `phone` | `string` | ✅ | Número de teléfono |
| `linkedin` | `string` | ✅ | URL del perfil de LinkedIn |
| `github` | `string` | ✅ | URL del perfil de GitHub |
| `youtube` | `string` | ✅ | URL del canal de YouTube |
| `technologies` | `Technology[]` | ✅ | Array de tecnologías que dominas |
| `experiences` | `ExperienceItem[]` | ✅ | Array de experiencias laborales |
| `projects` | `ProjectItem[]` | ✅ | Array de proyectos destacados |
| `socials` | `Social[]` | ❌ | Array de redes sociales adicionales |

### Atributos de Tecnología (Technology)

Cada tecnología en tu portafolio se define así:

| Atributo | Tipo | Requerido | Descripción |
|----------|------|-----------|-------------|
| `id` | `number` | ✅ | ID único de la tecnología |
| `name` | `string` | ✅ | Nombre de la tecnología (ej: "React", "Python") |
| `url` | `string` | ❌ | URL oficial de la tecnología |

**Ejemplo:**
```typescript
{
  id: 1,
  name: "TypeScript",
  url: "https://www.typescriptlang.org"
}
```

### Atributos de Experiencia Laboral (ExperienceItem)

Define tu historial profesional con estos campos:

| Atributo | Tipo | Requerido | Descripción |
|----------|------|-----------|-------------|
| `id` | `number` | ✅ | ID único de la experiencia |
| `documentId` | `string` | ✅ | ID único como string (ej: "exp-001") |
| `position` | `string` | ✅ | Cargo/posición que ocupaste |
| `company` | `string` | ✅ | Nombre de la empresa |
| `start_date` | `string` | ✅ | Fecha de inicio (ej: "Octubre 2025") |
| `end_date` | `string` | ✅ | Fecha de fin (ej: "Presente") |
| `description` | `string` | ✅ | Descripción de responsabilidades (soporta **Markdown**) |
| `url` | `string` | ❌ | URL de la página de la empresa |
| `order` | `number` | ✅ | Orden de aparición (1, 2, 3...) |

**Ejemplo:**
```typescript
{
  id: 1,
  documentId: "exp-001",
  position: "Senior Full Stack Developer | DevOps",
  company: "Lanek",
  start_date: "October 2025",
  end_date: "Present",
  description: "- Implemented VPS solutions\n- Developed CI/CD pipelines",
  url: "https://www.lanek.cl/",
  order: 1
}
```

### Atributos de Proyecto (ProjectItem)

Define tus proyectos destacados y portafolio:

| Atributo | Tipo | Requerido | Descripción |
|----------|------|-----------|-------------|
| `id` | `number` | ✅ | ID único del proyecto |
| `documentId` | `string` | ✅ | ID único como string (ej: "otaria") |
| `title` | `string` | ✅ | Nombre del proyecto |
| `exerpt` | `string` | ✅ | Descripción corta (1-2 líneas) |
| `description` | `string` | ✅ | Descripción completa (soporta **Markdown**) |
| `demo_url` | `string` | ❌ | URL para acceder a la demo del proyecto |
| `code_url` | `string` | ❌ | URL del repositorio de código |
| `youtube_url` | `string` | ❌ | URL de un video del proyecto en YouTube |
| `order` | `number` | ✅ | Orden de aparición (1, 2, 3...) |
| `is_main` | `boolean` | ✅ | Si es true, muestra badge "Proyecto Destacado" |
| `technologies` | `Technology[]` | ❌ | Array de tecnologías usadas |
| `image` | `ProjectImage[]` | ❌ | Array de imágenes del proyecto |

**Ejemplo:**
```typescript
{
  id: 1,
  documentId: "otaria",
  title: "Otaria",
  exerpt: "Platform for carbon footprint calculation",
  description: "**Otaria** is a multi-tenant platform...",
  demo_url: "https://huellacarbono.otaria.io/",
  order: 1,
  is_main: true,
  technologies: [
    { id: 1, name: "React" },
    { id: 2, name: "TypeScript" }
  ],
  image: [
    {
      id: 1,
      url: "/images/projects/otaria/otaria1.png",
      alternativeText: "Otaria - Main view"
    }
  ]
}
```

### Atributos de Imagen (ProjectImage)

Las imágenes en un proyecto se definen así:

| Atributo | Tipo | Requerido | Descripción |
|----------|------|-----------|-------------|
| `id` | `number` | ✅ | ID único de la imagen |
| `url` | `string` | ✅ | Ruta de la imagen (debe comenzar con `/images/`) |
| `alternativeText` | `string` | ❌ | Texto alternativo para accesibilidad |

### Gestión de Imágenes

Las imágenes se almacenan en `public/images/` y se referencian con rutas relativas:

**Estructura recomendada:**
```
public/
└── images/
    └── projects/
        ├── otaria/
        │   ├── otaria1.png
        │   └── otaria2.gif
        ├── simonv/
        │   ├── simonv.png
        │   └── simonv.gif
        └── theus/
            └── theus.png
```

**Referencia en content:**
```typescript
image: [
  {
    id: 1,
    url: "/images/projects/otaria/otaria1.png",
    alternativeText: "Otaria - Main view"
  }
]
```

### Cómo agregar un nuevo proyecto

1. **Crea la carpeta de imágenes** en `public/images/projects/tu-proyecto/`
2. **Agrega tus imágenes** (PNG, GIF o JPG)
3. **Edita `app/content/es.ts`** y agrega el proyecto:
   ```typescript
   {
     id: 10,
     documentId: "nuevo-proyecto",
     title: "Mi Nuevo Proyecto",
     exerpt: "Descripción corta...",
     description: "Descripción completa...",
     demo_url: "https://demo.ejemplo.com",
     order: 10,
     is_main: true,
     technologies: [...],
     image: [...]
   }
   ```
4. **Traduce a inglés** en `app/content/en.ts` con el mismo `documentId`
5. **Haz commit y push** a `main` para desplegar automáticamente

### Notas Importantes

- ⚠️ El `documentId` debe ser **único** en todo el portfolio y se usa para las rutas
- 📝 Los campos `description` soportan **Markdown** (bold, italic, listas, etc.)
- 🎯 Solo los proyectos con `is_main: true` muestran el badge "Destacado"
- 🔢 El `order` determina el orden de aparición (menor número = aparece primero)
- 📸 Las rutas de imágenes deben comenzar con `/images/` (sin `public/`)

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

## 🛠️ Troubleshooting

### Error building Docker image

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
├── app/
│   ├── content/             # Contenido del portfolio en TypeScript (ES/EN)
│   │   ├── es.ts           # Contenido en español
│   │   ├── en.ts           # Contenido en inglés
│   │   └── index.ts        # Exportaciones principales
│   ├── components/         # Componentes React
│   ├── routes/            # Rutas de la aplicación
│   ├── api/               # Lectura de contenido
│   ├── contexts/          # React Contexts (LanguageContext)
│   └── types/             # Tipos TypeScript
├── public/                # Archivos públicos
│   └── images/            # Imágenes del portfolio
│       └── projects/      # Screenshots y capturas de proyectos
├── .github/workflows/     # GitHub Actions
├── Dockerfile            # Configuración Docker
├── docker-compose.yaml   # Compose para despliegue en VPS
└── README.md           # Este archivo
```

## 🌐 Internacionalización (i18n)

El proyecto incluye soporte completo para múltiples idiomas gestionado desde TypeScript:

- **Español** (`app/content/es.ts`): Contenido en español
- **Inglés** (`app/content/en.ts`): Contenido en inglés
- **Cambio dinámico**: Switch entre idiomas sin recarga de página
- **localStorage**: Persiste el idioma seleccionado

Para agregar o editar traducciones, modifica los archivos correspondientes en `app/content/`.

---

Built with ❤️ using React Router.

# portfolio-front

# Service-Technologies

<p align="center">
  <img src="https://zeipfbopxparfrmpcnvy.supabase.co/storage/v1/object/sign/services/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hOGVjZTAyZS1kNGY5LTRjNjItOWY2Yy1mNWJlNTlkMjI1NzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzZXJ2aWNlcy9sb2dvLnBuZyIsImlhdCI6MTc1OTY5ODc2NCwiZXhwIjoxNzkxMjM0NzY0fQ.tZ076MZTqO3SYfcDRHTeXdbISgGzGnxAu8_AtcLDzHc" alt="Service Technologies Logo" width="200"/>
</p>

Panel administrativo y sitio informativo para **Service-Technologies**, desarrollado con **React + Vite**, **Zustand** para la gestión global del estado y **Supabase** como backend (autenticación, base de datos y almacenamiento).

---

## 🚀 Funcionalidades Principales

- 🔐 Autenticación segura con Supabase.
- ⚙️ Panel administrativo protegido para gestión de servicios.
- 💼 Visualización pública del catálogo de servicios.
- 📄 Vista detallada con descripción completa de cada servicio.
- 👥 Flujo de registro e inicio de sesión.
- 🧱 Manejo persistente de sesión (localStorage + Zustand).

---

## 🧩 Arquitectura Utilizada

La aplicación implementa una **arquitectura modular basada en componentes, servicios y estado global (client-service-store-view)**.

### 🧠 Justificación

Esta arquitectura permite:

- Separación clara entre UI, lógica de negocio y acceso a datos.
- Reutilización de código mediante stores y componentes comunes.
- Sincronización automática con Supabase y persistencia local.
- Escalabilidad al crecer el proyecto con nuevas vistas o módulos.

---

## 🗂️ Estructura Completa del Proyecto

```bash
service-technologies/
├─ .env                        # Variables de entorno (Supabase, API keys)
├─ .gitignore                  # Archivos y carpetas ignorados por Git
├─ index.html                  # Punto de entrada principal de la app (Vite)
├─ package.json                # Dependencias, scripts y metadatos del proyecto
├─ postcss.config.js           # Configuración de PostCSS (usado por TailwindCSS)
├─ tailwind.config.js          # Configuración del framework de estilos Tailwind
├─ vite.config.js              # Configuración de Vite (alias, plugins, etc.)
│
├─ public/                     # Archivos estáticos accesibles públicamente
│  └─ favicon.ico              # Ícono del sitio
│
└─ src/
   ├─ assets/
   │  ├─ logo.png
   │  └─ react.svg
   │
   ├─ auth/
   │  └─ AuthListener.jsx      # Escucha y sincroniza sesión Supabase + Zustand
   │
   ├─ components/
   │  ├─ Button.jsx            # Botón reutilizable
   │  ├─ Footer.jsx            # Pie de página con información básica
   │  ├─ Navbar.jsx            # Barra de navegación superior
   │  └─ ProtectedRoute.jsx    # Protege rutas privadas (admin, panel, etc.)
   │
   ├─ lib/
   │  ├─ servicesApi.js        # Funciones para interactuar con Supabase (servicios)
   │  └─ supabaseClient.js     # Inicialización del cliente Supabase
   │
   ├─ pages/
   │  ├─ admin/
   │  │  └─ AdminServices.jsx  # Panel para crear, editar y eliminar servicios
   │  ├─ Contact.jsx           # Página de contacto
   │  ├─ Home.jsx              # Página principal
   │  ├─ Login.jsx             # Ingreso de usuarios
   │  ├─ Register.jsx          # Registro de usuarios
   │  ├─ ServiceDetail.jsx     # Detalle de un servicio seleccionado
   │  └─ Services.jsx          # Listado general de servicios
   │
   ├─ store/
   │  ├─ useAuthStore.js       # Estado global de usuario (auth)
   │  └─ useServiceStore.js    # Estado global para lista de servicios
   │
   ├─ App.css                  # Estilos globales de la app
   ├─ App.jsx                  # Punto principal con rutas y layout
   ├─ index.css                # Configuración base de TailwindCSS
   └─ main.jsx                 # Renderiza la app con ReactDOM
```

---

## 📦 Archivos Clave y Su Función

| Archivo / Carpeta    | Descripción breve                                                                  |
| -------------------- | ---------------------------------------------------------------------------------- |
| `.env`               | Contiene las variables privadas del entorno (URL y clave de Supabase).             |
| `package.json`       | Define dependencias, scripts (`npm run dev`, `build`, etc.) y nombre del proyecto. |
| `vite.config.js`     | Configura Vite, plugins y alias para rutas (`@` → `src`).                          |
| `tailwind.config.js` | Define colores, fuentes y estilos personalizados.                                  |
| `supabaseClient.js`  | Conecta la app con el backend de Supabase.                                         |
| `servicesApi.js`     | Funciones CRUD para leer y administrar los servicios.                              |
| `useAuthStore.js`    | Controla autenticación, login/logout y persistencia local.                         |
| `useServiceStore.js` | Almacena lista de servicios obtenidos desde Supabase.                              |
| `AuthListener.jsx`   | Escucha eventos de autenticación y actualiza el store.                             |
| `ProtectedRoute.jsx` | Evita el acceso a rutas si el usuario no está autenticado.                         |
| `AdminServices.jsx`  | Pantalla donde el administrador puede modificar los servicios.                     |
| `ServiceDetail.jsx`  | Muestra título, imagen, precio y descripción extensa del servicio.                 |
| `App.jsx`            | Define la estructura principal y las rutas de la aplicación.                       |
| `main.jsx`           | Punto de inicio que monta la app React.                                            |
---

---
---
## 📁 Documentación de la Base de Datos

Esta sección contiene los archivos clave para la configuración del esquema de la base de datos.

* **[Esquema de Base de Datos (database.md)](/base_datos/database.md)**: Detalle completo de las tablas, campos y relaciones (usuario, servicio, pedido).
* **[Script SQL Completo (bd_servicios_tegnologicos.sql)](/base_datos/bd_servicios_tegnologicos.sql)**: Archivo ejecutable para crear y poblar la BD en cualquier servidor.

---

---

## 🔌 Dependencias Clave

| Librería             | Función Principal                          |
| -------------------- | ------------------------------------------ |
| **React**            | Framework principal del frontend           |
| **React Router DOM** | Navegación entre páginas                   |
| **Zustand**          | Manejo de estado global (auth y servicios) |
| **Supabase JS**      | Autenticación, base de datos y API backend |
| **Vite**             | Entorno rápido de desarrollo               |
| **TailwindCSS**      | Estilos modernos y responsivos             |

---

## ⚙️ Instalación y Ejecución

```bash
# 1️⃣ Clonar el repositorio
git clone https://github.com/tuusuario/service-technologies.git

# 2️⃣ Instalar dependencias
cd service-technologies
npm install

# 3️⃣ Configurar variables de entorno (.env)
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=tu_key_aqui
para fines practicos y poder montarlo si se desea ya esta el archivo .env con las credenciales
# 4️⃣ Ejecutar el entorno de desarrollo
npm run dev
```

---

## 💡 Flujo General

1. El usuario ingresa o se registra.
2. `AuthListener` sincroniza el estado con Supabase.
3. Los datos se guardan en `Zustand` y `localStorage`.
4. `/services` muestra el catálogo general.
5. Al hacer clic, se navega a `/service/:id` con el detalle completo.
6. Los administradores pueden modificar servicios en `/admin/services`.

---

## ✨ Autores

Desarrollado por **Miguel Rojas**
Desarrollado por **Diana Marcela Arevalo**

© 2025 **Service-Technologies**. Todos los derechos reservados.

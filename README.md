# Frontend para Gestión de Usuarios con NodeJS

Este repositorio inicialmente comenzó conteniendo el código fuente de la interfaz frontend para un sistema de gestión de usuarios. El proyecto incluye funcionalidades básicas de login y registro, diseñado con HTML, CSS y JavaScript, y está optimizado para una experiencia de usuario agradable y responsiva. En su segunda actualización lo que se buscó fue generar un servidor de NodeJS que maneje las solicitudes de creación de usuarios, logueo y autenticación por medio de Axios para la conexión con una API anteriormente creada en Java y Spring Boot.

## 🚀 Características principales

- **Interfaz de usuario moderna:**
    Diseñada con HTML y CSS para un diseño atractivo y amigable.

- **Validaciones de formulario:**
    Validaciones básicas de usuario y contraseña con JavaScript para prevenir errores comunes.

- **Responsividad total:**
    Compatible con dispositivos móviles, tabletas y escritorios gracias a media queries y diseño adaptable.

- **Documentación detallada:**
    Este repositorio está completamente documentado para facilitar la implementación y contribuciones.

## 🛠️ Tecnologías utilizadas
- **HTML5:** Estructuración de contenido.
- **CSS3:** Estilos visuales, animaciones y diseño responsivo.
- **JavaScript:** Lógica para validaciones y animaciones.
- **Git:** Control de versiones.
- **NodeJS:** Servidor encargado de procesar las solicitudes de registro, logueo y autenticaión.
- **Axios:** Comunicación del servidor de NodeJS con API de Spring Boot donde se aloja la info de los usuarios.
- **ExpressJS:** Para manejo de solicitudes HTTP
- **TypeScript:** Para manejo de tipos y previendo la futura migración a Angular
- **npm:** Empaquetador de la aplicación y uso de dependencias necesarias
- **EJS:** Manejo de pplantillas
- **ESLint:** para el estilo de código

## Organización por carpetas del proyecto

```plaintext
📦 node-ui-bank-system-server
├── 📂 public
│   └──📂js # Validaciones a los formularios e indicadores de carga
│       ├── login.js
│       ├── profile.js
│       ├── registerUser.js
│   └──📂css # Estilos para cada ejs
│       ├── login.css
│       ├── profile.css
│       ├── register.css
├── 📂 node_modules       # Archivos del empaquetado
├── 📂 src
│   ├── 📂 controllers
│   │   └── authController.ts   # Controlador de los usuarios y funcionalidades
│   │   └── mainController.ts   # Controlador del main
│   │   └── registerController.ts   # Controlador del register
│   ├── 📂 routes
│   │   └── auth.router.ts      # Rutas relacionadas con el login
│   │   └── main.router.ts      # Rutas de toda la plicación
│   │   └── register.router.js  # Rutas relacionadas con el registro
│   ├── 📂 views
│       ├── login.ejs           # Vista para login
│       ├── profile.ejs       # Vista para contenido protegido
│       └── register.ejs        # Vista para registro de usuarios
├── .env                   # Variables de entorno
├── .gitignore             # Archivos ignorados por git
└── .nvmrc                 # Configuración del nvm
├── app.ts                 # Configuración del servidor
└── eslint.config.mjs      # Configuración de ESlint
└── jest.config.ts         # Configuración de los tests
├── package-lock.json      # Detalles de las dependencias instaladas
├── package.json           # Configuración del proyecto
└── README.md              # Documentación del proyecto
└── tsconfig.json          # Configuración de Typescript
```

## Funcionalidades
- **Login:** Validación de credenciales y manejo de sesiones.
- **Registro:** Registro de nuevos usuarios con validaciones avanzadas.
- **Perfil:** Acceso a contenido protegido para usuarios autenticados.

## Estructura Modular
El proyecto está organizado para facilitar la escalabilidad y el mantenimiento:

- **Controllers:** Controladores que manejan la lógica de negocio.
- **Routes:** Rutas específicas para cada funcionalidad.
- **Views:** Plantillas EJS para la presentación del contenido.
- **Public:** Recursos estáticos como archivos CSS y JavaScript.
#  Sistema de Reservas Universitarias

Este proyecto es una aplicación web desarrollada en **React**, diseñada para gestionar las reservas de espacios universitarios (aulas, laboratorios, etc.) de manera sencilla e intuitiva.

Permite que los usuarios creen, visualicen y eliminen reservas, con almacenamiento local y una interfaz moderna.

---

##  Características principales

 Listado dinámico de espacios universitarios  
 Formulario de creación de reservas con nombre, fecha y hora  
 Selección de hora mediante listas desplegables  
 Visualización de las reservas del usuario  
 Persistencia local (usa **LocalStorage**, por lo que las reservas no se pierden al recargar la página)  
 Estilo limpio y organizado con CSS  
 Estructura modular (componentes, hooks y utilidades separados)

---

##  Estructura del proyecto

reservas-universitarias/
│
├── src/
│ ├── components/
│ │ ├── EspaciosList.jsx
│ │ ├── ReservaForm.jsx
│ │ ├── ReservasList.jsx
│ │
│ ├── hooks/
│ │ └── useLocalStorage.js
│ │
│ ├── utils/
│ │ └── reservas.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── tests/
│ └── reservas.test.js
│
├── index.html
├── package.json
├── package-lock.json
└── README.md


---

##  Instalación y configuración

Clonar el repositorio  
```bash
git clone https://github.com/Nicolas-ra01/taller-ing-software.git

cd taller-ing-software

npm install

npm run dev

Abrir en el navegador
http://localhost:5173

Almacenamiento Local

Las reservas se guardan automáticamente en el LocalStorage del navegador, lo que significa que permanecen guardadas incluso si se cierra o recarga la página.

Tecnologías utilizadas

React.js (Vite) – Framework principal

JavaScript (ES6+) – Lógica de la aplicación

HTML5 / CSS3 – Estructura y estilos

LocalStorage API – Persistencia de datos

Git y GitHub – Control de versiones



Nicolás Rendón
Proyecto académico – Ingeniería de Software

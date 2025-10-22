# Sistema de Reservas Universitarias

Proyecto frontend (React + Vite) — prototipo para reservar espacios universitarios (aulas, laboratorios, salas).

## Estado
- Interfaz React funcional.
- Persistencia en `localStorage`.
- Tests con Vitest (ejemplo incluido).
- Diagrama de casos de uso (PlantUML incluido en `/docs`).

## Estructura
reservas-universitarias/
├─ package.json
├─ index.html
├─ src/
│ ├─ main.jsx
│ ├─ App.jsx
│ ├─ index.css
│ ├─ components/
│ └─ utils/
├─ tests/
├─ docs/
│ ├─ requisitos.md
│ └─ casos_de_uso.puml
└─ README.md


## Requisitos mínimos
- Node.js (LTS) >= 16
- npm

## Instalación (local)
```bash
# en la carpeta del proyecto
npm install
npm run dev
# abrir: http://localhost:5173/

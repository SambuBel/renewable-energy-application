# Mapa de Proyectos de Energía Renovable

---

## 🛠️ Tecnologías principales

### Backend
- **Python 3.9+**
- **FastAPI** (framework de APIs)
- **Uvicorn** (servidor ASGI)
- **Pydantic** (modelado y validación de datos)

### Frontend
- **React 18+** (SPA)
- **TypeScript** (tipado estático)
- **Material UI (MUI v5)** (componentes de UI)
- **React Leaflet** (mapas interactivos)
- **Redux Toolkit** (manejo de estado global)
- **Redux Saga** (manejo de side effects y asincronía)
- **Axios** (cliente HTTP)

---


## 🚀 Requisitos

- **Node.js** >= 16.x
- **npm** o **yarn**
- **Python** >= 3.9
- **pip**

---

## ⚡ Instalación y Ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/renewable-energy-app.git
cd renewable-energy-app
```

---

### 2. Backend (FastAPI)

El backend está desarrollado en **Python** usando el framework **FastAPI**.

#### a. Instala dependencias

```bash
cd backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
```

#### b. Ejecuta el servidor

```bash
# Desde la raíz del proyecto
uvicorn app.main:app --reload
```

- La API estará disponible en: [http://localhost:8000](http://localhost:8000)
- Documentación interactiva: [http://localhost:8000/docs](http://localhost:8000/docs)

---

### 3. Frontend (React)

#### a. Instala dependencias

```bash
cd ../frontend
npm install
```

#### b. Ejecuta la app

```bash
npm run dev
```

- La app estará disponible en: [http://localhost:5173/](http://localhost:5173/)

---

## 🧪 Pruebas

- **Backend:** Puedes probar los endpoints desde `/docs` o usando herramientas como Postman/Insomnia.
- **Frontend:** Interactúa con el mapa, filtra proyectos, abre el listado lateral y selecciona proyectos para centrar el mapa.

---

## 🛠️ Notas de desarrollo

- El backend usa datos en memoria (no persistentes).
- El frontend consume la API en `http://localhost:8000/api/v1`.
- Puedes modificar los proyectos de ejemplo en `backend/app/data/sample_projects.py`.
---

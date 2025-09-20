# React + TypeScript + Vite

Esta aplicación es una prueba técnica para Finanzauto, construida con React, TypeScript y Vite. Incluye funcionalidades como paginación, búsqueda, creación y eliminación de usuarios, y utiliza Tailwind CSS para el diseño.

Se uso la API [DummyJson](https://dummyjson.com) debido a que la API proporcionada en la prueba técnica no estaba disponible para registro al momento de realizar la prueba técnica.

## Tecnologías Utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- DummyJSON API

## Estructura del Proyecto

- `src/components`: Componentes reutilizables como vistas, tablas y modales.
- `src/context`: Contexto global para manejar el estado de la aplicación.
- `src/pages`: Páginas principales de la aplicación.
- `src/model`: Modelos de datos de la aplicación.
- `src/utils`: Constantes de la aplicación.
- `src/api`: Funciones con las peticiones a la API.

## Ejecución del Proyecto

1. Clona el repositorio:
   `git clone https://github.com/felipeacx/FA-prueba-tecnica-frontend`
2. Navega al directorio del proyecto:
   `cd FA-prueba-tecnica-frontend`
3. Instala las dependencias:
   `npm install`
4. Inicia el servidor de desarrollo:
   `npm run dev`
5. Abre tu navegador y visita `http://localhost:5173` para ver la aplicación.

## Construcción para Producción

Para construir la aplicación para producción, ejecuta:
`npm run build`
El resultado se encontrará en el directorio `dist`.

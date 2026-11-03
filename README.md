# Sistema de Gestión de Solicitudes de Soporte Técnico

Proyecto académico de TECSUP desarrollado con React. La aplicación permitirá registrar, actualizar, eliminar y filtrar solicitudes de soporte mediante componentes funcionales y comunicación con props.

## Tecnologías

- React y React Hooks (`useState`, `useEffect`)
- Tailwind CSS
- Componentes locales inspirados en shadcn/ui
- Lucide React para iconos
- localStorage para persistencia

## Instalación y ejecución

```bash
npm install
npm start
```

La aplicación se abrirá normalmente en `http://localhost:3000`.

## Estructura principal

```text
src/
├── components/
│   └── ui/             # Componentes reutilizables estilo shadcn/ui
├── lib/utils.js        # Utilidad cn para combinar clases Tailwind
├── components/         # Componentes de solicitudes
├── App.js              # Estado general y comunicación mediante props
└── index.css           # Directivas y estilos base de Tailwind
Evidencias-TECSUP/     # Carpetas para las capturas de cada paso
```

## Componentes principales

- `App`: administra solicitudes, filtros, estadísticas y persistencia.
- `SolicitudForm`: registra nuevas solicitudes y valida los campos.
- `ListaSolicitudes`: recibe la lista filtrada y la muestra.
- `SolicitudItem`: presenta cada solicitud y ejecuta acciones mediante props.
- `FiltrosSolicitudes`: envía el filtro seleccionado hacia `App` mediante props.

## Evidencias

Las capturas reales deben guardarse en la carpeta `Evidencias-TECSUP`, organizadas por los seis pasos de la tarea. No se incluyen imágenes inventadas.

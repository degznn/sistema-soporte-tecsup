# Guía de evidencias para el laboratorio S11

Las capturas deben tomarse con la aplicación realmente ejecutándose. No se deben inventar resultados. Guarda cada imagen dentro de la carpeta del paso correspondiente.

## Paso 1. Configuración del proyecto

### Evidencia 1.1 Estructura del proyecto

- Archivo o pantalla: explorador de Visual Studio Code.
- Mostrar: `src/components`, `src/lib`, `Evidencias-TECSUP`, `tailwind.config.js`, `postcss.config.js` y `components.json`.
- Nombre: `Evidencia-1.1-estructura.png`.
- Descripción: En esta captura se muestra la estructura del proyecto, separando los componentes reutilizables, las utilidades, la configuración de estilos y las carpetas destinadas a las evidencias.

### Evidencia 1.2 Dependencias

- Archivo: `package.json`.
- Mostrar: React, Tailwind CSS, Lucide React, `class-variance-authority`, `clsx` y `tailwind-merge`.
- Nombre: `Evidencia-1.2-package-json.png`.
- Descripción: En el archivo `package.json` comprobé las dependencias utilizadas para construir la interfaz, combinar clases de Tailwind y mostrar iconos en el dashboard.

### Evidencia 1.3 Aplicación ejecutándose

- Ejecutar: `npm start`.
- Navegar a: `http://localhost:3000`.
- Mostrar: dashboard SoporteFlow, sidebar, estadísticas y bandeja vacía.
- Nombre: `Evidencia-1.3-dashboard-inicial.png`.
- Descripción: En esta captura comprobé que el proyecto se ejecuta correctamente y que el dashboard inicial muestra la identidad visual, la navegación y las tarjetas de estadísticas.

## Paso 2. Creación y comunicación entre componentes

### Evidencia 2.1 Componentes organizados

- Archivos: `src/App.js`, `src/components/SolicitudForm.js`, `src/components/ListaSolicitudes.js`, `src/components/SolicitudItem.js` y `src/components/FiltrosSolicitudes.js`.
- Mostrar: explorador y pestañas de los cinco archivos.
- Nombre: `Evidencia-2.1-componentes.png`.
- Descripción: Organicé la aplicación en componentes independientes para que cada uno tenga una responsabilidad clara y la comunicación se realice mediante props.

### Evidencia 2.2 Props desde App

- Archivo: `src/App.js`.
- Mostrar: las llamadas a `SolicitudForm`, `ListaSolicitudes` y `FiltrosSolicitudes` con sus props.
- Nombre: `Evidencia-2.2-props-app.png`.
- Descripción: En `App` se administra el estado general y se envían los datos y funciones a los componentes hijos mediante props.

### Evidencia 2.3 Props en los componentes hijos

- Archivos: `SolicitudForm.js`, `ListaSolicitudes.js`, `SolicitudItem.js` y `FiltrosSolicitudes.js`.
- Mostrar: las firmas de las funciones y el uso de `onSubmit`, `actualizarEstado`, `eliminarSolicitud` y `cambiarFiltro`.
- Nombre: `Evidencia-2.3-props-componentes.png`.
- Descripción: Cada componente recibe solamente la información y las funciones que necesita, lo que permite registrar, mostrar, actualizar, eliminar y filtrar solicitudes sin colocar todo el código en un único archivo.

## Paso 3. Registro de solicitudes

### Evidencia 3.1 Formulario completo

- En el navegador pulsa `Nueva solicitud`.
- Completar: título `No puedo acceder al correo`, descripción `El correo corporativo muestra un error al iniciar sesión`, solicitante `Diego Condori`, prioridad `Alta`.
- Nombre: `Evidencia-3.1-formulario-completo.png`.
- Descripción: Completé el formulario con los datos de una solicitud de soporte y seleccioné su prioridad antes de enviarla.

### Evidencia 3.2 Solicitud registrada

- Pulsar `Registrar solicitud`.
- Mostrar la tarjeta creada en la lista y las estadísticas actualizadas.
- Nombre: `Evidencia-3.2-solicitud-registrada.png`.
- Descripción: Al enviar el formulario, la solicitud se incorporó a la lista sin recargar la página y el total de solicitudes se actualizó automáticamente.

### Evidencia 3.3 Comunicación del registro

- Archivo: `src/components/SolicitudForm.js` y luego `src/App.js`.
- Mostrar `onSubmit(form)` y `agregarSolicitud(datos)`.
- Nombre: `Evidencia-3.3-comunicacion-registro.png`.
- Descripción: El formulario envía los datos a `App` mediante la prop `onSubmit`; luego `App` crea el registro y actualiza el estado general de la aplicación.

## Paso 4. Actualización y eliminación

### Evidencia 4.1 Cambio de estado

- En una tarjeta cambia `Pendiente` a `En proceso`.
- Mostrar la tarjeta y la estadística de solicitudes en proceso.
- Nombre: `Evidencia-4.1-estado-proceso.png`.
- Descripción: Cambié el estado de una solicitud desde su propia tarjeta y comprobé que el indicador visual y la estadística del dashboard se actualizaran inmediatamente.

### Evidencia 4.2 Solicitud resuelta

- Cambiar el selector a `Resuelta`.
- Mostrar el estado, el mensaje `Caso resuelto` y la estadística correspondiente.
- Nombre: `Evidencia-4.2-estado-resuelta.png`.
- Descripción: Actualicé la solicitud a estado resuelta y la interfaz mostró el indicador verde junto con el nuevo conteo del dashboard.

### Evidencia 4.3 Confirmación de eliminación

- Pulsar `Eliminar`.
- Capturar el cuadro de confirmación del navegador.
- Confirmar y tomar otra captura con la solicitud eliminada.
- Nombres: `Evidencia-4.3-confirmacion-eliminar.png` y `Evidencia-4.4-solicitud-eliminada.png`.
- Descripción: Antes de eliminar el registro, la aplicación solicita confirmación. Después de aceptar, la tarjeta desaparece y las estadísticas se recalculan.

## Paso 5. Comunicación entre componentes hermanos

### Evidencia 5.1 Filtros disponibles

- Mostrar los botones `Todas`, `Pendientes`, `En proceso` y `Resueltas`.
- Nombre: `Evidencia-5.1-filtros.png`.
- Descripción: El componente de filtros presenta los cuatro criterios disponibles para consultar las solicitudes según su estado.

### Evidencia 5.2 Solicitudes filtradas

- Crear o actualizar solicitudes para tener al menos un registro en cada estado.
- Tomar capturas usando cada filtro.
- Nombres: `Evidencia-5.2-pendientes.png`, `Evidencia-5.3-proceso.png`, `Evidencia-5.4-resueltas.png`.
- Descripción: Al seleccionar cada filtro, `App` recibe el criterio y envía a `ListaSolicitudes` únicamente los registros que coinciden. De esta forma se demuestra la comunicación indirecta entre componentes hermanos mediante el componente padre.

### Evidencia 5.5 Código del filtrado

- Archivo: `src/App.js`.
- Mostrar `filtro`, `setFiltro`, `filtradas` y la prop `cambiarFiltro`.
- Nombre: `Evidencia-5.5-logica-filtros.png`.
- Descripción: `App` conserva el criterio seleccionado, filtra la lista y entrega el resultado al componente encargado de mostrar las tarjetas.

## Paso 6. Validaciones, estilos y pruebas

### Evidencia 6.1 Validación de campos

- Abrir `Nueva solicitud` y pulsar `Registrar solicitud` sin completar el formulario.
- Mostrar los mensajes de título, descripción y solicitante.
- Nombre: `Evidencia-6.1-validaciones.png`.
- Descripción: Probé el envío del formulario vacío y la aplicación mostró mensajes claros para impedir que se registre una solicitud incompleta.

### Evidencia 6.2 Persistencia

- Registrar una solicitud.
- Actualizar la página con `Ctrl + R`.
- Mostrar que la solicitud continúa visible.
- Nombre: `Evidencia-6.2-localstorage.png`.
- Descripción: Después de actualizar el navegador, la solicitud continuó visible porque `App` guarda y recupera los datos mediante `localStorage` y `useEffect`.

### Evidencia 6.3 Dashboard final

- Mostrar las cuatro estadísticas con valores distintos de cero.
- Mostrar varias tarjetas con prioridades y estados diferentes.
- Nombre: `Evidencia-6.3-dashboard-final.png`.
- Descripción: La vista final reúne las solicitudes registradas, los estados, las prioridades y las estadísticas calculadas dinámicamente.

### Evidencia 6.4 Diseño responsive

- Abrir las herramientas del navegador con `F12`.
- Activar el modo dispositivo y probar una vista móvil.
- Mostrar el sidebar adaptado, las tarjetas y el formulario sin desbordamiento horizontal.
- Nombre: `Evidencia-6.4-responsive.png`.
- Descripción: Comprobé que la interfaz se adapte a una pantalla pequeña reorganizando el menú, las estadísticas, las tarjetas y el formulario.

### Evidencia 6.5 Tailwind, shadcn/ui y Lucide

- Mostrar `src/components/ui/button.js`, `card.js`, `badge.js` y las clases Tailwind utilizadas en `App.js`.
- Nombre: `Evidencia-6.5-estilos-componentes.png`.
- Descripción: En esta evidencia se observa el uso de clases Tailwind, componentes reutilizables de la carpeta `ui` e iconos de Lucide React para mantener una interfaz coherente.

## Lista de verificación final

- [ ] Registro con título, descripción, solicitante y prioridad.
- [ ] Validaciones visibles.
- [ ] Estados pendiente, en proceso y resuelta.
- [ ] Eliminación con confirmación.
- [ ] Filtros funcionales.
- [ ] Estadísticas dinámicas.
- [ ] Persistencia con `localStorage`.
- [ ] Comunicación mediante props.
- [ ] Tailwind CSS y componentes UI reutilizables.
- [ ] Diseño responsive.
- [ ] README actualizado.
- [ ] Capturas reales guardadas en `Evidencias-TECSUP`.

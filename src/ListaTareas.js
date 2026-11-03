import React from 'react';
import Tarea from './Tarea';
function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada }) { if (!tareas.length) return <p>No hay tareas para mostrar.</p>; return <ul>{tareas.map((tarea, index) => <Tarea key={index} tarea={tarea} onDelete={() => eliminarTarea(index)} onEdit={(texto) => editarTarea(index, texto)} onToggleCompletada={() => toggleCompletada(index)} />)}</ul>; }
export default ListaTareas;

import React, { useState } from 'react';
function TareaForm({ agregarTarea }) { const [texto, setTexto] = useState(''); const enviar = (e) => { e.preventDefault(); if (texto.trim()) { agregarTarea(texto.trim()); setTexto(''); } }; return <form onSubmit={enviar}><input type="text" placeholder="Añadir tarea..." value={texto} onChange={(e) => setTexto(e.target.value)} /><button type="submit">Agregar tarea</button></form>; }
export default TareaForm;

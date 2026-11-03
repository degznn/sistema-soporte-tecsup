import React from 'react';
function Filtros({ filtrarTareas, filtroActual }) { return <div className="filtros"><button className={filtroActual === 'Todas' ? 'activo' : ''} onClick={() => filtrarTareas('Todas')}>Todas</button><button className={filtroActual === 'Pendientes' ? 'activo' : ''} onClick={() => filtrarTareas('Pendientes')}>Pendientes</button><button className={filtroActual === 'Completadas' ? 'activo' : ''} onClick={() => filtrarTareas('Completadas')}>Completadas</button></div>; }
export default Filtros;

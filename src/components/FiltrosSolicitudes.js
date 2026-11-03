import React from 'react';
const filtros = [['todas', 'Todas'], ['pendiente', 'Pendientes'], ['proceso', 'En proceso'], ['resuelta', 'Resueltas']];
function FiltrosSolicitudes({ filtroActual, cambiarFiltro }) { return <div className="filters">{filtros.map(([id, label]) => <button key={id} className={filtroActual === id ? 'selected' : ''} onClick={() => cambiarFiltro(id)}>{label}</button>)}</div>; }
export default FiltrosSolicitudes;

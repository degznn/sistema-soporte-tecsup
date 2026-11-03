import React from 'react';
import { Inbox } from 'lucide-react';
import SolicitudItem from './SolicitudItem';

function ListaSolicitudes({ solicitudes, actualizarEstado, eliminarSolicitud }) {
  if (!solicitudes.length) return <div className="empty-state"><Inbox size={40} /><h3>No hay solicitudes en esta vista</h3><p>Registra un caso nuevo o cambia el filtro para consultar otros estados.</p></div>;
  return <div className="request-list">{solicitudes.map((solicitud) => <SolicitudItem key={solicitud.id} solicitud={solicitud} actualizarEstado={actualizarEstado} eliminarSolicitud={eliminarSolicitud} />)}</div>;
}
export default ListaSolicitudes;

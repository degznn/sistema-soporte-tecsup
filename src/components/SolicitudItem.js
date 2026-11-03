import React from 'react';
import { CalendarDays, CheckCircle2, CircleUserRound, Trash2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const estados = { pendiente: 'Pendiente', proceso: 'En proceso', resuelta: 'Resuelta' };
function SolicitudItem({ solicitud, actualizarEstado, eliminarSolicitud }) {
  return <article className="request-card"><div className="request-top"><div><div className="tag-row"><Badge className={`priority ${solicitud.prioridad}`}>{solicitud.prioridad}</Badge><Badge className={`status ${solicitud.estado}`}>{estados[solicitud.estado]}</Badge></div><h3>{solicitud.titulo}</h3></div><Button variant="outline" className="delete-button" onClick={() => eliminarSolicitud(solicitud.id)}><Trash2 size={15} /> Eliminar</Button></div><p className="description">{solicitud.descripcion}</p><div className="request-meta"><span><CircleUserRound size={15} /> {solicitud.solicitante}</span><span><CalendarDays size={15} /> {solicitud.fecha}</span></div><div className="request-actions"><label>Actualizar estado<select aria-label="Actualizar estado" value={solicitud.estado} onChange={(e) => actualizarEstado(solicitud.id, e.target.value)}><option value="pendiente">Pendiente</option><option value="proceso">En proceso</option><option value="resuelta">Resuelta</option></select></label>{solicitud.estado === 'resuelta' && <span className="resolved-note"><CheckCircle2 size={16} /> Caso resuelto</span>}</div></article>;
}
export default SolicitudItem;

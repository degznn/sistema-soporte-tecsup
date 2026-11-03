import React, { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { Button } from './ui/button';

function SolicitudForm({ onSubmit, onClose }) {
  const [form, setForm] = useState({ titulo: '', descripcion: '', solicitante: '', prioridad: 'media' });
  const [errores, setErrores] = useState({});
  const actualizar = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const enviar = (e) => { e.preventDefault(); const next = {}; if (!form.titulo.trim()) next.titulo = 'Ingresa un título.'; if (!form.descripcion.trim()) next.descripcion = 'Ingresa una descripción.'; if (!form.solicitante.trim()) next.solicitante = 'Ingresa el nombre del solicitante.'; setErrores(next); if (!Object.keys(next).length) onSubmit(form); };
  return <div className="modal-backdrop"><div className="modal" role="dialog" aria-modal="true"><div className="modal-header"><div><p className="eyebrow">NUEVO REGISTRO</p><h2>Registrar solicitud</h2></div><button className="icon-button" onClick={onClose} aria-label="Cerrar"><X size={20} /></button></div><form onSubmit={enviar} className="support-form"><Field label="Título" name="titulo" value={form.titulo} onChange={actualizar} error={errores.titulo} placeholder="Ej. No puedo acceder al correo" /><label>Descripción<textarea name="descripcion" value={form.descripcion} onChange={actualizar} placeholder="Describe brevemente el problema" /></label>{errores.descripcion && <Error text={errores.descripcion} />}<Field label="Nombre del solicitante" name="solicitante" value={form.solicitante} onChange={actualizar} error={errores.solicitante} placeholder="Ej. Diego Condori" /><label>Prioridad<select name="prioridad" value={form.prioridad} onChange={actualizar}><option value="baja">Baja</option><option value="media">Media</option><option value="alta">Alta</option></select></label><div className="form-actions"><Button type="button" variant="outline" onClick={onClose}>Cancelar</Button><Button type="submit">Registrar solicitud</Button></div></form></div></div>;
}
function Field({ label, name, value, onChange, error, placeholder }) { return <label>{label}<input name={name} value={value} onChange={onChange} placeholder={placeholder} />{error && <Error text={error} />}</label>; }
function Error({ text }) { return <span className="field-error"><AlertCircle size={14} /> {text}</span>; }
export default SolicitudForm;

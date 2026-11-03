import React, { useEffect, useMemo, useState } from 'react';
import { Headphones, LayoutDashboard, Plus, ShieldCheck, Ticket, Users } from 'lucide-react';
import SolicitudForm from './components/SolicitudForm';
import ListaSolicitudes from './components/ListaSolicitudes';
import FiltrosSolicitudes from './components/FiltrosSolicitudes';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import './App.css';

const STORAGE_KEY = 'tecsup-solicitudes-soporte';
const datosIniciales = [
  { id: 'demo-1', titulo: 'Computadora no enciende', descripcion: 'El equipo no responde al presionar el botón de encendido.', solicitante: 'Diego Condori', prioridad: 'alta', estado: 'pendiente', fecha: new Date().toLocaleDateString('es-PE') },
  { id: 'demo-2', titulo: 'Problema con la impresora', descripcion: 'La impresora aparece conectada, pero no imprime los documentos.', solicitante: 'María López', prioridad: 'media', estado: 'proceso', fecha: new Date().toLocaleDateString('es-PE') },
  { id: 'demo-3', titulo: 'Solicitud de acceso al correo', descripcion: 'Necesito recuperar el acceso a mi cuenta institucional.', solicitante: 'Carlos Quispe', prioridad: 'baja', estado: 'resuelta', fecha: new Date().toLocaleDateString('es-PE') },
];

function App() {
  const [solicitudes, setSolicitudes] = useState(() => {
    try {
      const guardadas = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (Array.isArray(guardadas) && guardadas.length) return guardadas;
      return process.env.NODE_ENV === 'test' ? [] : datosIniciales;
    } catch { return process.env.NODE_ENV === 'test' ? [] : datosIniciales; }
  });
  const [filtro, setFiltro] = useState('todas');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(solicitudes)); }, [solicitudes]);
  useEffect(() => { if (!mensaje) return undefined; const timer = setTimeout(() => setMensaje(''), 3000); return () => clearTimeout(timer); }, [mensaje]);

  const agregarSolicitud = (datos) => {
    const id = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : Date.now().toString();
    const nueva = { ...datos, id, fecha: new Date().toLocaleDateString('es-PE'), estado: 'pendiente' };
    setSolicitudes((actuales) => [nueva, ...actuales]);
    setMostrarFormulario(false);
    setMensaje('Solicitud registrada correctamente.');
  };
  const actualizarEstado = (id, estado) => { setSolicitudes((actuales) => actuales.map((s) => s.id === id ? { ...s, estado } : s)); setMensaje('Estado actualizado.'); };
  const eliminarSolicitud = (id) => { if (window.confirm('¿Deseas eliminar esta solicitud?')) { setSolicitudes((actuales) => actuales.filter((s) => s.id !== id)); setMensaje('Solicitud eliminada.'); } };

  const estadisticas = useMemo(() => ({ total: solicitudes.length, pendientes: solicitudes.filter((s) => s.estado === 'pendiente').length, proceso: solicitudes.filter((s) => s.estado === 'proceso').length, resueltas: solicitudes.filter((s) => s.estado === 'resuelta').length }), [solicitudes]);
  const filtradas = useMemo(() => filtro === 'todas' ? solicitudes : solicitudes.filter((s) => s.estado === filtro), [solicitudes, filtro]);

  return <div className="min-h-screen bg-neutral-100 text-neutral-900">
    <aside className="sidebar"><div className="brand"><div className="brand-mark"><Headphones size={22} /></div><div><strong>Soporte<span>Flow</span></strong><small>Centro de atención</small></div></div><nav><button className="active"><LayoutDashboard size={18} /> Dashboard</button><button><Ticket size={18} /> Solicitudes</button><button><Users size={18} /> Colaboradores</button></nav><div className="sidebar-footer"><ShieldCheck size={18} /> Atención organizada</div></aside>
    <main className="dashboard-main"><header className="topbar"><div><p className="eyebrow">CENTRO DE SOPORTE TÉCNICO</p><h1>Panel de solicitudes</h1><p className="subtitle">Administra las incidencias y acompaña cada caso hasta su resolución.</p></div><Button onClick={() => setMostrarFormulario(true)}><Plus size={17} /> Nueva solicitud</Button></header>
      {mensaje && <div className="toast" role="status">{mensaje}</div>}
      <section className="stats-grid"><StatCard label="Total solicitudes" value={estadisticas.total} icon={<Ticket />} tone="orange" /><StatCard label="Pendientes" value={estadisticas.pendientes} icon={<Headphones />} tone="blue" /><StatCard label="En proceso" value={estadisticas.proceso} icon={<LayoutDashboard />} tone="purple" /><StatCard label="Resueltas" value={estadisticas.resueltas} icon={<ShieldCheck />} tone="green" /></section>
      <Card className="requests-panel"><div className="panel-heading"><div><h2>Solicitudes recientes</h2><p>{filtradas.length} casos visibles en la bandeja</p></div><FiltrosSolicitudes filtroActual={filtro} cambiarFiltro={setFiltro} /></div><ListaSolicitudes solicitudes={filtradas} actualizarEstado={actualizarEstado} eliminarSolicitud={eliminarSolicitud} /></Card>
    </main>
    {mostrarFormulario && <SolicitudForm onSubmit={agregarSolicitud} onClose={() => setMostrarFormulario(false)} />}
  </div>;
}

function StatCard({ label, value, icon, tone }) { return <Card className="stat-card"><div className={`stat-icon ${tone}`}>{icon}</div><div><p>{label}</p><strong>{value}</strong></div></Card>; }
export default App;

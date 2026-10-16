import React, { useState } from 'react';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4 fw-bold">Contacto</h2>
        {enviado ? (
          <div className="alert alert-success text-center">¡Mensaje enviado con éxito! Gracias por ponerte en contacto.</div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 bg-white shadow-sm rounded border">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input 
                type="text" 
                className="form-control" 
                value={form.nombre} 
                onChange={(e) => setForm({...form, nombre: e.target.value})} 
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input 
                type="email" 
                className="form-control" 
                value={form.email} 
                onChange={(e) => setForm({...form, email: e.target.value})} 
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea 
                className="form-control" 
                rows="4" 
                value={form.mensaje} 
                onChange={(e) => setForm({...form, mensaje: e.target.value})} 
                required 
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
          </form>
        )}
      </div>
    </section>
  );
}
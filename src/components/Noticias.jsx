import React, { useState, useEffect } from 'react';

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('/noticias.json')
      .then((res) => res.json())
      .then((data) => setNoticias(data))
      .catch((err) => console.error('Error al cargar las noticias:', err));
  }, []);

  return (
    <section id="noticias" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Noticias Recientes</h2>
        <div className="row">
          {noticias.length > 0 ? (
            noticias.map((item) => (
              <div className="col-md-6 mb-4" key={item.id}>
                <div className="card p-4 shadow-sm h-100 border-0 bg-light">
                  <h4 className="fw-bold">{item.titulo}</h4>
                  <small className="text-muted mb-3">{item.fecha}</small>
                  <p className="mb-0">{item.contenido}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">Cargando noticias desde el archivo JSON...</p>
          )}
        </div>
      </div>
    </section>
  );
}
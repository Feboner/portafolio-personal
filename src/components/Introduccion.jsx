import React from 'react';

export default function Introduccion() {
  return (
    <section id="introduccion" className="py-5 text-center text-white" style={{ background: 'linear-gradient(135deg, #4e54c8, #8f94fb)' }}>
      <div className="container py-4">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Foto de perfil" 
          className="rounded-circle img-thumbnail mb-3 shadow"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <h1 className="fw-bold display-5">Apolo Febo</h1>
        <p className="lead">Futuro Ex-Estudiante de Informática | ESP Desarollo Software</p>
        <p className="col-lg-8 mx-auto mt-3">
          Hola esto es un portafolio mm portafolio portafolio portafolio
        </p>
      </div>
    </section>
  );
}
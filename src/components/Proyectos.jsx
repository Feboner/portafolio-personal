import React from 'react';

export default function Proyectos() {
  const listaProyectos = [
    {
      id: 1,
      titulo: "Portafolio Personal",
      descripcion: "Desarrollado con React y Bootstrap, integrando componentes personalizados y responsividad.",
      tecnologias: "React, Bootstrap, JS",
      enlace: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 2,
      titulo: "Sistema Backend en Spring Boot",
      descripcion: "Arquitectura de microservicios y gestión de bases de datos relacionales.",
      tecnologias: "Java, Spring Boot, MySQL",
      enlace: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 3,
      titulo: "Automatización de Scripts",
      descripcion: "Herramientas desarrolladas en Python y PowerShell para optimizar flujos de trabajo.",
      tecnologias: "Python, Git, PowerShell",
      enlace: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  return (
    <section id="proyectos" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Mis Proyectos</h2>
        <div className="row">
          {listaProyectos.map((proyecto) => (
            <div className="col-md-4 mb-4" key={proyecto.id}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{proyecto.titulo}</h5>
                  <p className="card-text text-muted">{proyecto.descripcion}</p>
                  <p className="small mb-4"><strong>Tecnologías:</strong> {proyecto.tecnologias}</p>
                  <a href={proyecto.enlace} target="_blank" rel="noreferrer" className="btn btn-dark mt-auto">Ver Repositorio</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
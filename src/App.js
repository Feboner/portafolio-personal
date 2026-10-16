import React from 'react';
import Navbar from './components/Navbar';
import Introduccion from './components/Introduccion';
import Proyectos from './components/Proyectos';
import Noticias from './components/Noticias';
import Contacto from './components/Contacto';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduccion />
      <Proyectos />
      <Noticias />
      <Contacto />
    </div>
  );
}

export default App;
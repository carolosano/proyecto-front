

import React from 'react';
import './Portfolio.css';
import proyecto1 from '../img/proyecto1.png';
import proyecto2 from '../img/proyecto2.jpg';
import proyecto3 from '../img/proyecto3.png';
import proyecto4 from '../img/proyecto4.jpg';
import proyecto5 from '../img/proyecto5.jpg';
import proyecto6 from '../img/proyecto6.png';
import proyecto7 from '../img/proyecto7.png';
import proyecto8 from '../img/proyecto8.png';


const Portfolio = () => {
  // Array con la información de los proyectos
  const projects = [
    
      {
        id: 1,
        title: 'Pieza para Redes',
        description: 'Branding de redes par marcas conocidas como La Mala, Aribau, The Laudry',
        imageUrl: proyecto1,
      },
      {
        id: 2,
        title: 'Tarjetas de Presentación',
        description: 'Tarjetas de presentación para estudio de Arquitectos Chayim',
        imageUrl: proyecto2,
      },
      {
        id: 3,
        title: 'Diseño de Identidad',
        description: 'Re-diseño de identidad (logo, paleta cromática, tipografía, identidad) para una cadena de restaurantes elite de comida Nornest',
        imageUrl: proyecto3,
      },
      {
        id: 4,
        title: 'Portada de Disco',
        description: 'Tapa y contratapa de discos musicales para diferentes artistas urbanos',
        imageUrl: proyecto4,
      },
      {
        id: 5,
        title: 'Afiche para películas/series/discos',
        description: 'Creación de afiches para la calle de distinguidas peliculas, series y discos musicales',
        imageUrl: proyecto5,
      },
      {
        id: 6,
        title: 'Diseño UX/UI',
        description: 'Maquetación,desarrollo y prototipo de aplicación para encontrar restaurantes por la zona',
        imageUrl: proyecto6,
      },
      {
        id: 7,
        title: 'Diseño editorial',
        description: 'Diseño exterior e interior de un recopilado de cuento de Edgar A. Poe',
        imageUrl: proyecto7,
      },
      {
        id: 8,
        title: 'Banners de artistas musicales',
        description: 'Armado de banners para la calle para branding de artistas musicales',
        imageUrl: proyecto8,
      },
    
    
  ];

  return (
    <div className="portfolio-section">
      <h1>Mi Portfolio</h1>
      <hr></hr>
      <div className="portfolio-cards">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

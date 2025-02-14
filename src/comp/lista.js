import React from "react";
import Destinos from '../db/seed'
import { useState } from "react";


const ListaDestinos = () => {
    const [index, setIndex] = useState(0);
    const destino = Destinos[index];
  
    return (
      <div className="lista-container">
        <h1>Votación para el viaje de fin de curso</h1>
        <div className="destino-card">
          <h2>{destino.Nombre}</h2>
          <img
            src={Destinos[index].Imagen}
            style={{ width: "400px", height: "300px", objectFit: "cover" }}
            />
            
          <p>{destino.Descripcion}</p>
          <p><strong>Precio:</strong> {destino.Precio}</p>
          <div className="buttons">
            <button onClick={() => setIndex(index - 1)} disabled={index === 0}>Anterior</button>
            <button onClick={() => setIndex(index + 1)} disabled={index === Destinos.length - 1}>Siguiente</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ListaDestinos;
import React, { useState } from "react";
import Destinos from "../db/seed";


const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido1: "",
    apellido2: "",
    dni: "",
    telefono: "",
    preferencia1: "",
    preferencia2: "",
    preferencia3: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido1, apellido2, dni, telefono, preferencia1, preferencia2, preferencia3 } = formData;
    if (!nombre || !apellido1 || !apellido2 || !dni || !telefono || !preferencia1 || !preferencia2 || !preferencia3) {
      alert("Por favor, rellena todos los campos");
    } else {
      alert("Votación enviada con éxito");
    }
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      apellido1: "",
      apellido2: "",
      dni: "",
      telefono: "",
      preferencia1: "",
      preferencia2: "",
      preferencia3: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
      <input type="text" name="apellido1" placeholder="Primer Apellido" value={formData.apellido1} onChange={handleChange} required />
      <input type="text" name="apellido2" placeholder="Segundo Apellido" value={formData.apellido2} onChange={handleChange} required />
      <input type="text" name="dni" placeholder="DNI" value={formData.dni} onChange={handleChange} required />
      <input type="number" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
      
      
      
      
      <select name="preferencia1" value={formData.preferencia1} onChange={handleChange} required>
        <option value="">Selecciona un destino</option>
        {Destinos.map((destino) => (
          <option key={destino.Nombre} value={destino.Nombre}>{destino.Nombre}</option>
        ))}
      </select>
      <select name="preferencia2" value={formData.preferencia2} onChange={handleChange} required disabled={!formData.preferencia1}>
        <option value="">Selecciona un destino</option>
        {Destinos.filter((destino) => destino.Nombre !== formData.preferencia1).map((destino) => (
          <option key={destino.Nombre} value={destino.Nombre} >{destino.Nombre}</option>
        ))}
      </select>
      <select name="preferencia3" value={formData.preferencia3} onChange={handleChange} required disabled={!formData.preferencia2}d>
        <option value="">Selecciona un destino</option>
        {Destinos.filter((destino) => destino.Nombre !== formData.preferencia1 && destino.Nombre !== formData.preferencia2).map((destino) => (
          <option key={destino.Nombre} value={destino.Nombre}>{destino.Nombre}</option>
        ))}
      </select>
      
      
      <button type="submit">Enviar</button>
      <button type="button" onClick={handleReset}>Borrar</button>
    
    
    
    </form>
  );
};

export default Formulario;

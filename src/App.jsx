import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [aula, setAula] = useState("Aula 101");
  const [reservas, setReservas] = useState([]);

  //  Cargar reservas guardadas (solo una vez)
  useEffect(() => {
    try {
      const data = localStorage.getItem("reservas");
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) {
          setReservas(parsed);
        }
      }
    } catch (error) {
      console.error("Error leyendo reservas del localStorage:", error);
      localStorage.removeItem("reservas");
    }
  }, []);

  //  Guardar reservas cada vez que cambian (de forma segura)
  useEffect(() => {
    if (reservas.length > 0) {
      localStorage.setItem("reservas", JSON.stringify(reservas));
    }
  }, [reservas]);

  const manejarReserva = (e) => {
    e.preventDefault();

    if (!nombre || !fecha || !hora || !aula) {
      alert("Por favor completa todos los campos antes de continuar.");
      return;
    }

    const nuevaReserva = {
      id: Date.now(),
      nombre,
      fecha,
      hora,
      aula,
    };

    const nuevas = [...reservas, nuevaReserva];
    setReservas(nuevas);

    //  Guardar inmediatamente
    localStorage.setItem("reservas", JSON.stringify(nuevas));

    setNombre("");
    setFecha("");
    setHora("");
    setAula("Aula 101");
  };

  return (
    <div className="container">
      <h1>Sistema de Reservas Universitarias</h1>

      <div className="reserva-section">
        <h2>Crear Reserva</h2>
        <form onSubmit={manejarReserva}>
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />

          <select value={aula} onChange={(e) => setAula(e.target.value)}>
            <option value="Aula 101">Aula 101</option>
            <option value="Laboratorio 2">Laboratorio 2</option>
            <option value="Sala de Reuniones">Sala de Reuniones</option>
          </select>

          <button type="submit">Reservar</button>
        </form>
      </div>

      <div className="reservas-lista">
        <h2>Mis Reservas</h2>
        {reservas.length === 0 ? (
          <p>No tienes reservas registradas.</p>
        ) : (
          <ul>
            {reservas.map((r) => (
              <li key={r.id}>
                <strong>{r.nombre}</strong> reservó <em>{r.aula}</em> el{" "}
                {r.fecha} a las {r.hora}.
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

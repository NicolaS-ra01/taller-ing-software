import React from 'react'

const ESPACIOS = [
  { id: 'aula-101', nombre: 'Aula 101', tipo: 'Aula', capacidad: 30, img: '/images/aula.png' },
  { id: 'lab-2', nombre: 'Laboratorio 2', tipo: 'Laboratorio', capacidad: 20, img: '/images/lab.png' }
]

export default function EspaciosList(){
  return (
    <div>
      <h2>Espacios</h2>
      {ESPACIOS.map(s => (
        <div key={s.id} className="card">
          <img src={s.img} alt={s.nombre} width={120} />
          <div>
            <h3>{s.nombre}</h3>
            <p>{s.tipo} - Capacidad: {s.capacidad}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function ReservasList(){
  const [reservas, setReservas] = useLocalStorage('reservas', [])

  function cancelar(id){
    if(!confirm('¿Cancelar reserva?')) return
    setReservas(reservas.filter(r => r.id !== id))
  }

  return (
    <div>
      <h2>Mis Reservas</h2>
      {reservas.length === 0 && <p>No tienes reservas</p>}
      <ul>
        {reservas.map(r => (
          <li key={r.id}>
            {r.nombre} — {r.fecha} {r.hora} — {r.espacioId}
            <button onClick={() => cancelar(r.id)}>Cancelar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
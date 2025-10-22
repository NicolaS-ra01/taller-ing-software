import React, { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { esFechaPasada, existeReservaDuplicada } from '../utils/reservas'

const ESPACIOS = [
  { id: 'aula-101', nombre: 'Aula 101' },
  { id: 'lab-2', nombre: 'Laboratorio 2' }
]

export default function ReservaForm(){
  const [reservas, setReservas] = useLocalStorage('reservas', [])
  const [form, setForm] = useState({ nombre: '', fecha: '', hora: '', espacioId: ESPACIOS[0].id })
  const [error, setError] = useState(null)

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    setError(null)
    if(!form.nombre || !form.fecha || !form.hora) return setError('Completa todos los campos')
    if(esFechaPasada(form.fecha, form.hora)) return setError('No puedes reservar en una fecha pasada')
    const nueva = { id: Date.now().toString(), ...form }
    if(existeReservaDuplicada(reservas, nueva)) return setError('Ya existe una reserva para ese espacio en esa fecha y hora')
    setReservas([...reservas, nueva])
    setForm({ nombre: '', fecha: '', hora: '', espacioId: ESPACIOS[0].id })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Reserva</h2>
      {error && <div className="error">{error}</div>}
      <input name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} />
      <input name="fecha" type="date" value={form.fecha} onChange={handleChange} />
      <input name="hora" type="time" value={form.hora} onChange={handleChange} />
      <select name="espacioId" value={form.espacioId} onChange={handleChange}>
        {ESPACIOS.map(s => <option key={s.id} value={s.id}>{s.nombre}</option>)}
      </select>
      <button type="submit">Reservar</button>
    </form>
  )
}
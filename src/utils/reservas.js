export function esFechaPasada(fechaStr, horaStr) {
  const now = new Date()
  const [year, month, day] = fechaStr.split('-').map(Number)
  const [hour, minute] = horaStr.split(':').map(Number)
  const fecha = new Date(year, month - 1, day, hour || 0, minute || 0)
  return fecha < now
}

export function existeReservaDuplicada(listaReservas, nueva) {
  return listaReservas.some(r => r.espacioId === nueva.espacioId && r.fecha === nueva.fecha && r.hora === nueva.hora)
}

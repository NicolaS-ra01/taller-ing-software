import { existeReservaDuplicada } from '../src/utils/reservas'

test('detecta reserva duplicada', () => {
  const lista = [{ espacioId: 'aula-101', fecha: '2025-10-20', hora: '10:00' }]
  const nueva = { espacioId: 'aula-101', fecha: '2025-10-20', hora: '10:00' }
  expect(existeReservaDuplicada(lista, nueva)).toBe(true)
})

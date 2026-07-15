import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Producto } from '../types'

function Home() {
  // Guardamos la lista de productos que viene de Supabase
  const [productos, setProductos] = useState<Producto[]>([])
  // Sabemos si todavía está cargando
  const [cargando, setCargando] = useState(true)

  // useEffect se ejecuta una vez cuando el componente aparece en pantalla
  useEffect(() => {
    obtenerProductos()
  }, [])

  async function obtenerProductos() {
    const { data, error } = await supabase
      .from('Productos')
      .select('*')

    if (error) {
      console.error('Error al traer productos:', error)
    } else {
      setProductos(data)
    }
    setCargando(false)
  }

  if (cargando) {
    return <p className="p-10 text-xl">Cargando productos...</p>
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-teal-600 mb-6">Deluxe Cali</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
        <div key={producto.Id} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{producto.Nombre}</h2>
            <p className="text-gray-600">{producto.Descripcion}</p>
            <p className="text-teal-600 font-bold mt-2">
              ${producto.Precio.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
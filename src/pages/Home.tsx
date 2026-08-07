import { useState } from 'react'
import type { Producto } from '../types'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Carrito from '../components/Carrito'

type ItemCarrito = {
  id: number
  Nombre: string
  Precio: number
  cantidad: number
}

const productosFalsos: Producto[] = [
  {
    id: 1,
    Nombre: 'Vestido Monarca',
    Precio: 82000,
    Descripcion: 'Vestido para ocasiones especiales',
    Imagen: null,
    Categoria: 'Ropa mujer',
    Disponibilidad: true
  },
  {
    id: 2,
    Nombre: 'Camisa Urbana',
    Precio: 65000,
    Descripcion: 'Camisa casual para hombre',
    Imagen: null,
    Categoria: 'Ropa hombre',
    Disponibilidad: true
  },
  {
    id: 3,
    Nombre: 'Blusa Elegante',
    Precio: 55000,
    Descripcion: 'Blusa para uso diario o eventos',
    Imagen: null,
    Categoria: 'Ropa mujer',
    Disponibilidad: true
  }
]

function Home() {
  const [carritoAbierto, setCarritoAbierto] = useState(false)
  const [items, setItems] = useState<ItemCarrito[]>([])

  function agregarAlCarrito(producto: Producto) {
    setItems((prev) => {
      const existe = prev.find((i) => i.id === producto.id)
      if (existe) {
        return prev.map((i) =>
          i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
        )
      }
      return [...prev, { id: producto.id, Nombre: producto.Nombre, Precio: producto.Precio, cantidad: 1 }]
    })
    setCarritoAbierto(true)
  }

  function eliminarDelCarrito(id: number) {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  function cambiarCantidad(id: number, delta: number) {
    setItems((prev) =>
      prev
        .map((i) => i.id === id ? { ...i, cantidad: i.cantidad + delta } : i)
        .filter((i) => i.cantidad > 0)
    )
  }

  return (
    <div className="min-h-screen bg-[#111111]">

      <header className="border-b border-[#2a2a2a] px-6 py-4 flex justify-between items-center">
        <h1 className="font-marca text-2xl text-[#2dd4bf] tracking-widest">
          DELUXE CALI
        </h1>
        <nav className="flex gap-6 text-sm text-gray-400 items-center">
          <a href="#" className="hover:text-[#2dd4bf] transition-colors">Mujer</a>
          <a href="#" className="hover:text-[#2dd4bf] transition-colors">Hombre</a>
          <a href="#" className="hover:text-[#2dd4bf] transition-colors">Contacto</a>
          <button
            onClick={() => setCarritoAbierto(true)}
            className="text-[#2dd4bf] hover:text-white transition-colors"
          >
            🛍 {items.length > 0 && `(${items.length})`}
          </button>
        </nav>
      </header>

      <Hero />

      <main id="catalogo" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-gray-400 text-sm tracking-widest uppercase mb-8">
          Colección disponible
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productosFalsos.map((producto) => (
            <div
              key={producto.id}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden hover:border-[#2dd4bf] transition-colors"
            >
              <div className="bg-[#222222] h-64 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Sin imagen</span>
              </div>

              <div className="p-4">
                <p className="text-xs text-[#2dd4bf] tracking-widest uppercase mb-1">
                  {producto.Categoria}
                </p>
                <h3 className="text-white font-semibold text-lg">
                  {producto.Nombre}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {producto.Descripcion}
                </p>
                <p className="text-[#2dd4bf] font-bold text-xl mt-3">
                  ${producto.Precio.toLocaleString('es-CO')}
                </p>

                <button
                  onClick={() => agregarAlCarrito(producto)}
                  className="mt-4 w-full bg-[#2dd4bf] text-black font-semibold py-2 rounded hover:bg-[#14b8a6] transition-colors"
                >
                  Agregar al pedido
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {carritoAbierto && (
        <Carrito
          items={items}
          onCerrar={() => setCarritoAbierto(false)}
          onEliminar={eliminarDelCarrito}
          onCambiarCantidad={cambiarCantidad}
        />
      )}

    </div>
  )
}

export default Home

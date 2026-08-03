import type { Producto } from '../types'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
// Datos temporales mientras conectamos la base de datos
const productosFalsos: Producto[] = [
  {
    id: 1,
    Nombre: 'Vestido Monarca',
    Precio: 82000,
    Descripcion: 'Vestido para ocasiones especiales',
    Imagen: null,
    Categoria: 'Ropa mujer',
    Disponibilidad: false
  },
  {
    id: 2,
    Nombre: 'Camisa Urbana',
    Precio: 65000,
    Descripcion: 'Camisa casual para hombre',
    Imagen: null,
    Categoria: 'Ropa hombre',
    Disponibilidad: false
  },
  {
    id: 3,
    Nombre: 'Blusa Elegante',
    Precio: 55000,
    Descripcion: 'Blusa para uso diario o eventos',
    Imagen: null,
    Categoria: 'Ropa mujer',
    Disponibilidad: false
  }
]

function Home() {
  return (
    <div className="min-h-screen bg-[#111111]">

      {/* Header */}
      <header className="border-b border-[#2a2a2a] px-6 py-4 flex justify-between items-center">
        <h1 className="font-marca text-2xl text-[#2dd4bf] tracking-widest">
          DELUXE CALI
        </h1>
        <nav className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-[#2dd4bf] transition-colors">Mujer</a>
          <a href="#" className="hover:text-[#2dd4bf] transition-colors">Hombre</a>
          <a href="#" className="hover:text-[#2dd4bf] transition-colors">Contacto</a>
        </nav>
      </header>
       <Hero />
      {/* Catálogo */}
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
              {/* Imagen placeholder */}
              <div className="bg-[#222222] h-64 flex items-center justify-center">
                <span className="text-gray-600 text-sm">Sin imagen</span>
              </div>

              {/* Info del producto */}
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

                <button className="mt-4 w-full bg-[#2dd4bf] text-black font-semibold py-2 rounded hover:bg-[#14b8a6] transition-colors">
                  Pedir por WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
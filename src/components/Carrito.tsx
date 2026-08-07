type ItemCarrito = {
  id: number
  Nombre: string
  Precio: number
  cantidad: number
}

type Props = {
  items: ItemCarrito[]
  onCerrar: () => void
  onEliminar: (id: number) => void
  onCambiarCantidad: (id: number, delta: number) => void
}

function Carrito({ items, onCerrar, onEliminar, onCambiarCantidad }: Props) {
  const total = items.reduce((acc, item) => acc + item.Precio * item.cantidad, 0)

  function enviarWhatsApp() {
    const lineas = items.map(
      (item) => `• ${item.Nombre} x${item.cantidad} - $${(item.Precio * item.cantidad).toLocaleString('es-CO')}`
    )
    const mensaje = `Hola, quiero hacer un pedido:\n\n${lineas.join('\n')}\n\nTotal: $${total.toLocaleString('es-CO')}`
    const url = `https://wa.me/573000000000?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
  }

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-[#1a1a1a] border-l border-[#2a2a2a] z-50 flex flex-col">

      <div className="flex justify-between items-center px-6 py-4 border-b border-[#2a2a2a]">
        <h2 className="text-white font-semibold">Tu pedido</h2>
        <button onClick={onCerrar} className="text-gray-400 hover:text-white text-xl">✕</button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
        {items.length === 0 ? (
          <p className="text-gray-500 text-sm text-center mt-10">
            No hay productos en tu pedido
          </p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b border-[#2a2a2a] pb-4">

              <div className="flex-1">
                <p className="text-white text-sm font-semibold">{item.Nombre}</p>
                <p className="text-[#2dd4bf] text-xs mt-1">
                  ${(item.Precio * item.cantidad).toLocaleString('es-CO')}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onCambiarCantidad(item.id, -1)}
                  className="w-6 h-6 bg-[#2a2a2a] text-white rounded hover:bg-[#3a3a3a] text-sm"
                >
                  −
                </button>
                <span className="text-white text-sm w-4 text-center">{item.cantidad}</span>
                <button
                  onClick={() => onCambiarCantidad(item.id, +1)}
                  className="w-6 h-6 bg-[#2a2a2a] text-white rounded hover:bg-[#3a3a3a] text-sm"
                >
                  +
                </button>
                <button
                  onClick={() => onEliminar(item.id)}
                  className="ml-1 text-gray-600 hover:text-red-400 transition-colors"
                  title="Eliminar"
                >
                  🗑
                </button>
              </div>

            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="px-6 py-4 border-t border-[#2a2a2a]">
          <div className="flex justify-between mb-4">
            <span className="text-gray-400">Total</span>
            <span className="text-[#2dd4bf] font-bold text-lg">
              ${total.toLocaleString('es-CO')}
            </span>
          </div>
          <button
            onClick={enviarWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded transition-colors"
          >
            Pedir por WhatsApp 📲
          </button>
        </div>
      )}

    </div>
  )
}

export default Carrito
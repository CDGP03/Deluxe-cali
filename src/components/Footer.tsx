function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] mt-20 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* Marca */}
        <div>
          <h3 className="font-marca text-xl text-[#2dd4bf] tracking-widest mb-2">
            DELUXE CALI
          </h3>
          <p className="text-gray-500 text-sm max-w-xs">
            Moda para hombre y mujer. Calidad y estilo desde Cali, Colombia.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-12">
          <div>
            <p className="text-white text-sm font-semibold mb-3">Categorías</p>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#2dd4bf] transition-colors">Mujer</a></li>
              <li><a href="#" className="hover:text-[#2dd4bf] transition-colors">Hombre</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white text-sm font-semibold mb-3">Contacto</p>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#2dd4bf] transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-[#2dd4bf] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#2a2a2a]">
        <p className="text-gray-600 text-xs text-center">
          © 2026 Deluxe Cali — Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
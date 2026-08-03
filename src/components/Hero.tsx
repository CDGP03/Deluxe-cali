function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">

      <p className="text-[#2dd4bf] text-xs tracking-[0.3em] uppercase mb-4">
        Nueva colección 2026
      </p>

      <h2 className="font-marca text-5xl md:text-7xl text-white leading-tight mb-6">
        Estilo que <br />
        <span className="text-[#2dd4bf]">habla por ti</span>
      </h2>

      <p className="text-gray-400 text-lg max-w-md mb-10">
        Moda para hombre y mujer. Piezas únicas con carácter,
        directas desde Cali para todo Colombia.
      </p>

      
       <a href="#catalogo"
        className="bg-[#2dd4bf] text-black font-semibold px-8 py-3 rounded hover:bg-[#14b8a6] transition-colors tracking-wide"
      >
        Ver colección
      </a>

    </section>
  )
}

export default Hero
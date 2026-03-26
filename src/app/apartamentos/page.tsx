const apartamentos = [
  {
    id: 1,
    nombre: "Apartamento 1 – Planta Baja",
    descripcion:
      "Apartamento en planta baja del edificio, compuesto de salón cocina, 2 dormitorios, baño completo y patio interior. Dormitorio 1: Cama de 135 con mesillas y armario de 2 puertas y cajones, salida patio interior, aire acondicionado, ventilador de techo. Dormitorio 2: Cama de 150 con mesillas, armario empotrado muy amplio, aire acondicionado, ventilador de techo. Salón Cocina: Mesa para 4 comensales, sofá, sillón, TV, aire acondicionado, ventilador de techo, cocina con vitrocerámica, microondas, horno, lavadora, frigorífico, tostador, cafetera de cápsulas y fregadero. Baño: Completo: plato de ducha, mueble de lavabo, bidé y WC.",
    idealPara: ["Parejas", "Familias con niños"],
    equipamiento: [
      "Aire acondicionado",
      "Ventilador de techo",
      "TV",
      "Cocina completa",
      "Lavadora",
      "Wi-Fi",
      "Patio interior",
      "Cafetera de cápsulas",
    ],
    capacidad: "4 personas",
    dormitorios: 2,
  },
  {
    id: 2,
    nombre: "Apartamento 2 – Primera Planta",
    descripcion:
      "Apartamento en planta primera del edificio, compuesto de salón cocina, 2 dormitorios, baño completo. Dormitorio 1: Cama de 135 con mesilla y armario de 2 puertas y cajones, aire acondicionado, ventilador de techo. Dormitorio 2: Cama de 150 con mesillas, armario empotrado muy amplio, aire acondicionado, ventilador de techo. Salón Cocina: Mesa para 4 comensales, barra con 2 taburetes, sofá, sillón, TV, aire acondicionado, ventilador de techo, cocina con vitrocerámica, microondas, horno, lavadora, frigorífico, tostador, cafetera de cápsulas y fregadero. Baño Completo: plato de ducha, mueble de lavabo, bidé y WC.",
    idealPara: ["Parejas", "Familias"],
    equipamiento: [
      "Aire acondicionado",
      "Ventilador de techo",
      "TV",
      "Cocina completa",
      "Lavadora",
      "Wi-Fi",
      "Barra con taburetes",
      "Cafetera de cápsulas",
    ],
    capacidad: "4 personas",
    dormitorios: 2,
  },
  {
    id: 3,
    nombre: "Apartamento 3 – Segunda Planta",
    descripcion:
      "Apartamento en planta segunda del edificio, compuesto de salón cocina, 2 dormitorios, baño completo. Dormitorio 1: Cama de 135 con mesilla y armario de 2 puertas y cajones, aire acondicionado, ventilador de techo. Dormitorio 2: Cama de 150 con mesillas, armario empotrado muy amplio, aire acondicionado, ventilador de techo. Salón Cocina: Mesa para 4 comensales, barra con 2 taburetes, sofá, sillón, TV, aire acondicionado, ventilador de techo, cocina con vitrocerámica, microondas, horno, lavadora, frigorífico, tostador, cafetera de cápsulas y fregadero. Baño Completo: plato de ducha, mueble de lavabo, bidé y WC.",
    idealPara: ["Parejas", "Familias"],
    equipamiento: [
      "Aire acondicionado",
      "Ventilador de techo",
      "TV",
      "Cocina completa",
      "Lavadora",
      "Wi-Fi",
      "Barra con taburetes",
      "Cafetera de cápsulas",
    ],
    capacidad: "4 personas",
    dormitorios: 2,
  },
  {
    id: 4,
    nombre: "Apartamento 4 – Tercera Planta (Ático)",
    descripcion:
      "Apartamento en planta tercera del edificio, compuesto de salón cocina, 1 dormitorio, baño y terraza con vistas al casco histórico de Moratalla y al castillo. Dormitorio 1: Cama de 135 con mesilla y armario de 2 puertas y cajones, ventilador de techo. Salón Cocina: Mesa para 2 comensales, sofá, TV, aire acondicionado, ventilador de techo, cocina con vitrocerámica, microondas, horno, lavadora, frigorífico, tostador, cafetera de cápsulas y fregadero. Baño: Plato de ducha, mueble de lavabo y WC.",
    idealPara: ["Parejas", "Escapadas románticas"],
    equipamiento: [
      "Aire acondicionado",
      "Ventilador de techo",
      "TV",
      "Cocina completa",
      "Lavadora",
      "Wi-Fi",
      "Terraza con vistas al castillo",
      "Cafetera de cápsulas",
    ],
    capacidad: "2 personas",
    dormitorios: 1,
  },
];

export default function ApartamentosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-brown/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/90 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-[1920px] mx-auto px-6 lg:px-20 pb-16">
          <p className="font-balotro text-[13px] text-cream/60 uppercase tracking-wider mb-4">
            apartamentos turísticos en moratalla
          </p>
          <h1 className="font-averia font-bold text-cream text-[42px] lg:text-[49px] leading-tight max-w-[974px]">
            Cuatro espacios únicos en el casco antiguo, junto al Castillo.
          </h1>
          <p className="font-grillmaster text-[17px] text-cream/70 max-w-[492px] mt-6">
            Descubre nuestros apartamentos totalmente equipados en la zona
            histórica de El Cañico, ideales para escapadas rurales en pareja,
            familia o con amigos.
          </p>
        </div>
      </section>

      {/* Apartments list */}
      {apartamentos.map((apt, index) => (
        <section
          key={apt.id}
          className={`py-20 lg:py-32 ${
            index % 2 === 0 ? "bg-cream" : "bg-brown"
          }`}
        >
          <div className="max-w-[1920px] mx-auto px-6 lg:px-20">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                index % 2 !== 0 ? "text-cream" : "text-brown"
              }`}
            >
              {/* Images */}
              <div
                className={`grid grid-cols-2 gap-4 ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <div className="space-y-4">
                  <div
                    className={`w-full aspect-[443/415] rounded-sm ${
                      index % 2 === 0 ? "bg-brown/10" : "bg-cream/10"
                    }`}
                  />
                  <div
                    className={`w-full aspect-[444/570] rounded-sm ${
                      index % 2 === 0 ? "bg-brown/10" : "bg-cream/10"
                    }`}
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <div
                    className={`w-full aspect-[445/570] rounded-sm ${
                      index % 2 === 0 ? "bg-brown/10" : "bg-cream/10"
                    }`}
                  />
                  <div
                    className={`w-full aspect-[443/415] rounded-sm ${
                      index % 2 === 0 ? "bg-brown/10" : "bg-cream/10"
                    }`}
                  />
                </div>
              </div>

              {/* Info */}
              <div>
                <h2 className="font-averia font-bold text-[32px] lg:text-[40px] leading-tight mb-6">
                  {apt.nombre}
                </h2>

                <div className="flex flex-wrap gap-4 mb-6">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-[13px] font-balotro uppercase tracking-wider ${
                      index % 2 === 0
                        ? "bg-brown/10 text-brown"
                        : "bg-cream/10 text-cream"
                    }`}
                  >
                    {apt.dormitorios} dormitorio{apt.dormitorios > 1 ? "s" : ""}
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-[13px] font-balotro uppercase tracking-wider ${
                      index % 2 === 0
                        ? "bg-brown/10 text-brown"
                        : "bg-cream/10 text-cream"
                    }`}
                  >
                    {apt.capacidad}
                  </span>
                </div>

                <p className="font-grillmaster text-[17px] leading-relaxed opacity-80 mb-8">
                  {apt.descripcion}
                </p>

                {/* Ideal para */}
                <div className="mb-6">
                  <h3 className="font-grillmaster text-[17px] font-bold mb-3">
                    Ideal para:
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {apt.idealPara.map((item) => (
                      <span
                        key={item}
                        className={`px-4 py-2 rounded-sm text-[13px] font-balotro uppercase tracking-wider ${
                          index % 2 === 0
                            ? "bg-orange/20 text-brown"
                            : "bg-orange/30 text-cream"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Equipamiento */}
                <div className="mb-8">
                  <h3 className="font-grillmaster text-[17px] font-bold mb-3">
                    Equipamiento incluido:
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {apt.equipamiento.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="opacity-60 flex-shrink-0"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span className="font-grillmaster text-[15px] opacity-70">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="/contacto"
                  className={`inline-flex items-center justify-center px-8 py-3 font-balotro text-[13px] uppercase tracking-wider rounded-sm transition-colors ${
                    index % 2 === 0
                      ? "bg-brown text-cream hover:bg-brown/90"
                      : "bg-cream text-brown hover:bg-cream/90"
                  }`}
                >
                  Reservar
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

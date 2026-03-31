export default function ApartamentosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-cream pt-16 lg:pt-24 pb-0">
        {/* Text content */}
        <div className="flex flex-col items-center text-center px-6 lg:px-12">
          <p className="font-balotro text-[12.91px] text-brown uppercase tracking-wider mb-4">
            Apartamentos turísticos en Moratalla
          </p>
          <h1 className="font-averia font-bold text-[49.22px] leading-[50px] text-brown uppercase mb-6 max-w-[950px]">
            Cuatro espacios únicos en el casco antiguo, junto al Castillo.
          </h1>
          <p className="font-grillmaster text-[16.91px] text-brown mb-4 max-w-[492px]">
            Descubre nuestros apartamentos totalmente equipados en la zona histórica de El Cañico, ideales para escapadas rurales en pareja, familia o con amigos.
          </p>
        </div>

        {/* Hero image */}
        <img src="/images/unsplash_jUQclDhyIAI (8).jpg" alt="" className="mt-12 w-full h-[750px] object-cover" />
      </section>

      {/* LA FUENTE - Apartment Section */}
      <section className="bg-cream px-6 lg:px-12 pt-16 pb-0">
        {/* Two columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left column */}
          <div className="w-full lg:w-1/2">
            {/* Title SVG */}
            <img src="/icons/Group1.svg" alt="La Fuente" className="w-auto mb-20" />
            {/* Description */}
            <div className="max-w-[550px]">
              <p className="font-grillmaster text-[16.91px] text-brown mb-6">
                Apartamento en planta baja del edificio, compuesto de salón cocina, 2 dormitorios, baño completo y patio interior.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 1:</strong> Cama de 135 con mesillas y armario de 2 puertas y cajones, salida patio interior, aire acondicionado, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 2:</strong> Cama de 150 con mesillas, armario empotrado muy amplio, aire acondicionado, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-3">
                <strong>Salón Cocina:</strong> Mesa para 4 comensales, sofá, sillón, TV, aire acondicionado, ventilador de techo, cocina con vitrocerámica, microondas, horno, lavadora, frigorífico, tostador, cafetera de cápsulas y fregadero.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-8">
                <strong>Baño:</strong> Completo: plato de ducha, mueble de lavabo, bidé y WC.
              </p>
            </div>

            {/* Equipment */}
            <p className="font-grillmaster text-[16.91px] text-brown mb-6 mt-15">Equipamiento incluido:</p>
            <div className="flex flex-col gap-2">
              {[
                ["WIFI", "Termo eléctrico independiente", "Ropa para camas"],
                ["Menaje de cocina", "Toallas para baño", "Zona de almacenaje en armario de pasillo"],
                ["Posibilidad parque cuna", "2 sillas supletorias en armario pasillo"],
              ].map((row, rowIdx) => (
                <div key={rowIdx} className="flex gap-2">
                  {row.map((item, colIdx) => {
                    const i = rowIdx * 3 + colIdx;
                    return (
                      <span
                        key={item}
                        className="font-grillmaster text-[16.91px] text-cream px-3 py-1"
                        style={{ backgroundColor: "#99B0C6", borderRadius: i % 2 === 0 ? "0px" : "9999px" }}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Stats + button row */}
            <div className="flex items-center justify-between gap-4 mb-10">
              {/* Stats badges */}
              <div className="flex items-center gap-0">
                <div className="flex items-center gap-2 px-6 py-3 border border-brown">
                  <img src="/icons/Group-Team--Streamline-Atlas.svg" alt="" className="w-[22px] h-[22px]" />
                  <span className="font-grillmaster text-[16.91px] text-brown uppercase">4 PAX</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 border border-brown -ml-px">
                  <img src="/icons/Toilet--Streamline-Atlas.svg" alt="" className="w-[22px] h-[22px]" />
                  <span className="font-grillmaster text-[16.91px] text-brown uppercase">1 BAÑO</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 border border-brown -ml-px">
                  <img src="/icons/Vector (3).svg" alt="" className="w-[22px] h-[22px]" />
                  <span className="font-grillmaster text-[16.91px] text-brown uppercase">2 HAB</span>
                </div>
              </div>
              {/* Button */}
              <a href="#" className="inline-flex items-center group flex-shrink-0">
                <span className="bg-brown group-hover:bg-brown/80 transition-colors px-6 py-3 font-grillmaster text-[16.91px] text-cream uppercase">
                  Ver disponibilidad
                </span>
                <span className="w-[46px] h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
                  <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" style={{ filter: "brightness(0) invert(1)" }} />
                </span>
              </a>
            </div>

            {/* Ideal para */}
            <p className="font-grillmaster text-[16.91px] text-brown mb-4">Ideal para:</p>
            <ul className="w-full">
              {["FAMILIAS", "GRUPOS DE AMIGOS", "ESCAPADAS DE FIN DE SEMANA"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 py-6 border-b border-brown"
                >
                  <span className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: "#99B0C6" }} />
                  <span className="font-balotro text-[12.91px] text-brown uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Photos row */}
        <div className="flex items-end gap-4 mt-32">
          {[
            { src: "/images/Rectangle 31.jpg", height: "409px" },
            { src: "/images/unsplash_jUQclDhyIAI (6).jpg", height: "562px" },
            { src: "/images/Rectangle 30.jpg", height: "409px" },
            { src: "/images/unsplash_jUQclDhyIAI (7).jpg", height: "562px" },
          ].map(({ src, height }) => (
            <img
              key={src}
              src={src}
              alt=""
              className="flex-1 object-cover rounded-[30px] hover:rounded-none transition-all duration-300"
              style={{ height }}
            />
          ))}
        </div>
        {/* Blue marquee bar */}
        <div className="mt-12 whitespace-nowrap flex items-center gap-12 px-8 h-[79px] overflow-hidden" style={{ backgroundColor: "#99B0C6", marginLeft: "-48px", marginRight: "-48px" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 flex-shrink-0">
              <span className="font-averia font-bold text-[49.22px] uppercase" style={{ color: "#563118" }}>LA FUENTE</span>
              <span className="inline-block h-[38px] w-[38px] flex-shrink-0" style={{ backgroundColor: "#563118", WebkitMaskImage: "url(/icons/Vector-1.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url(/icons/Vector-1.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
            </span>
          ))}
        </div>
      </section>

      {/* LOS YÉBENES - Apartment Section */}
      <section className="bg-cream px-6 lg:px-12 pt-32 pb-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <img src="/icons/Group123.svg" alt="Los Yébenes" className="w-auto mb-20" />
            <div className="max-w-[550px]">
              <p className="font-grillmaster text-[16.91px] text-brown mb-6">
                Apartamento en planta primera del edificio, compuesto de salón cocina, 2 dormitorios, baño completo.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 1:</strong> Cama de 135 con mesilla y armario de 2 puertas y cajones, aire acondicionado, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 2:</strong> Cama de 150 con mesillas, armario empotrado muy amplio, aire acondicionado, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-3">
                <strong>Salón Cocina:</strong> Mesa para 4 comensales, barra con 2 taburetes, sofá, sillón, TV, aire acondicionado, ventilador de techo, cocina con vitrocerámica, microondas, horno, lavadora, frigorífico, tostador, cafetera de cápsulas y fregadero.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-8">
                <strong>Baño Completo:</strong> plato de ducha, mueble de lavabo, bidé y WC.
              </p>
            </div>
            <p className="font-grillmaster text-[16.91px] text-brown mb-6 mt-15">Equipamiento incluido:</p>
            <div className="flex flex-col gap-2">
              {[
                ["WiFi", "Termo eléctrico independiente", "Ropa para camas"],
                ["Menaje de cocina", "Toallas para baño", "Zona de almacenaje en armario de pasillo"],
                ["Parque cuna", "2 sillas supletorias en armario pasillo"],
              ].map((row, rowIdx) => (
                <div key={rowIdx} className="flex gap-2">
                  {row.map((item, colIdx) => {
                    const i = rowIdx * 3 + colIdx;
                    return (
                      <span key={item} className="font-grillmaster text-[16.91px] text-cream px-3 py-1" style={{ backgroundColor: "#C25630", borderRadius: i % 2 === 0 ? "0px" : "9999px" }}>
                        {item}
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-0">
                <div className="flex items-center gap-2 px-6 py-3 border border-brown">
                  <img src="/icons/Group-Team--Streamline-Atlas.svg" alt="" className="w-[22px] h-[22px]" />
                  <span className="font-grillmaster text-[16.91px] text-brown uppercase">4 PAX</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 border border-brown -ml-px">
                  <img src="/icons/Toilet--Streamline-Atlas.svg" alt="" className="w-[22px] h-[22px]" />
                  <span className="font-grillmaster text-[16.91px] text-brown uppercase">1 BAÑO</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 border border-brown -ml-px">
                  <img src="/icons/Vector (3).svg" alt="" className="w-[22px] h-[22px]" />
                  <span className="font-grillmaster text-[16.91px] text-brown uppercase">2 HAB</span>
                </div>
              </div>
              <a href="#" className="inline-flex items-center group flex-shrink-0">
                <span className="bg-brown group-hover:bg-brown/80 transition-colors px-6 py-3 font-grillmaster text-[16.91px] text-cream uppercase">Ver disponibilidad</span>
                <span className="w-[46px] h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
                  <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" style={{ filter: "brightness(0) invert(1)" }} />
                </span>
              </a>
            </div>
            <p className="font-grillmaster text-[16.91px] text-brown mb-4">Ideal para:</p>
            <ul className="w-full">
              {["SENDERISTAS", "TURISMO CULTURAL", "FAMILIAS CON NIÑOS"].map((item) => (
                <li key={item} className="flex items-center gap-4 py-6 border-b border-brown">
                  <span className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: "#C25630" }} />
                  <span className="font-balotro text-[12.91px] text-brown uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-end gap-4 mt-32">
          {[
            { src: "/images/Rectangle 31.jpg", height: "409px" },
            { src: "/images/unsplash_jUQclDhyIAI (6).jpg", height: "562px" },
            { src: "/images/Rectangle 30.jpg", height: "409px" },
            { src: "/images/unsplash_jUQclDhyIAI (7).jpg", height: "562px" },
          ].map(({ src, height }) => (
            <img key={src} src={src} alt="" className="flex-1 object-cover rounded-[30px] hover:rounded-none transition-all duration-300" style={{ height }} />
          ))}
        </div>
        <div className="mt-12 whitespace-nowrap flex items-center gap-12 px-8 h-[79px] overflow-hidden" style={{ backgroundColor: "#C25630", marginLeft: "-48px", marginRight: "-48px" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 flex-shrink-0">
              <span className="font-averia font-bold text-[49.22px] uppercase" style={{ color: "#563118" }}>LOS YÉBENES</span>
              <span className="inline-block h-[38px] w-[38px] flex-shrink-0" style={{ backgroundColor: "#563118", WebkitMaskImage: "url(/icons/Group-1.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url(/icons/Group-1.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
            </span>
          ))}
        </div>
      </section>

      {/* LAS ARCAS - Apartment Section */}
      <section className="bg-cream px-6 lg:px-12 pt-32 pb-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <img src="/icons/Group (2).svg" alt="Las Arcas" className="w-auto mb-20" />
            <div className="max-w-[550px]">
              <p className="font-grillmaster text-[16.91px] text-brown mb-6">
                Apartamento en planta segunda del edificio, compuesto de salón cocina, 2 dormitorios, baño completo.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 1:</strong> Cama de 135 con mesilla y armario de 2 puertas y cajones, aire acondicionado, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 2:</strong> Cama de 150 con mesillas, armario empotrado muy amplio, aire acondicionado, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-3">
                <strong>Salón Cocina:</strong> Mesa para 4 comensales, barra con 2 taburetes, sofá, sillón, TV, aire acondicionado, ventilador de techo, cocina con vitrocerámica, microondas, horno, lavadora, frigorífico, tostador, cafetera de cápsulas y fregadero.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-8">
                <strong>Baño Completo:</strong> plato de ducha, mueble de lavabo, bidé y WC.
              </p>
            </div>
            <p className="font-grillmaster text-[16.91px] text-brown mb-6 mt-15">Equipamiento incluido:</p>
            <div className="flex flex-col gap-2">
              {[
                ["WiFi", "Termo eléctrico independiente", "Ropa para camas"],
                ["Menaje de cocina", "Toallas para baño", "Zona de almacenaje en armario de pasillo"],
                ["Posibilidad parque cuna", "2 sillas supletorias en armario pasillo"],
              ].map((row, rowIdx) => (
                <div key={rowIdx} className="flex gap-2">
                  {row.map((item, colIdx) => {
                    const i = rowIdx * 3 + colIdx;
                    return (
                      <span key={item} className="font-grillmaster text-[16.91px] text-cream px-3 py-1" style={{ backgroundColor: "#7A7A56", borderRadius: i % 2 === 0 ? "0px" : "9999px" }}>
                        {item}
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-0">
                <div className="flex items-center gap-2 px-6 py-3 border border-brown">
                  <img src="/icons/Group-Team--Streamline-Atlas.svg" alt="" className="w-[22px] h-[22px]" />
                  <span className="font-grillmaster text-[16.91px] text-brown uppercase">4 PAX</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 border border-brown -ml-px">
                  <img src="/icons/Toilet--Streamline-Atlas.svg" alt="" className="w-[22px] h-[22px]" />
                  <span className="font-grillmaster text-[16.91px] text-brown uppercase">1 BAÑO</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 border border-brown -ml-px">
                  <img src="/icons/Vector (3).svg" alt="" className="w-[22px] h-[22px]" />
                  <span className="font-grillmaster text-[16.91px] text-brown uppercase">2 HAB</span>
                </div>
              </div>
              <a href="#" className="inline-flex items-center group flex-shrink-0">
                <span className="bg-brown group-hover:bg-brown/80 transition-colors px-6 py-3 font-grillmaster text-[16.91px] text-cream uppercase">Ver disponibilidad</span>
                <span className="w-[46px] h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
                  <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" style={{ filter: "brightness(0) invert(1)" }} />
                </span>
              </a>
            </div>
            <p className="font-grillmaster text-[16.91px] text-brown mb-4">Ideal para:</p>
            <ul className="w-full">
              {["SENDERISTAS", "TURISMO CULTURAL", "FAMILIAS CON NIÑOS"].map((item) => (
                <li key={item} className="flex items-center gap-4 py-6 border-b border-brown">
                  <span className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: "#7A7A56" }} />
                  <span className="font-balotro text-[12.91px] text-brown uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-end gap-4 mt-32">
          {[
            { src: "/images/Rectangle 31.jpg", height: "409px" },
            { src: "/images/unsplash_jUQclDhyIAI (6).jpg", height: "562px" },
            { src: "/images/Rectangle 30.jpg", height: "409px" },
            { src: "/images/unsplash_jUQclDhyIAI (7).jpg", height: "562px" },
          ].map(({ src, height }) => (
            <img key={src} src={src} alt="" className="flex-1 object-cover rounded-[30px] hover:rounded-none transition-all duration-300" style={{ height }} />
          ))}
        </div>
        <div className="mt-12 whitespace-nowrap flex items-center gap-12 px-8 h-[79px] overflow-hidden" style={{ backgroundColor: "#7A7A56", marginLeft: "-48px", marginRight: "-48px" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 flex-shrink-0">
              <span className="font-averia font-bold text-[49.22px] uppercase" style={{ color: "#FBF0DA" }}>LAS ARCAS</span>
              <span className="inline-block h-[38px] w-[38px] flex-shrink-0" style={{ backgroundColor: "#FBF0DA", WebkitMaskImage: "url(/icons/Vector.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url(/icons/Vector.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
            </span>
          ))}
        </div>
      </section>

      {/* POZO DE LA NIEVE - Apartment Section */}
      <section className="bg-cream px-6 lg:px-12 pt-32 pb-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <img src="/icons/Group (3).svg" alt="Pozo de la Nieve" className="w-auto mb-20" />
            <div className="max-w-[550px]">
              <p className="font-grillmaster text-[16.91px] text-brown mb-6">
                Apartamento en planta tercera del edificio, compuesto de salón cocina, 1 dormitorio, baño y terraza con vistas al casco histórico de Moratalla y al castillo.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 1:</strong> Cama de 135 con mesilla y armario de 2 puertas y cajones, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-3">
                <strong>Salón Cocina:</strong> Mesa para 2 comensales, sofá, TV, aire acondicionado, ventilador de techo, cocina con vitrocerámica, microondas, horno, lavadora, frigorífico, tostador, cafetera de cápsulas y fregadero.
              </p>
              <p className="font-grillmaster text-[16.91px] text-brown mb-8">
                <strong>Baño:</strong> Plato de ducha, mueble de lavabo y WC.
              </p>
            </div>
            <p className="font-grillmaster text-[16.91px] text-brown mb-6 mt-15">Equipamiento incluido:</p>
            <div className="flex flex-col gap-2">
              {[
                ["WiFi", "Termo eléctrico independiente", "Ropa para camas"],
                ["Menaje de cocina", "Toallas para baño", "Silla supletoria en armario"],
                ["En terraza: zona de estar con mesa y dos sillones"],
              ].map((row, rowIdx) => (
                <div key={rowIdx} className="flex gap-2">
                  {row.map((item, colIdx) => {
                    const i = rowIdx * 3 + colIdx;
                    return (
                      <span key={item} className="font-grillmaster text-[16.91px] text-cream px-3 py-1" style={{ backgroundColor: "#D38734", borderRadius: i % 2 === 0 ? "0px" : "9999px" }}>
                        {item}
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-0">
                <div className="flex items-center gap-2 px-6 py-3 border border-brown">
                  <img src="/icons/Group-Team--Streamline-Atlas.svg" alt="" className="w-[22px] h-[22px]" />
                  <span className="font-grillmaster text-[16.91px] text-brown uppercase">2 PAX</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 border border-brown -ml-px">
                  <img src="/icons/Toilet--Streamline-Atlas.svg" alt="" className="w-[22px] h-[22px]" />
                  <span className="font-grillmaster text-[16.91px] text-brown uppercase">1 BAÑO</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 border border-brown -ml-px">
                  <img src="/icons/Vector (3).svg" alt="" className="w-[22px] h-[22px]" />
                  <span className="font-grillmaster text-[16.91px] text-brown uppercase">1 HAB</span>
                </div>
              </div>
              <a href="#" className="inline-flex items-center group flex-shrink-0">
                <span className="bg-brown group-hover:bg-brown/80 transition-colors px-6 py-3 font-grillmaster text-[16.91px] text-cream uppercase">Ver disponibilidad</span>
                <span className="w-[46px] h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
                  <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" style={{ filter: "brightness(0) invert(1)" }} />
                </span>
              </a>
            </div>
            <p className="font-grillmaster text-[16.91px] text-brown mb-4">Ideal para:</p>
            <ul className="w-full">
              {["SENDERISTAS", "TURISMO CULTURAL", "PAREJAS"].map((item) => (
                <li key={item} className="flex items-center gap-4 py-6 border-b border-brown">
                  <span className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: "#D38734" }} />
                  <span className="font-balotro text-[12.91px] text-brown uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-end gap-4 mt-32">
          {[
            { src: "/images/Rectangle 31.jpg", height: "409px" },
            { src: "/images/unsplash_jUQclDhyIAI (6).jpg", height: "562px" },
            { src: "/images/Rectangle 30.jpg", height: "409px" },
            { src: "/images/unsplash_jUQclDhyIAI (7).jpg", height: "562px" },
          ].map(({ src, height }) => (
            <img key={src} src={src} alt="" className="flex-1 object-cover rounded-[30px] hover:rounded-none transition-all duration-300" style={{ height }} />
          ))}
        </div>
        <div className="mt-12 whitespace-nowrap flex items-center gap-12 px-8 h-[79px] overflow-hidden" style={{ backgroundColor: "#D38734", marginLeft: "-48px", marginRight: "-48px" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12 flex-shrink-0">
              <span className="font-averia font-bold text-[49.22px] uppercase" style={{ color: "#563118" }}>POZO DE LA NIEVE</span>
              <span className="inline-block h-[38px] w-[38px] flex-shrink-0" style={{ backgroundColor: "#563118", WebkitMaskImage: "url(/icons/Group.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url(/icons/Group.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
            </span>
          ))}
        </div>
      </section>

      {/* Full width photo */}
      <div className="relative z-10">
        <img src="/images/iStock-1345880531 1.jpg" alt="" className="w-full object-cover" />
      </div>
    </div>
  );
}

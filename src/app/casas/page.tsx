const APT_PHOTOS = [
  { src: "/images/Rectangle 31.jpg", height: "409px" },
  { src: "/images/unsplash_jUQclDhyIAI (6).jpg", height: "562px" },
  { src: "/images/Rectangle 30.jpg", height: "409px" },
  { src: "/images/unsplash_jUQclDhyIAI (7).jpg", height: "562px" },
];

function AptPhotos() {
  return (
    <>
      {/* Móvil/tablet: grid 2x2 con altura uniforme */}
      <div className="grid grid-cols-2 gap-3 mt-12 sm:mt-20 lg:hidden">
        {APT_PHOTOS.map(({ src }) => (
          <img key={src} src={src} alt="" className="w-full h-[42vw] object-cover rounded-[16px] sm:rounded-[22px]" />
        ))}
      </div>
      {/* Escritorio: flex con alturas escalonadas originales */}
      <div className="hidden lg:flex items-end gap-4 mt-32">
        {APT_PHOTOS.map(({ src, height }) => (
          <img key={src} src={src} alt="" className="flex-1 object-cover rounded-[30px] hover:rounded-none transition-all duration-300" style={{ height }} />
        ))}
      </div>
    </>
  );
}

function AptStats({ pax, hab }: { pax: number; hab: number }) {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 border border-brown">
        <img src="/icons/Group-Team--Streamline-Atlas.svg" alt="" className="w-[18px] sm:w-[22px] h-[18px] sm:h-[22px]" />
        <span className="font-grillmaster text-[13px] sm:text-[16.91px] text-brown uppercase">{pax} PAX</span>
      </div>
      <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 border border-brown -ml-px">
        <img src="/icons/Toilet--Streamline-Atlas.svg" alt="" className="w-[18px] sm:w-[22px] h-[18px] sm:h-[22px]" />
        <span className="font-grillmaster text-[13px] sm:text-[16.91px] text-brown uppercase">1 BAÑO</span>
      </div>
      <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 border border-brown -ml-px">
        <img src="/icons/Vector (3).svg" alt="" className="w-[18px] sm:w-[22px] h-[18px] sm:h-[22px]" />
        <span className="font-grillmaster text-[13px] sm:text-[16.91px] text-brown uppercase">{hab} HAB</span>
      </div>
    </div>
  );
}

function AptMarquee({ label, icon, bg, textColor }: { label: string; icon: string; bg: string; textColor: string }) {
  return (
    <div className="mt-8 sm:mt-12 whitespace-nowrap flex items-center gap-6 lg:gap-12 px-4 lg:px-8 h-[48px] sm:h-[62px] lg:h-[79px] overflow-hidden" style={{ backgroundColor: bg, marginLeft: "-24px", marginRight: "-24px" }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i} className="flex items-center gap-6 lg:gap-12 flex-shrink-0">
          <span className="font-averia font-bold text-[26px] sm:text-[36px] lg:text-[49.22px] uppercase" style={{ color: textColor }}>{label}</span>
          <span className="inline-block h-[22px] w-[22px] sm:h-[30px] sm:w-[30px] lg:h-[38px] lg:w-[38px] flex-shrink-0" style={{ backgroundColor: textColor, WebkitMaskImage: `url(${icon})`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: `url(${icon})`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
        </span>
      ))}
    </div>
  );
}

export default function ApartamentosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-cream pt-10 sm:pt-16 lg:pt-24 pb-0">
        <div className="flex flex-col items-center text-center px-6 lg:px-12">
          <p className="font-balotro text-[12.91px] text-brown uppercase tracking-wider mb-4">
            Casas El Cañico en Moratalla
          </p>
          <h1 className="font-averia font-bold text-[28px] sm:text-[38px] lg:text-[49.22px] leading-[32px] sm:leading-[42px] lg:leading-[50px] text-brown uppercase mb-6 max-w-[950px]">
            Cuatro espacios únicos en el casco antiguo, junto al Castillo.
          </h1>
          <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-4 max-w-[492px]">
            Descubre nuestros apartamentos totalmente equipados en la zona histórica de El Cañico, ideales para escapadas rurales en pareja, familia o con amigos.
          </p>
        </div>
        <img src="/images/unsplash_jUQclDhyIAI (8).jpg" alt="" className="mt-8 sm:mt-12 w-full h-[220px] sm:h-[420px] lg:h-[750px] object-cover" />
      </section>

      {/* LA FUENTE */}
      <section className="bg-cream px-6 lg:px-12 pt-12 sm:pt-20 lg:pt-16 pb-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <img src="/icons/Group1.svg" alt="La Fuente" className="w-auto max-w-[220px] sm:max-w-[320px] lg:max-w-none mb-8 sm:mb-14 lg:mb-20" />
            <div className="max-w-[550px]">
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-5">
                Apartamento en planta baja del edificio, compuesto de salón cocina, 2 dormitorios, baño completo y patio interior.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 1:</strong> Cama de 135 con mesillas y armario de 2 puertas y cajones, salida patio interior, aire acondicionado, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 2:</strong> Cama de 150 con mesillas, armario empotrado muy amplio, aire acondicionado, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-3">
                <strong>Salón Cocina:</strong> Mesa para 4 comensales, sofá, sillón, TV, aire acondicionado, ventilador de techo, cocina con vitrocerámica, microondas, horno, lavadora, frigorífico, tostador, cafetera de cápsulas y fregadero.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-8">
                <strong>Baño:</strong> Completo: plato de ducha, mueble de lavabo, bidé y WC.
              </p>
            </div>
            <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-4 mt-8">Equipamiento incluido:</p>
            <div className="flex flex-wrap gap-2">
              {["WIFI", "Termo eléctrico independiente", "Ropa para camas", "Menaje de cocina", "Toallas para baño", "Zona de almacenaje en armario de pasillo", "Posibilidad parque cuna", "2 sillas supletorias en armario pasillo"].map((item, i) => (
                <span key={item} className="font-grillmaster text-[13px] lg:text-[16.91px] text-cream px-3 py-1" style={{ backgroundColor: "#99B0C6", borderRadius: i % 2 === 0 ? "0px" : "9999px" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 lg:mb-10">
              <AptStats pax={4} hab={2} />
              <a href="#" className="inline-flex items-center group flex-shrink-0 self-start sm:self-auto">
                <span className="bg-brown group-hover:bg-brown/80 transition-colors px-5 sm:px-6 py-3 font-grillmaster text-[14px] sm:text-[16.91px] text-cream uppercase">Ver disponibilidad</span>
                <span className="w-[42px] sm:w-[46px] h-[42px] sm:h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
                  <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" style={{ filter: "brightness(0) invert(1)" }} />
                </span>
              </a>
            </div>
            <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-4">Ideal para:</p>
            <ul className="w-full">
              {["FAMILIAS", "GRUPOS DE AMIGOS", "ESCAPADAS DE FIN DE SEMANA"].map((item) => (
                <li key={item} className="flex items-center gap-4 py-4 sm:py-6 border-b border-brown">
                  <span className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: "#99B0C6" }} />
                  <span className="font-balotro text-[12.91px] text-brown uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <AptPhotos />
        <AptMarquee label="LA FUENTE" icon="/icons/Vector-1.svg" bg="#99B0C6" textColor="#563118" />
      </section>

      {/* LOS YÉBENES */}
      <section className="bg-cream px-6 lg:px-12 pt-12 sm:pt-20 lg:pt-32 pb-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <img src="/icons/Group123.svg" alt="Los Yébenes" className="w-auto max-w-[220px] sm:max-w-[320px] lg:max-w-none mb-8 sm:mb-14 lg:mb-20" />
            <div className="max-w-[550px]">
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-5">
                Apartamento en planta primera del edificio, compuesto de salón cocina, 2 dormitorios, baño completo.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 1:</strong> Cama de 135 con mesilla y armario de 2 puertas y cajones, aire acondicionado, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 2:</strong> Cama de 150 con mesillas, armario empotrado muy amplio, aire acondicionado, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-3">
                <strong>Salón Cocina:</strong> Mesa para 4 comensales, barra con 2 taburetes, sofá, sillón, TV, aire acondicionado, ventilador de techo, cocina con vitrocerámica, microondas, horno, lavadora, frigorífico, tostador, cafetera de cápsulas y fregadero.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-8">
                <strong>Baño Completo:</strong> plato de ducha, mueble de lavabo, bidé y WC.
              </p>
            </div>
            <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-4 mt-8">Equipamiento incluido:</p>
            <div className="flex flex-wrap gap-2">
              {["WiFi", "Termo eléctrico independiente", "Ropa para camas", "Menaje de cocina", "Toallas para baño", "Zona de almacenaje en armario de pasillo", "Parque cuna", "2 sillas supletorias en armario de pasillo"].map((item, i) => (
                <span key={item} className="font-grillmaster text-[13px] lg:text-[16.91px] text-cream px-3 py-1" style={{ backgroundColor: "#C25630", borderRadius: i % 2 === 0 ? "0px" : "9999px" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 lg:mb-10">
              <AptStats pax={4} hab={2} />
              <a href="#" className="inline-flex items-center group flex-shrink-0 self-start sm:self-auto">
                <span className="bg-brown group-hover:bg-brown/80 transition-colors px-5 sm:px-6 py-3 font-grillmaster text-[14px] sm:text-[16.91px] text-cream uppercase">Ver disponibilidad</span>
                <span className="w-[42px] sm:w-[46px] h-[42px] sm:h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
                  <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" style={{ filter: "brightness(0) invert(1)" }} />
                </span>
              </a>
            </div>
            <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-4">Ideal para:</p>
            <ul className="w-full">
              {["SENDERISTAS", "TURISMO CULTURAL", "FAMILIAS CON NIÑOS"].map((item) => (
                <li key={item} className="flex items-center gap-4 py-4 sm:py-6 border-b border-brown">
                  <span className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: "#C25630" }} />
                  <span className="font-balotro text-[12.91px] text-brown uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <AptPhotos />
        <AptMarquee label="LOS YÉBENES" icon="/icons/Group-1.svg" bg="#C25630" textColor="#563118" />
      </section>

      {/* LAS ARCAS */}
      <section className="bg-cream px-6 lg:px-12 pt-12 sm:pt-20 lg:pt-32 pb-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <img src="/icons/Group (2).svg" alt="Las Arcas" className="w-auto max-w-[220px] sm:max-w-[320px] lg:max-w-none mb-8 sm:mb-14 lg:mb-20" />
            <div className="max-w-[550px]">
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-5">
                Apartamento en planta segunda del edificio, compuesto de salón cocina, 2 dormitorios, baño completo.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 1:</strong> Cama de 135 con mesilla y armario de 2 puertas y cajones, aire acondicionado, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 2:</strong> Cama de 150 con mesillas, armario empotrado muy amplio, aire acondicionado, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-3">
                <strong>Salón Cocina:</strong> Mesa para 4 comensales, barra con 2 taburetes, sofá, sillón, TV, aire acondicionado, ventilador de techo, cocina con vitrocerámica, microondas, horno, lavadora, frigorífico, tostador, cafetera de cápsulas y fregadero.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-8">
                <strong>Baño:</strong> Completo: plato de ducha, mueble de lavabo, bidé y WC.
              </p>
            </div>
            <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-4 mt-8">Equipamiento incluido:</p>
            <div className="flex flex-wrap gap-2">
              {["WiFi", "Termo eléctrico independiente", "Ropa para camas", "Menaje de cocina", "Toallas para baño", "Zona de almacenaje en armario de pasillo", "Posibilidad parque cuna", "2 sillas supletorias en pasillo"].map((item, i) => (
                <span key={item} className="font-grillmaster text-[13px] lg:text-[16.91px] text-cream px-3 py-1" style={{ backgroundColor: "#7A7A56", borderRadius: i % 2 === 0 ? "0px" : "9999px" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 lg:mb-10">
              <AptStats pax={4} hab={2} />
              <a href="#" className="inline-flex items-center group flex-shrink-0 self-start sm:self-auto">
                <span className="bg-brown group-hover:bg-brown/80 transition-colors px-5 sm:px-6 py-3 font-grillmaster text-[14px] sm:text-[16.91px] text-cream uppercase">Ver disponibilidad</span>
                <span className="w-[42px] sm:w-[46px] h-[42px] sm:h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
                  <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" style={{ filter: "brightness(0) invert(1)" }} />
                </span>
              </a>
            </div>
            <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-4">Ideal para:</p>
            <ul className="w-full">
              {["SENDERISTAS", "TURISMO CULTURAL", "FAMILIAS CON NIÑOS"].map((item) => (
                <li key={item} className="flex items-center gap-4 py-4 sm:py-6 border-b border-brown">
                  <span className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: "#7A7A56" }} />
                  <span className="font-balotro text-[12.91px] text-brown uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <AptPhotos />
        <AptMarquee label="LAS ARCAS" icon="/icons/Vector.svg" bg="#7A7A56" textColor="#FBF0DA" />
      </section>

      {/* POZO DE LA NIEVE */}
      <section className="bg-cream px-6 lg:px-12 pt-12 sm:pt-20 lg:pt-32 pb-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <img src="/icons/Group (3).svg" alt="Pozo de la Nieve" className="w-auto max-w-[220px] sm:max-w-[320px] lg:max-w-none mb-8 sm:mb-14 lg:mb-20" />
            <div className="max-w-[550px]">
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-5">
                Apartamento en planta tercera del edificio, compuesto de salón cocina, 1 dormitorio, baño y terraza con vistas al casco histórico de Moratalla y al castillo.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-3">
                <strong>Dormitorio 1:</strong> Cama de 135 con mesilla y armario de 2 puertas y cajones, ventilador de techo.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-3">
                <strong>Salón Cocina:</strong> Mesa para 2 comensales, sofá, TV, aire acondicionado, ventilador de techo, cocina con vitrocerámica, microondas, horno, lavadora, frigorífico, tostador, cafetera de cápsulas y fregadero.
              </p>
              <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-8">
                <strong>Baño:</strong> Plato de ducha, mueble de lavabo y WC.
              </p>
            </div>
            <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-4 mt-8">Equipamiento incluido:</p>
            <div className="flex flex-wrap gap-2">
              {["WiFi", "Termo eléctrico independiente", "Ropa para camas", "Menaje de cocina", "Toallas para baño", "En terraza: zona de estar con mesa y dos sillones", "Silla supletoria en armario"].map((item, i) => (
                <span key={item} className="font-grillmaster text-[13px] lg:text-[16.91px] text-cream px-3 py-1" style={{ backgroundColor: "#D38734", borderRadius: i % 2 === 0 ? "0px" : "9999px" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 lg:mb-10">
              <AptStats pax={2} hab={1} />
              <a href="#" className="inline-flex items-center group flex-shrink-0 self-start sm:self-auto">
                <span className="bg-brown group-hover:bg-brown/80 transition-colors px-5 sm:px-6 py-3 font-grillmaster text-[14px] sm:text-[16.91px] text-cream uppercase">Ver disponibilidad</span>
                <span className="w-[42px] sm:w-[46px] h-[42px] sm:h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
                  <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" style={{ filter: "brightness(0) invert(1)" }} />
                </span>
              </a>
            </div>
            <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown mb-4">Ideal para:</p>
            <ul className="w-full">
              {["SENDERISTAS", "TURISMO CULTURAL", "PAREJAS"].map((item) => (
                <li key={item} className="flex items-center gap-4 py-4 sm:py-6 border-b border-brown">
                  <span className="w-[10px] h-[10px] rounded-full flex-shrink-0" style={{ backgroundColor: "#D38734" }} />
                  <span className="font-balotro text-[12.91px] text-brown uppercase">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <AptPhotos />
        <AptMarquee label="POZO DE LA NIEVE" icon="/icons/Group.svg" bg="#D38734" textColor="#563118" />
      </section>

      {/* Full width photo */}
      <div className="relative z-10">
        <img src="/images/iStock-1345880531 1.jpg" alt="" className="w-full object-cover" />
      </div>
    </div>
  );
}

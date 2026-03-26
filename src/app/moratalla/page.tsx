export default function MoratallaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[500px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-brown/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/90 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-[1920px] mx-auto px-6 lg:px-20 pb-16">
          <p className="font-balotro text-[13px] text-cream/60 uppercase tracking-wider mb-4">
            Descubre Moratalla
          </p>
          <h1 className="font-averia font-bold text-cream text-[42px] lg:text-[49px] leading-tight max-w-[800px]">
            Un destino de turismo rural único en Murcia
          </h1>
        </div>
      </section>

      {/* Castle Section */}
      <section className="bg-cream py-20 lg:py-32">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-balotro text-[13px] text-brown uppercase tracking-wider mb-4">
                EL CASTILLO DE MORATALLA
              </p>
              <h2 className="font-averia font-bold text-brown text-[42px] lg:text-[49px] leading-tight mb-8">
                El símbolo del municipio
              </h2>
              <p className="font-grillmaster text-[17px] text-brown/80 leading-relaxed mb-8">
                El Castillo-Fortaleza de Moratalla es uno de los principales
                atractivos turísticos del pueblo. Construido en época medieval,
                ofrece:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Vistas panorámicas",
                    desc: "Desde la torre del homenaje se contempla toda la comarca del Noroeste murciano.",
                  },
                  {
                    title: "Historia viva",
                    desc: "Recorre siglos de historia a través de sus muros, torres y estancias restauradas.",
                  },
                  {
                    title: "Visitas guiadas",
                    desc: "Consulta los horarios de visitas en la oficina de turismo del municipio.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-orange mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-balotro text-[13px] text-brown uppercase tracking-wider mb-1">
                        {item.title}
                      </h3>
                      <p className="font-grillmaster text-[15px] text-brown/70">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full aspect-[444/428] bg-brown/10 rounded-sm" />
                <div className="w-full aspect-[444/588] bg-brown/10 rounded-sm" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="w-full aspect-[445/588] bg-brown/10 rounded-sm" />
                <div className="w-full aspect-[444/428] bg-brown/10 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities carousel */}
      <section className="bg-brown py-20 lg:py-32 overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-20 mb-12">
          <p className="font-balotro text-[13px] text-cream/60 uppercase tracking-wider mb-4">
            Qué hacer en Moratalla
          </p>
          <h2 className="font-averia font-bold text-cream text-[42px] lg:text-[49px] leading-tight">
            Actividades y experiencias
          </h2>
        </div>

        <div className="flex gap-6 px-6 lg:px-20 overflow-x-auto pb-6 scrollbar-hide">
          {[
            {
              title: "Senderismo",
              desc: "Rutas por la Sierra de Moratalla, cañones del río Alhárabe y más.",
            },
            {
              title: "Gastronomía",
              desc: "Prueba la cocina tradicional murciana en los restaurantes del casco antiguo.",
            },
            {
              title: "Arte rupestre",
              desc: "Visita los abrigos de arte rupestre declarados Patrimonio de la Humanidad.",
            },
            {
              title: "Fiestas",
              desc: "Tamborada, fiestas patronales y tradiciones centenarias.",
            },
            {
              title: "Naturaleza",
              desc: "Parajes naturales, ríos y fuentes en un entorno privilegiado.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="min-w-[300px] lg:min-w-[350px] bg-cream/5 border border-cream/10 rounded-sm p-8 flex-shrink-0"
            >
              <div className="w-full aspect-video bg-cream/10 rounded-sm mb-6" />
              <h3 className="font-balotro text-[16px] text-cream uppercase tracking-wider mb-3">
                {item.title}
              </h3>
              <p className="font-grillmaster text-[15px] text-cream/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Nature Section */}
      <section className="bg-terracotta py-20 lg:py-32">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="font-averia font-bold text-cream text-[42px] lg:text-[49px] leading-tight mb-6 max-w-[800px] mx-auto">
            Un entorno natural incomparable
          </h2>
          <p className="font-grillmaster text-[17px] text-cream/80 max-w-[600px] mx-auto mb-8">
            Moratalla está rodeada de naturaleza: sierras, ríos, fuentes y
            bosques que hacen de este municipio un destino ideal para los
            amantes del turismo rural y de aventura.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-10 py-4 bg-cream text-brown font-balotro text-[13px] uppercase tracking-wider rounded-sm hover:bg-cream/90 transition-colors"
          >
            Planifica tu visita
          </a>
        </div>
      </section>

      {/* Map / Location */}
      <section className="bg-cream py-20 lg:py-32">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-balotro text-[13px] text-brown uppercase tracking-wider mb-4">
                Cómo llegar
              </p>
              <h2 className="font-averia font-bold text-brown text-[42px] lg:text-[49px] leading-tight mb-8">
                Moratalla, Región de Murcia
              </h2>
              <p className="font-grillmaster text-[17px] text-brown/80 leading-relaxed mb-6">
                Moratalla se encuentra en el noroeste de la Región de Murcia,
                a menos de 2 horas de la capital y bien comunicada por carretera
                con las principales ciudades del sureste español.
              </p>
              <ul className="space-y-3">
                {[
                  "Murcia capital: ~1h 30min",
                  "Caravaca de la Cruz: ~20min",
                  "Albacete: ~2h",
                  "Granada: ~3h",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-orange flex-shrink-0"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <span className="font-grillmaster text-[15px] text-brown/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full aspect-[800/534] bg-brown/10 rounded-sm" />
          </div>
        </div>
      </section>
    </div>
  );
}

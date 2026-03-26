import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-24 items-center">
            {/* Left column - photo + text */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[246px] aspect-[246/344] bg-brown/10" />
              <p className="font-balotro text-[12.91px] text-brown uppercase text-center max-w-[246px] mt-[1em]">
                En el corazón del casco antiguo de Moratalla
              </p>
            </div>

            {/* Center column - logo + button */}
            <div className="flex flex-col items-center">
              <img
                src="/logo.svg"
                alt="Apartamentos Turísticos El Cañico"
                className="w-[400px] lg:w-[500px] h-auto"
              />
              <Link
                href="/apartamentos"
                className="mt-32 inline-flex items-center group"
              >
                <span className="bg-brown group-hover:bg-brown/80 transition-colors px-8 py-3 font-grillmaster text-[16.91px] text-cream uppercase">
                  Ver apartamentos
                </span>
                <span className="w-[46px] h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
                  <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" />
                </span>
              </Link>
            </div>

            {/* Right column - photo + text */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[246px] aspect-[246/344] bg-brown/10" />
              <p className="font-balotro text-[12.91px] text-brown uppercase text-center max-w-[246px] mt-[1em]">
                Apartamentos Turísticos en Moratalla – El Cañico, junto al Castillo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="bg-cream py-3 overflow-hidden border-y border-brown/10">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="font-balotro text-[13px] text-brown/60">
              Apartamentos nuevos totalmente equipados &nbsp;·&nbsp; Ubicación
              céntrica en el casco antiguo &nbsp;·&nbsp; Capacidad para parejas
              y familias &nbsp;·&nbsp; Entorno natural y cultural único en
              Murcia &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="bg-cream py-20 lg:py-32">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full aspect-[436/409] bg-brown/10 rounded-sm" />
                <div className="w-full aspect-[436/562] bg-brown/10 rounded-sm" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="w-full aspect-[436/562] bg-brown/10 rounded-sm" />
                <div className="w-full aspect-[436/409] bg-brown/10 rounded-sm" />
              </div>
            </div>

            {/* Text content */}
            <div>
              <p className="font-balotro text-[13px] text-brown uppercase tracking-wider mb-4">
                Apartamentos Turísticos en Moratalla – El Cañico, junto al
                Castillo
              </p>
              <h2 className="font-averia font-bold text-brown text-[42px] lg:text-[49px] leading-tight mb-8">
                Cuatro espacios únicos en el casco antiguo
              </h2>
              <p className="font-grillmaster text-[17px] text-brown/80 leading-relaxed mb-8">
                Descubre nuestros apartamentos totalmente equipados en la zona
                histórica de El Cañico, ideales para escapadas rurales en
                pareja, familia o con amigos.
              </p>
              <Link
                href="/apartamentos"
                className="inline-flex items-center justify-center px-8 py-3 bg-brown text-cream font-balotro text-[13px] uppercase tracking-wider rounded-sm hover:bg-brown/90 transition-colors"
              >
                Descubrir apartamentos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-brown py-20 lg:py-32">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-balotro text-[13px] text-cream/60 uppercase tracking-wider mb-4">
                UBICACIÓN PRIVILEGIADA
              </p>
              <h2 className="font-averia font-bold text-cream text-[42px] lg:text-[49px] leading-tight mb-8">
                A un paso del Castillo de Moratalla
              </h2>
              <p className="font-grillmaster text-[17px] text-cream/70 leading-relaxed mb-8">
                Moratalla es uno de los destinos de turismo rural más completos
                de la Región de Murcia, ideal para senderismo, naturaleza,
                cultura y gastronomía. Nuestros apartamentos turísticos se
                encuentran en la zona de El Cañico, dentro del casco antiguo.
                Desde aquí podrás:
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "/icons/Group 124.svg", title: "Castillo", desc: "A 2 minutos a pie" },
                  { icon: "/icons/Group 125.svg", title: "Naturaleza", desc: "Rutas de senderismo" },
                  { icon: "/icons/Group 126.svg", title: "Gastronomía", desc: "Restaurantes locales" },
                  { icon: "/icons/Group 127.svg", title: "Cultura", desc: "Patrimonio histórico" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-[80px] h-[83px] flex-shrink-0 flex items-center justify-center">
                      <img src={item.icon} alt={item.title} className="w-full h-full object-contain brightness-0 invert" />
                    </div>
                    <div>
                      <h3 className="font-balotro text-[13px] text-cream uppercase tracking-wider mb-1">
                        {item.title}
                      </h3>
                      <p className="font-grillmaster text-[15px] text-cream/60">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full aspect-[436/409] bg-cream/10 rounded-sm" />
                <div className="w-full aspect-[436/562] bg-cream/10 rounded-sm" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="w-full aspect-[437/562] bg-cream/10 rounded-sm" />
                <div className="w-full aspect-[436/409] bg-cream/10 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="resenas" className="bg-cream py-20 lg:py-32">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <p className="font-balotro text-[13px] text-brown uppercase tracking-wider mb-4">
              Reseñas
            </p>
            <h2 className="font-averia font-bold text-brown text-[42px] lg:text-[49px] leading-tight">
              Lo que dicen nuestros huéspedes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Un lugar encantador en el casco antiguo. Los apartamentos están impecables y la ubicación es perfecta para recorrer Moratalla.",
                author: "María G.",
                rating: 5,
              },
              {
                text: "Nos encantó la decoración y lo bien equipado que está todo. Volveremos seguro con la familia. El trato fue excepcional.",
                author: "Carlos R.",
                rating: 5,
              },
              {
                text: "Perfectos para una escapada rural. Muy cerca del castillo y de los restaurantes del pueblo. Totalmente recomendable.",
                author: "Ana P.",
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-sm border border-brown/10"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg
                      key={j}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#d38734"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="font-grillmaster text-[17px] text-brown/80 leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-balotro text-[13px] text-brown uppercase tracking-wider">
                  {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="reserva" className="bg-terracotta py-20 lg:py-32">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-20 text-center">
          <h2 className="font-averia font-bold text-cream text-[42px] lg:text-[49px] leading-tight mb-6">
            Reserva tu escapada rural
          </h2>
          <p className="font-grillmaster text-[17px] text-cream/80 max-w-[600px] mx-auto mb-8">
            Descubre el encanto del casco antiguo de Moratalla desde nuestros
            apartamentos turísticos junto al Castillo.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-10 py-4 bg-cream text-brown font-balotro text-[13px] uppercase tracking-wider rounded-sm hover:bg-cream/90 transition-colors"
          >
            Reservar ahora
          </Link>
        </div>
      </section>
    </div>
  );
}

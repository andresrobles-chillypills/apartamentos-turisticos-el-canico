import Link from "next/link";
import ApartmentsSection from "@/components/ApartmentsSection";
import LocationSection from "@/components/LocationSection";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cream pt-10 pb-32 sm:pt-16 sm:pb-48 lg:pt-24 lg:pb-96">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-24 items-center">
            {/* Left column - foto + texto: oculto en móvil, visible en lg */}
            <div className="hidden lg:flex flex-col items-center">
              <img src="/images/unsplash_jUQclDhyIAI.jpg" alt="" className="w-full max-w-[246px] aspect-[246/344] object-cover" />
              <p className="font-balotro text-[12.91px] text-brown uppercase text-center max-w-[246px] mt-[1em]">
                En el corazón del casco antiguo de Moratalla
              </p>
            </div>

            {/* Center column - logo + button */}
            <div className="flex flex-col items-center">
              <img
                src="/logo.svg"
                alt="Casas El Cañico"
                className="w-[260px] sm:w-[340px] lg:w-[500px] h-auto"
              />
              {/* Fotos visibles solo en móvil/tablet, bajo el logo */}
              <div className="flex gap-4 mt-6 lg:hidden">
                <div className="flex flex-col items-center">
                  <img src="/images/unsplash_jUQclDhyIAI.jpg" alt="" className="w-full max-w-[140px] sm:max-w-[180px] aspect-[246/344] object-cover" />
                  <p className="font-balotro text-[10px] sm:text-[12px] text-brown uppercase text-center max-w-[140px] sm:max-w-[180px] mt-2">
                    En el corazón del casco antiguo
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img src="/images/ChatGPT-Image-27-feb-2026-13_59_31-1.jpg" alt="" className="w-full max-w-[140px] sm:max-w-[180px] aspect-[246/344] object-cover" />
                  <p className="font-balotro text-[10px] sm:text-[12px] text-brown uppercase text-center max-w-[140px] sm:max-w-[180px] mt-2">
                    Junto al Castillo de Moratalla
                  </p>
                </div>
              </div>
              <Link
                href="/apartamentos"
                className="mt-8 sm:mt-12 lg:mt-32 inline-flex items-center group"
              >
                <span className="bg-brown group-hover:bg-brown/80 transition-colors px-8 py-3 font-grillmaster text-[16.91px] text-cream uppercase">
                  Ver apartamentos
                </span>
                <span className="w-[46px] h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
                  <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" />
                </span>
              </Link>
            </div>

            {/* Right column - foto + texto: oculto en móvil, visible en lg */}
            <div className="hidden lg:flex flex-col items-center">
              <img src="/images/ChatGPT-Image-27-feb-2026-13_59_31-1.jpg" alt="" className="w-full max-w-[246px] aspect-[246/344] object-cover" />
              <p className="font-balotro text-[12.91px] text-brown uppercase text-center max-w-[246px] mt-[1em]">
                Casas El Cañico en Moratalla – junto al Castillo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bars Section */}
      <section className="relative z-20 -mt-[50px] -mb-[50px] sm:-mt-[70px] sm:-mb-[70px] lg:-mt-[100px] lg:-mb-[100px]" style={{ overflowX: "clip" }}>
        {/* Bar: LA FUENTE - blue */}
        <div className="relative z-30 whitespace-nowrap flex items-center gap-6 lg:gap-12 px-4 lg:px-8 h-[48px] sm:h-[62px] lg:h-[79px]" style={{ backgroundColor: "#99B0C6", transform: "rotate(2.82deg)", marginLeft: "-2%", marginRight: "-2%" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 lg:gap-12">
              <span className="font-averia font-bold text-[28px] sm:text-[38px] lg:text-[49.22px] uppercase" style={{ color: "#563118" }}>LA FUENTE</span>
              <span className="inline-block h-[22px] w-[22px] sm:h-[30px] sm:w-[30px] lg:h-[38px] lg:w-[38px] flex-shrink-0" style={{ backgroundColor: "#563118", WebkitMaskImage: "url(/icons/Vector-1.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url(/icons/Vector-1.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
            </span>
          ))}
        </div>

        {/* Bar: LOS YÉBENES - terracotta */}
        <div className="relative z-20 mt-1 whitespace-nowrap flex items-center gap-6 lg:gap-12 px-4 lg:px-8 h-[48px] sm:h-[62px] lg:h-[79px]" style={{ backgroundColor: "#C25630", transform: "rotate(-11.86deg)", marginLeft: "-5%", marginRight: "-5%" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 lg:gap-12">
              <span className="font-averia font-bold text-[28px] sm:text-[38px] lg:text-[49.22px] uppercase" style={{ color: "#563118" }}>LOS YÉBENES</span>
              <span className="inline-block h-[22px] w-[22px] sm:h-[30px] sm:w-[30px] lg:h-[38px] lg:w-[38px] flex-shrink-0" style={{ backgroundColor: "#563118", WebkitMaskImage: "url(/icons/Group-1.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url(/icons/Group-1.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
            </span>
          ))}
        </div>

        {/* Bar: LAS ARCAS - green/olive */}
        <div className="relative z-40 -mt-[22px] sm:-mt-[30px] lg:-mt-[39px] whitespace-nowrap flex items-center gap-6 lg:gap-12 px-4 lg:px-8 h-[48px] sm:h-[62px] lg:h-[79px]" style={{ backgroundColor: "#7A7A56", transform: "rotate(-3.15deg)", marginLeft: "-2%", marginRight: "-2%" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 lg:gap-12">
              <span className="font-averia font-bold text-[28px] sm:text-[38px] lg:text-[49.22px] uppercase" style={{ color: "#FBF0DA" }}>LAS ARCAS</span>
              <span className="inline-block h-[22px] w-[22px] sm:h-[30px] sm:w-[30px] lg:h-[38px] lg:w-[38px] flex-shrink-0" style={{ backgroundColor: "#FBF0DA", WebkitMaskImage: "url(/icons/Vector.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url(/icons/Vector.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
            </span>
          ))}
        </div>

        {/* Bar: POZO DE LA NIEVE - orange */}
        <div className="relative z-10 -mt-[22px] sm:-mt-[30px] lg:-mt-[39px] whitespace-nowrap flex items-center gap-6 lg:gap-12 px-4 lg:px-8 h-[48px] sm:h-[62px] lg:h-[79px]" style={{ backgroundColor: "#D38734", transform: "rotate(5.38deg)", marginLeft: "-2%", marginRight: "-2%" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 lg:gap-12">
              <span className="font-averia font-bold text-[28px] sm:text-[38px] lg:text-[49.22px] uppercase" style={{ color: "#563118" }}>POZO DE LA NIEVE</span>
              <span className="inline-block h-[22px] w-[22px] sm:h-[30px] sm:w-[30px] lg:h-[38px] lg:w-[38px] flex-shrink-0" style={{ backgroundColor: "#563118", WebkitMaskImage: "url(/icons/Group.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url(/icons/Group.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
            </span>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 bg-brown pt-28 pb-[2em] sm:pt-40 sm:pb-[2em] lg:pt-80 lg:pb-[2em]">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="font-balotro text-[26px] sm:text-[32.75px] leading-[30px] sm:leading-[36px] text-cream uppercase">
            Dormir donde nace<br />la historia del agua
          </h2>

          {/* Photo */}
          <img src="/images/Rectangle-7.jpg" alt="" className="w-full max-w-[320px] sm:max-w-[500px] aspect-square object-cover rounded-[30px] sm:rounded-[50px] mt-[2.5em] sm:mt-[3em]" />

          {/* Text */}
          <p className="font-grillmaster text-[15px] sm:text-[16.91px] text-cream leading-relaxed max-w-[600px] mt-[2em] sm:mt-[3em]">
            Casas El Cañico nace como un homenaje a uno de los barrios con más identidad de Moratalla. Situadas en el casco antiguo, muy cerca del Castillo, nuestras casas combinan tradición, comodidad y ubicación privilegiada.
          </p>
          <p className="font-grillmaster text-[15px] sm:text-[16.91px] text-cream leading-relaxed max-w-[600px] mt-6">
            El nombre &ldquo;El Cañico&rdquo; hace referencia a la histórica fuente que abasteció durante siglos al pueblo, símbolo de vida y desarrollo. Hoy, ese mismo entorno es el escenario perfecto para tu escapada rural.
          </p>

          {/* Button */}
          <Link
            href="/moratalla"
            className="mt-[3em] sm:mt-[6em] inline-flex items-center group"
          >
            <span className="bg-orange group-hover:bg-orange/80 transition-colors px-8 py-3 font-grillmaster text-[16.91px] text-brown uppercase">
              Conoce más
            </span>
            <span className="w-[46px] h-[46px] bg-orange group-hover:bg-orange/80 transition-colors rounded-full flex items-center justify-center">
              <span className="inline-block w-[10px] h-[8px]" style={{ backgroundColor: "#563118", WebkitMaskImage: "url(/icons/Capa_1.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", maskImage: "url(/icons/Capa_1.svg)", maskSize: "contain", maskRepeat: "no-repeat" }} />
            </span>
          </Link>

          {/* Bottom marquee text - oculto en móvil */}
          <div className="hidden sm:flex mt-[8em] lg:mt-[14em] whitespace-nowrap items-center gap-8 font-balotro text-[12.91px] text-cream uppercase tracking-wider">
            <span>Apartamentos nuevos totalmente equipados</span>
            <span>·</span>
            <span>Ubicaci<span className="font-sans text-[14px]">ó</span>n c<span className="font-sans text-[14px]">é</span>ntrica en el casco antiguo</span>
            <span>·</span>
            <span>Capacidad para parejas y familias</span>
            <span>·</span>
            <span>Entorno natural y cultural <span className="font-sans text-[14px]">ú</span>nico en Murcia</span>
          </div>
        </div>
      </section>

      {/* Full-screen Photo Section */}
      <section
        className="h-[50vh] sm:h-[70vh] lg:h-screen w-full bg-[url('/images/iStock-2235884399-1.jpg')] bg-cover bg-center bg-scroll lg:bg-fixed"
      />

      {/* Apartments Section */}
      <ApartmentsSection />

      {/* Location Section */}
      <LocationSection />
      <ReviewsSection />
    </div>
  );
}

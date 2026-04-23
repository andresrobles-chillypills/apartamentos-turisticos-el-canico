"use client";

import { useEffect, useRef } from "react";

const activities = [
  "VISITAR EL CASTILLO-FORTALEZA DE MORATALLA",
  "RECORRER LA RUTA DEL AGUA (9,9 KM)",
  "DISFRUTAR DE LA IGLESIA DE SANTA ANA",
  "PASEAR POR EL CONVENTO DE SAN FRANCISCO",
  "DESCUBRIR EL ARTE RUPESTRE PATRIMONIO MUNDIAL",
];

export default function LocationSection() {
  const iconRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let rotation = 0;

    const onScroll = () => {
      rotation += window.scrollY * 0.05 - rotation * 0;
      if (iconRef.current) {
        iconRef.current.style.transform = `rotate(${window.scrollY * 0.08}deg)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-cream px-6 lg:px-12 pt-16 sm:pt-24 lg:pt-48 pb-12 sm:pb-20 lg:pb-40">
      {/* Top: two columns */}
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left column */}
        <div className="w-full lg:w-1/2">
          <p className="font-balotro text-[12.91px] text-brown uppercase tracking-wider mb-4">
            Ubicación privilegiada
          </p>
          <h2 className="font-averia font-bold text-[36px] sm:text-[44px] lg:text-[49.22px] leading-[38px] sm:leading-[46px] lg:leading-[50px] text-brown uppercase mb-6">
            A un paso del<br />castillo de<br />Moratalla
          </h2>
          <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown max-w-[400px] mb-2">
            Moratalla es uno de los destinos de turismo rural más completos de la Región de Murcia, ideal para senderismo, naturaleza, cultura y gastronomía.
          </p>
          <div className="flex items-center gap-6 lg:gap-12">
            <p className="font-grillmaster text-[15px] lg:text-[16.91px] text-brown max-w-[400px]">
              Nuestras casas se encuentran en la zona de El Cañico, dentro del casco antiguo. Desde aquí podrás:
            </p>
            <img
              ref={iconRef}
              src="/icons/Capa_12.svg"
              alt=""
              className="w-[70px] sm:w-[90px] lg:w-[115px] h-auto flex-shrink-0"
              style={{ willChange: "transform" }}
            />
          </div>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Activity list */}
          <ul className="w-full">
            {activities.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 lg:gap-6 py-4 sm:py-5 lg:py-7 border-b border-brown font-balotro text-[11px] sm:text-[12.91px] text-brown uppercase"
              >
                <span className="font-balotro text-[11px] sm:text-[12.91px] text-brown w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom: photo grid */}
      <div className="max-w-[1920px] mx-auto mt-12 sm:mt-20 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 location-photo-grid">
        {[
          "/images/Rectangle-26.jpg",
          "/images/unsplash_jUQclDhyIAI-(5).jpg",
          "/images/Rectangle-28.jpg",
          "/images/Rectangle-29.jpg",
        ].map((photo, i) => (
          photo ? (
            <img
              key={i}
              src={photo}
              alt=""
              className="w-full object-cover rounded-[16px] sm:rounded-[22px] lg:rounded-[30px] hover:rounded-none transition-all duration-300"
              style={{
                height: i % 2 === 0 ? "clamp(180px, 30vw, 409px)" : "clamp(240px, 40vw, 562px)"
              }}
            />
          ) : (
            <div
              key={i}
              className="w-full bg-brown/10 rounded-[16px] sm:rounded-[22px] lg:rounded-[30px] hover:rounded-none transition-all duration-300"
              style={{
                height: i % 2 === 0 ? "clamp(180px, 30vw, 409px)" : "clamp(240px, 40vw, 562px)"
              }}
            />
          )
        ))}
      </div>
    </section>
  );
}

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
    <section className="bg-cream py-24 px-6 lg:px-20">
      {/* Top: two columns */}
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left column */}
        <div className="w-full lg:w-1/2">
          <p className="font-balotro text-[12.91px] text-brown uppercase tracking-wider mb-4">
            Ubicación privilegiada
          </p>
          <h2 className="font-averia font-bold text-[49.22px] leading-[50px] text-brown uppercase mb-6">
            A un paso del<br />castillo de<br />Moratalla
          </h2>
          <p className="font-grillmaster text-[16.91px] text-brown max-w-[400px] mb-2">
            Moratalla es uno de los destinos de turismo rural más completos de la Región de Murcia, ideal para senderismo, naturaleza, cultura y gastronomía.
          </p>
          <div className="flex items-center gap-12">
            <p className="font-grillmaster text-[16.91px] text-brown max-w-[400px]">
              Nuestros apartamentos turísticos se encuentran en la zona de El Cañico, dentro del casco antiguo. Desde aquí podrás:
            </p>
            <img
              ref={iconRef}
              src="/icons/Capa_12.svg"
              alt=""
              className="w-[115px] h-auto flex-shrink-0"
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
                className="flex items-center gap-6 py-4 border-t border-brown/30 font-grillmaster text-[16.91px] text-brown uppercase"
              >
                <span className="font-balotro text-[12.91px] text-brown/60 w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {item}
              </li>
            ))}
            <li className="border-t border-brown/30" />
          </ul>
        </div>
      </div>

      {/* Bottom: photo grid */}
      <div className="max-w-[1920px] mx-auto mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-full aspect-[3/4] bg-brown/10 rounded-[20px]"
          />
        ))}
      </div>
    </section>
  );
}

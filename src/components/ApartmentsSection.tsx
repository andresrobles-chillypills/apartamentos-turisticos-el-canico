"use client";

import Link from "next/link";
import { useState } from "react";

const apartments = [
  {
    name: "LA\nFUENTE",
    titleSvg: "/icons/Group-31.svg",
    icon: "/icons/Group-127.svg",
    iconSmall: "/icons/Vector-1.svg",
    color: "#99B0C6",
    description:
      "ESPACIOSO, LUMINOSO Y ACOGEDOR. IDEAL PARA FAMILIAS O GRUPOS QUE QUIERAN DISFRUTAR DE UNA ESCAPADA RURAL EN MORATALLA CON TODAS LAS COMODIDADES.",
    pax: 4,
  },
  {
    name: "LOS\nYÉBENES",
    titleSvg: "/icons/Group-21.svg",
    icon: "/icons/Group-125.svg",
    iconSmall: "/icons/Group-1.svg",
    color: "#C25630",
    description:
      "UN RINCÓN CON ENCANTO EN EL CORAZÓN DEL CASCO ANTIGUO. PERFECTO PARA PAREJAS QUE BUSCAN TRANQUILIDAD Y AUTENTICIDAD.",
    pax: 2,
  },
  {
    name: "LAS\nARCAS",
    titleSvg: "/icons/Group-132.svg",
    icon: "/icons/Group-124.svg",
    iconSmall: "/icons/Vector.svg",
    color: "#7A7A56",
    description:
      "TRADICIÓN Y CONFORT EN UN ESPACIO ÚNICO. IDEAL PARA QUIENES QUIEREN VIVIR MORATALLA DESDE DENTRO.",
    pax: 4,
  },
  {
    name: "POZO DE\nLA NIEVE",
    titleSvg: "/icons/Group-131.svg",
    icon: "/icons/Group-126.svg",
    iconSmall: "/icons/Group.svg",
    color: "#D38734",
    description:
      "CALIDEZ Y DISEÑO EN CADA DETALLE. UNA EXPERIENCIA RURAL CON TODO LO QUE NECESITAS PARA DESCONECTAR.",
    pax: 4,
  },
];

export default function ApartmentsSection() {
  const [current, setCurrent] = useState(0);
  const apt = apartments[current];

  const prev = () =>
    setCurrent((c) => (c === 0 ? apartments.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === apartments.length - 1 ? 0 : c + 1));

  return (
    <section className="h-screen w-full flex flex-col lg:flex-row">
      {/* Left column - brown */}
      <div className="w-full lg:w-1/2 bg-brown flex flex-col items-center justify-center px-6 py-16 lg:py-0">
        {/* 4 apartment icons */}
        <div className="flex items-center gap-3 mb-8">
          {apartments.map((a, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className=""
            >
              <span
                className="inline-block w-[38px] h-[38px]"
                style={{
                  backgroundColor: a.color,
                  WebkitMaskImage: `url(${a.iconSmall})`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: `url(${a.iconSmall})`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            </button>
          ))}
        </div>

        {/* Subtitle */}
        <p className="font-balotro text-[12.91px] text-cream uppercase tracking-wider mb-6">
          Nuestros apartamentos
        </p>

        {/* Title */}
        <h2 className="font-averia font-bold text-[49.22px] leading-[50px] text-cream uppercase text-center">
          Cuatro espacios,
          <br />
          una misma esencia
        </h2>

        {/* Description */}
        <p className="font-grillmaster text-[16.90px] text-cream text-center max-w-[400px] mt-4">
          Cada apartamento lleva el nombre de un elemento
          característico del barrio y de la Ruta del Agua.
        </p>

        {/* Button */}
        <Link
          href="/apartamentos"
          className="mt-8 inline-flex items-center group"
        >
          <span className="bg-orange group-hover:bg-orange/80 transition-colors px-8 py-3 font-grillmaster text-[16.91px] text-brown uppercase">
            Ver apartamentos
          </span>
          <span className="w-[46px] h-[46px] bg-orange group-hover:bg-orange/80 transition-colors rounded-full flex items-center justify-center">
            <span
              className="inline-block w-[10px] h-[8px]"
              style={{
                backgroundColor: "#563118",
                WebkitMaskImage: "url(/icons/Capa_1.svg)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskImage: "url(/icons/Capa_1.svg)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
              }}
            />
          </span>
        </Link>
      </div>

      {/* Right column - apartment color */}
      <div
        className="w-full lg:w-1/2 flex flex-col px-6 lg:px-12 py-6 lg:py-12 relative"
        style={{ backgroundColor: apt.color }}
      >
        {/* Apartment title SVG */}
        {apt.titleSvg ? (
          <img src={apt.titleSvg} alt={apt.name} className="h-[150px] w-auto self-start" />
        ) : (
          <h3 className="font-averia font-bold text-[49.22px] leading-[50px] text-brown uppercase whitespace-pre-line">
            {apt.name}
          </h3>
        )}

        {/* Icon */}
        <img
          src={apt.iconSmall}
          alt=""
          className="w-[50px] h-[50px] mt-4"
        />

        {/* Info row: description + pax + button */}
        <div className="flex items-start justify-between mt-auto mb-8 gap-6">
          <p className="font-grillmaster text-[16.91px] text-brown uppercase max-w-[340px]">
            {apt.description}
          </p>

          <div className="flex flex-col items-end flex-shrink-0">
            {/* PAX badge */}
            <div className="flex items-center gap-3 bg-cream px-4 py-2" style={{ border: "1.5px solid #563118" }}>
              <img src="/icons/Group-Team--Streamline-Atlas.svg" alt="" className="w-[24px] h-[24px]" />
              <span className="font-grillmaster text-[16.91px] text-brown uppercase">
                {apt.pax} PAX
              </span>
            </div>

            {/* Button - pegado al badge */}
            <Link
              href="/apartamentos"
              className="inline-flex items-center group -mt-px"
            >
              <span className="bg-brown group-hover:bg-brown/80 transition-colors px-6 py-3 font-grillmaster text-[16.91px] text-cream uppercase">
                Conoce m<span className="font-sans text-[18px]">á</span>s
              </span>
              <span className="w-[46px] h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
                <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" />
              </span>
            </Link>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="w-full flex-1 min-h-[300px] bg-brown/10 rounded-[30px]" />

        {/* Navigation arrows */}
        <div className="flex items-center justify-between mt-6">
          <button onClick={prev} className="w-[85px] h-[36px] bg-brown p-[1px] border-none outline-none cursor-pointer">
            <div className="w-full h-full bg-cream rounded-[5px] flex items-center justify-center">
              <img src="/icons/Vector-2.svg" alt="Anterior" className="w-[20px] h-auto" />
            </div>
          </button>
          <button onClick={next} className="w-[85px] h-[36px] bg-brown p-[1px] border-none outline-none cursor-pointer">
            <div className="w-full h-full bg-cream rounded-[5px] flex items-center justify-center">
              <img src="/icons/Vector-2.svg" alt="Siguiente" className="w-[20px] h-auto" style={{ transform: "rotate(180deg)" }} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

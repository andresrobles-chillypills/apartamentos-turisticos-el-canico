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
    photo: "/images/unsplash_jUQclDhyIAI-(4).jpg",
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
    photo: "/images/unsplash_jUQclDhyIAI-(3).jpg",
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
    photo: "/images/unsplash_jUQclDhyIAI-(1).jpg",
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
    photo: "/images/unsplash_jUQclDhyIAI-(2).jpg",
    description:
      "CALIDEZ Y DISEÑO EN CADA DETALLE. UNA EXPERIENCIA RURAL CON TODO LO QUE NECESITAS PARA DESCONECTAR.",
    pax: 4,
  },
];

export default function ApartmentsSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const apt = apartments[current];

  const navigate = (nextIndex: number, dir: "left" | "right" = "right") => {
    if (animating || nextIndex === current) return;
    setDirection(dir);
    setIncoming(nextIndex);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(nextIndex);
      setIncoming(null);
      setAnimating(false);
    }, 500);
  };

  const prev = () =>
    navigate(current === 0 ? apartments.length - 1 : current - 1, "left");
  const next = () =>
    navigate(current === apartments.length - 1 ? 0 : current + 1, "right");

  return (
    <section className="h-[110vh] w-full flex flex-col lg:flex-row">
      {/* Left column - brown */}
      <div className="w-full lg:w-1/2 bg-brown flex flex-col items-center justify-center px-6 py-16 lg:py-12">
        {/* 4 apartment icons */}
        <div className="flex items-center gap-3 mb-8">
          {apartments.map((a, i) => (
            <button
              key={i}
              onClick={() => navigate(i, i > current ? "right" : "left")}
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

      {/* Right column */}
      <div className="w-full lg:w-1/2 relative overflow-hidden">
        {/* Incoming slide (slides in from right) */}
        {animating && incoming !== null && (
          <div
            className="absolute inset-0 flex flex-col px-6 lg:px-12 py-6 lg:py-12 z-10"
            style={{
              backgroundColor: apartments[incoming].color,
              animation: `${direction === "right" ? "slideInFromRight" : "slideInFromLeft"} 0.5s ease forwards`,
            }}
          >
            <ApartmentCardContent apt={apartments[incoming]} prev={prev} next={next} />
          </div>
        )}

        {/* Current card */}
        <div
          className="w-full h-full flex flex-col px-6 lg:px-12 py-6 lg:py-12"
          style={{ backgroundColor: apt.color }}
        >
          <ApartmentCardContent apt={apt} prev={prev} next={next} />
        </div>
      </div>

      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function ApartmentCardContent({ apt, prev, next }: { apt: typeof apartments[0]; prev: () => void; next: () => void }) {
  return (
    <>
      <div className="flex flex-col items-start">
        {apt.titleSvg ? (
          <img src={apt.titleSvg} alt={apt.name} className="h-[150px] w-auto" />
        ) : (
          <h3 className="font-averia font-bold text-[49.22px] leading-[50px] text-brown uppercase whitespace-pre-line">
            {apt.name}
          </h3>
        )}
        <img src={apt.iconSmall} alt="" className="w-[50px] h-[50px] mt-4" />
      </div>
      <div className="flex items-start justify-between mt-6 mb-8 gap-6">
        <p className="font-grillmaster text-[16.91px] leading-[20px] text-brown uppercase max-w-[340px]">
          {apt.description}
        </p>
        <div className="flex flex-col items-end flex-shrink-0">
          <div className="flex items-center gap-3 bg-cream px-4 py-2" style={{ border: "1.5px solid #563118" }}>
            <img src="/icons/Group-Team--Streamline-Atlas.svg" alt="" className="w-[24px] h-[24px]" />
            <span className="font-grillmaster text-[16.91px] text-brown uppercase">{apt.pax} PAX</span>
          </div>
          <Link href="/apartamentos" className="inline-flex items-center group -mt-px">
            <span className="bg-brown group-hover:bg-brown/80 transition-colors px-6 py-3 font-grillmaster text-[16.91px] text-cream uppercase">
              Conoce m<span className="font-sans text-[18px]">á</span>s
            </span>
            <span className="w-[46px] h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
              <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" />
            </span>
          </Link>
        </div>
      </div>
      <img src={apt.photo} alt={apt.name} className="w-full mt-auto min-h-[300px] object-cover rounded-[30px]" style={{ maxHeight: "500px" }} />
      <div className="flex items-center justify-between mt-6">
        <button onClick={prev} className="w-[85px] h-[36px] bg-brown p-[1px] border-none outline-none cursor-pointer group/arrow">
          <div className="w-full h-full bg-cream group-hover/arrow:bg-[#ede2cc] rounded-[5px] flex items-center justify-center transition-colors">
            <img src="/icons/Vector-2.svg" alt="Anterior" className="w-[20px] h-auto  transition-all" />
          </div>
        </button>
        <button onClick={next} className="w-[85px] h-[36px] bg-brown p-[1px] border-none outline-none cursor-pointer group/arrow">
          <div className="w-full h-full bg-cream group-hover/arrow:bg-[#ede2cc] rounded-[5px] flex items-center justify-center transition-colors">
            <img src="/icons/Vector-2.svg" alt="Siguiente" className="w-[20px] h-auto  transition-all" style={{ transform: "rotate(180deg)" }} />
          </div>
        </button>
      </div>
    </>
  );
}

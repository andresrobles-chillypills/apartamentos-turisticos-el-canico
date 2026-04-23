"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StackedCards({ img1, img2 }: { img1?: string; img2?: string }) {
  const backRef = useRef<HTMLDivElement & HTMLImageElement>(null);
  const frontRef = useRef<HTMLDivElement & HTMLImageElement>(null);
  const animating = useRef(false);

  const handleMouseEnter = () => {
    if (animating.current || !backRef.current || !frontRef.current) return;
    animating.current = true;
    const tl = gsap.timeline({ onComplete: () => { animating.current = false; } });
    tl.to(backRef.current, { x: 120, duration: 0.25, ease: "power2.in" }, 0)
      .to(frontRef.current, { x: -20, duration: 0.25, ease: "power2.in" }, 0)
      .set(backRef.current, { zIndex: 3 })
      .to(backRef.current, { x: 0, duration: 0.3, ease: "power2.out" })
      .to(frontRef.current, { x: 0, duration: 0.3, ease: "power2.out" }, "<");
  };

  const handleMouseLeave = () => {
    if (animating.current || !backRef.current || !frontRef.current) return;
    animating.current = true;
    const tl = gsap.timeline({ onComplete: () => { animating.current = false; } });
    tl.to(backRef.current, { x: 120, duration: 0.25, ease: "power2.in" }, 0)
      .to(frontRef.current, { x: -20, duration: 0.25, ease: "power2.in" }, 0)
      .set(backRef.current, { zIndex: 1 })
      .to(backRef.current, { x: 0, duration: 0.3, ease: "power2.out" })
      .to(frontRef.current, { x: 0, duration: 0.3, ease: "power2.out" }, "<");
  };

  const frontStyle = { width: "325.84px", height: "314.09px", borderRadius: "18px", transform: "rotate(-10.08deg)", top: "40px", left: "60px", zIndex: 2, position: "absolute" as const };
  const backStyle = { width: "325.84px", height: "314.09px", borderRadius: "18px", transform: "rotate(15deg)", top: "20px", left: "120px", zIndex: 1, position: "absolute" as const };

  return (
    <div className="relative flex-shrink-0 hidden lg:block" style={{ width: "500px", height: "380px" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {img1 ? (
        <img ref={frontRef} src={img1} alt="" className="object-cover" style={frontStyle} />
      ) : (
        <div ref={frontRef} className="bg-cream/20" style={frontStyle} />
      )}
      {img2 ? (
        <img ref={backRef} src={img2} alt="" className="object-cover" style={backStyle} />
      ) : (
        <div ref={backRef} className="bg-cream/30" style={backStyle} />
      )}
    </div>
  );
}

const CARD_COUNT = 5;

const cards = [
  {
    subtitle: "La Ruta del Agua",
    title: "Naturaleza e ingeniería del Siglo XVI",
    body: "La Ruta del Agua de Moratalla es un recorrido de aproximadamente 9.9 km que sigue el camino tradicional del agua desde la montaña hasta el casco urbano.",
    listTitle: "Esta ruta permite descubrir:",
    list: [
      "El Acueducto de la Umbría (Siglo XVI)",
      "Paraje de Las Arcas",
      "Patio de los Yébenes",
      "Fuente del Cañico",
      "Zona ZEPA Sierra de Moratalla",
    ],
    img1: "/images/Rectangle 40.jpg",
    img2: "/images/Rectangle 41.jpg",
  },
  {
    subtitle: "Naturaleza y Senderismo",
    title: "Un paraíso para los amantes de la montaña",
    body: "Moratalla forma parte de la Sierra del Buitre y cuenta con espacios naturales protegidos.",
    listTitle: "Esta ruta permite descubrir:",
    list: [
      "Senderos señalizados",
      "Zona de Especial Protección para las Aves (ZEPA)",
      "Pico del Fraile",
      "Paisajes de montaña",
      "Río Alhárabe",
    ],
    img1: "/images/Rectangle 43.jpg",
    img2: "/images/Rectangle 42.jpg",
  },
  {
    subtitle: "Arte Rupestre",
    title: "Patrimonio Mundial",
    body: "Moratalla alberga importantes muestras de arte rupestre levantino, declarado Patrimonio Mundial por la UNESCO. Una oportunidad única para conectar con los orígenes más antiguos de la Península Ibérica.",
    img1: "/images/Rectangle 45.jpg",
    img2: "/images/Rectangle 44.jpg",
  },
  {
    subtitle: "Tradición y Cultura",
    title: "Moratalla es tradición viva",
    list: [
      "Fiestas y encierros tradicionales",
      "Semana Santa",
      "Gastronomía local",
      "Arquitectura popular",
    ],
    img1: "/images/Rectangle 47.jpg",
    img2: "/images/Rectangle 46.jpg",
  },
  {
    subtitle: "Gastronomía Local",
    title: "Sabores de montaña",
    listTitle: "Durante tu estancia podrás disfrutar de:",
    list: [
      "Platos tradicionales murcianos",
      "Productos locales",
      "Cocina casera",
      "Restaurantes con encanto",
    ],
    img1: "/images/Rectangle 49.jpg",
    img2: "/images/Rectangle 42.jpg",
  },
];

export default function MoratallaPage() {
  const iconRef = useRef<HTMLImageElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (iconRef.current) {
        iconRef.current.style.transform = `translateY(-50%) rotate(${window.scrollY * 0.08}deg)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!trackRef.current || !sectionRef.current) return;

    const tween = gsap.to(trackRef.current, {
      x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${trackRef.current!.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ height: "130vh" }}>
        <img src="/images/unsplash_jUQclDhyIAI (9).jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: "-80px" }}>
          <div className="relative flex flex-col items-center justify-start text-center" style={{ width: "671px", height: "587px" }}>
            <img src="/icons/Rectangle 37.svg" alt="" className="absolute inset-0 w-full h-full" style={{ objectFit: "fill" }} />
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-12 pt-12 pb-16 h-full">
              <img src="/icons/Group 49 (1).svg" alt="El Cañico" className="w-[60px] h-auto mb-8" />
              <p className="font-balotro text-[12.91px] text-brown uppercase tracking-wider mb-6 max-w-[260px]">
                Moratalla, uno de los pueblos con más encanto de la Región de Murcia
              </p>
              <h1 className="font-averia font-bold text-[49.22px] leading-tight text-brown uppercase">
                Historia medieval, naturaleza salvaje y tradición viva.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="flex flex-col items-center justify-center text-center px-6 lg:px-12 pt-24 pb-32" style={{ backgroundColor: "#C25630", minHeight: "130vh" }}>
        <h2 className="font-balotro text-[32.75px] text-cream uppercase leading-tight mb-8 max-w-[450px]">
          Un pueblo con siglos de historia
        </h2>
        <div className="relative mb-8" style={{ width: "385px", height: "385px" }}>
          <img src="/images/Rectangle 50.jpg" alt="" className="w-full h-full object-cover rounded-[50px]" />
          <img
            ref={iconRef}
            src="/icons/Capa_1 (1).svg"
            alt=""
            className="absolute"
            style={{ width: "145px", height: "auto", willChange: "transform", transform: "translateY(-50%)", top: "50%", left: "calc(100% + 48px)", position: "absolute" }}
          />
        </div>
        <div className="max-w-[620px] mb-16 space-y-6">
          <p className="font-grillmaster text-[16.91px] text-cream">
            Moratalla es uno de los municipios más extensos de España y uno de los destinos rurales más auténticos de la Región de Murcia.
          </p>
          <p className="font-grillmaster text-[16.91px] text-cream">
            Su casco antiguo, de origen medieval, conserva calles estrechas, arquitectura tradicional y un impresionante Castillo-Fortaleza que domina el paisaje.
          </p>
          <p className="font-grillmaster text-[16.91px] text-cream">
            Durante siglos, el agua ha sido uno de los elementos fundamentales en el desarrollo del municipio, especialmente a través del histórico Acueducto de la Umbría y la Fuente del Cañico, símbolos del crecimiento urbano y sanitario de la villa.
          </p>
        </div>
        <a href="#" className="inline-flex items-center group">
          <span className="bg-cream group-hover:bg-[#EADDC7] transition-colors px-6 py-3 font-grillmaster text-[16.91px] text-brown uppercase">
            Conoce más
          </span>
          <span className="w-[46px] h-[46px] bg-cream group-hover:bg-[#EADDC7] transition-colors rounded-full flex items-center justify-center">
            <img src="/icons/Capa_1.svg" alt="" className="w-[10px] h-[8px]" style={{ filter: "brightness(0)" }} />
          </span>
        </a>
      </section>

      {/* Castillo section */}
      <section className="bg-cream px-6 lg:px-12 pt-28 lg:pt-48 pb-20 lg:pb-40">
        <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <p className="font-balotro text-[12.91px] text-brown uppercase tracking-wider mb-4">
              El Castillo de Moratalla
            </p>
            <h2 className="font-averia font-bold text-[49.22px] leading-[50px] text-brown uppercase mb-6 max-w-[390px]">
              El símbolo del municipio
            </h2>
            <p className="font-grillmaster text-[16.91px] text-brown max-w-[390px]">
              El Castillo-Fortaleza de Moratalla es uno de los principales atractivos turísticos del pueblo.<br />Construido en época medieval, ofrece:
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <ul className="w-full">
              {[
                "VISTAS PANORÁMICAS ESPECTACULARES",
                "RECORRIDO HISTÓRICO",
                "ENTORNO PERFECTO PARA FOTOGRAFÍA",
                "CONEXIÓN DIRECTA CON EL CASCO ANTIGUO",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-6 py-7 border-b border-brown font-balotro text-[12.91px] text-brown uppercase">
                  <span className="font-balotro text-[12.91px] text-brown w-8 flex-shrink-0">{String(i + 1).padStart(2, "0")}.</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[1920px] mx-auto mt-32 grid grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          {[
            "/images/Rectangle 32.jpg",
            "/images/unsplash_jUQclDhyIAI-(5).jpg",
            "/images/Rectangle 33.jpg",
            "/images/Rectangle 34.jpg",
          ].map((photo, i) => (
            <img key={i} src={photo} alt="" className="w-full object-cover rounded-[30px] hover:rounded-none transition-all duration-300" style={{ height: i % 2 === 0 ? "409px" : "562px" }} />
          ))}
        </div>
      </section>

      {/* Brown section - La Ruta del Agua - horizontal scroll */}
      <section ref={sectionRef} className="bg-brown overflow-hidden" style={{ height: "100vh" }}>
        <div
          ref={trackRef}
          className="flex h-full"
          style={{ width: `${CARD_COUNT * 100}vw` }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center gap-16 px-6 lg:px-16 justify-center"
              style={{ width: "100vw", height: "100vh" }}
            >
              <StackedCards img1={card.img1} img2={card.img2} />

              <div className="flex-1 max-w-[440px]">
                <p className="font-balotro text-[12.91px] text-cream uppercase tracking-wider mb-4">{card.subtitle}</p>
                <h2 className="font-averia font-bold text-[49.22px] text-cream uppercase mb-6" style={{ lineHeight: "50px" }}>{card.title}</h2>
                {card.body && <p className="font-grillmaster text-[16.91px] text-cream">{card.body}</p>}
              </div>

              {(card.list || card.listTitle) && (
                <div className="flex-1 max-w-[380px]">
                  {card.listTitle && <p className="font-grillmaster text-[16.91px] text-cream mb-6">{card.listTitle}</p>}
                  {card.list && (
                    <ul className="w-full">
                      {card.list.map((item, i) => (
                        <li key={i} className="flex items-center gap-4 py-3 border-b border-cream">
                          <span className="w-[14px] h-[14px] rounded-full flex-shrink-0" style={{ backgroundColor: "#D38734" }} />
                          <span className="font-grillmaster text-[16.91px] text-cream">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Full width photo - parallax */}
      <div className="relative z-10 overflow-hidden" style={{ height: "90vh" }}>
        <div
          className="absolute inset-0 w-full"
          style={{
            backgroundImage: "url(/images/ChatGPT-Image-27-feb-2026-10_57_34-1.jpg)",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}

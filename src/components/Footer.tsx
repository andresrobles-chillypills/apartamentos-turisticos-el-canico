import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-brown text-cream" style={{ marginTop: "50px" }}>
      {/* SVG arc curve at top */}
      <svg
        className="absolute"
        style={{ top: "-299px", height: "300px", width: "112%", left: "-6%" }}
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        fill="#563118"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,300 C360,0 1080,0 1440,300 L1440,300 L0,300 Z" />
      </svg>

      {/* Top area: icons + CTA */}
      <div className="flex flex-col items-center pt-0 pb-12 px-6 lg:px-12 text-center">
        {/* 4 apartment icons */}
        <div className="flex items-center gap-4 mb-10">
          {[
            { src: "/icons/Vector-1.svg", color: "#99B0C6" },
            { src: "/icons/Vector.svg",   color: "#7A7A56" },
            { src: "/icons/Group-1.svg",  color: "#C25630" },
            { src: "/icons/Group.svg",    color: "#D38734" },
          ].map((icon, i) => (
            <span
              key={i}
              className="inline-block w-[38px] h-[38px]"
              style={{
                backgroundColor: icon.color,
                WebkitMaskImage: `url(${icon.src})`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: `url(${icon.src})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
          ))}
        </div>

        {/* Subtitle */}
        <p className="font-balotro text-[12.91px] text-cream uppercase tracking-wider mb-4 mt-6">
          Apartamentos rurales en Moratalla
        </p>

        {/* Title */}
        <h2 className="font-averia font-bold text-[49.22px] leading-[50px] text-cream uppercase max-w-[800px] mb-6 mt-4">
          Reserva tu apartamento en Moratalla al mejor precio
        </h2>

        {/* Description */}
        <p className="font-grillmaster text-[16.91px] max-w-[460px] mb-14">
          Disfruta del encanto del casco antiguo, la tranquilidad de la monta<span className="font-sans">ñ</span>a y la comodidad de un alojamiento nuevo y totalmente equipado.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/contacto"
            className="border border-cream px-8 py-3 font-grillmaster text-[16.91px] text-cream uppercase hover:bg-cream/10 transition-colors"
          >
            Consultar disponibilidad
          </Link>
          <Link
            href="https://wa.me/34600000000"
            className="inline-flex items-center group"
          >
            <span className="bg-orange group-hover:bg-orange/80 transition-colors px-8 py-3 font-grillmaster text-[16.91px] text-brown uppercase">
              Contactar por WhatsApp
            </span>
            <span className="w-[46px] h-[46px] bg-orange group-hover:bg-orange/80 transition-colors rounded-full flex items-center justify-center">
              <span
                className="inline-block w-[20px] h-[20px]"
                style={{
                  backgroundColor: "#563118",
                  WebkitMaskImage: "url(/icons/Whatsapp--Streamline-Atlas.svg)",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: "url(/icons/Whatsapp--Streamline-Atlas.svg)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 lg:px-12 py-12 pt-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
        {/* Logo + copyright */}
        <div className="flex flex-col gap-4">
          <img src="/icons/Group-49.svg" alt="El Cañico" className="h-[80px] w-auto self-start" />
          <p className="font-grillmaster uppercase text-[16.91px]">
            Apartamentos El Ca<span className="font-sans">ñ</span>ico 2026©
          </p>
        </div>

        {/* Nav links */}
        <div className="flex gap-28">
          <div>
            <p className="font-grillmaster text-[16.91px] text-cream uppercase mb-4">Páginas</p>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "/" },
                { label: "Apartamentos", href: "/apartamentos" },
                { label: "Reserva", href: "/#reserva" },
                { label: "Moratalla", href: "/moratalla" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-grillmaster text-[15px] text-cream/70 hover:text-cream transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-grillmaster text-[16.91px] text-cream uppercase mb-4 opacity-0">.</p>
            <ul className="space-y-2">
              {[
                { label: "Rese\u00f1as", href: "/#resenas" },
                { label: "Contacto", href: "/contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-grillmaster text-[15px] text-cream/70 hover:text-cream transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-grillmaster text-[16.91px] text-cream uppercase mb-4">Legal</p>
            <ul className="space-y-2">
              {[
                { label: "Política de Privacidad", href: "#" },
                { label: "Política de cookies", href: "#" },
                { label: "Aviso Legal", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="font-grillmaster text-[15px] text-cream/70 hover:text-cream transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

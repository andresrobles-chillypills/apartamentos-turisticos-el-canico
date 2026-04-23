"use client";

import Link from "next/link";
import { useState } from "react";

const leftNav = [
  { label: "Inicio", href: "/" },
  { label: "Casas", href: "/casas" },
  { label: "Reserva", href: "/#reserva" },
];

const rightNav = [
  { label: "Moratalla", href: "/moratalla" },
  { label: "Reseñas", href: "/#resenas" },
  { label: "Contacto", href: "/contacto" },
];

const allNav = [...leftNav, ...rightNav];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass =
    "font-grillmaster text-[16.91px] text-brown uppercase px-5 py-2.5 border border-brown/80 -ml-px first:ml-0 hover:bg-brown/10 transition-colors";

  return (
    <header className="bg-cream">
      {/* Top banner */}
      <div className="bg-orange flex items-center justify-center py-2 sm:py-0 sm:h-[34px]">
        <p className="font-balotro text-[12.91px] text-brown tracking-wide text-center px-4">
          reserva ya tu apartamento con un 10% de descuento
        </p>
      </div>

      {/* Nav bar */}
      <div className="flex items-center justify-between px-6 lg:px-12 py-6">
        {/* Left nav */}
        <nav className="hidden lg:flex items-center">
          {leftNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.label === "Reserva" ? "bg-brown p-[1px] -ml-px" : navLinkClass}
            >
              {item.label === "Reserva" ? (
                <span className="block bg-cream hover:bg-[#EADDC7] transition-colors px-5 py-2.5 font-grillmaster text-[16.91px] text-brown uppercase rounded-[13.35px]">
                  {item.label}
                </span>
              ) : item.label}
            </Link>
          ))}
        </nav>

        {/* Center logo text */}
        <Link href="/" className="flex items-center">
          <h1 className="font-averia font-bold text-brown text-[32px] lg:text-[40px] leading-none uppercase tracking-wide">
            El Cañico
          </h1>
        </Link>

        {/* Right nav */}
        <nav className="hidden lg:flex items-center">
          {rightNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClass}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-brown p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {/* Línea superior: se convierte en diagonal \ */}
            <line
              x1="3" y1="6" x2="21" y2="6"
              style={{
                transformOrigin: "12px 6px",
                transition: "transform 0.35s ease, opacity 0.2s ease",
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            {/* Línea central: desaparece */}
            <line
              x1="3" y1="12" x2="21" y2="12"
              style={{
                transformOrigin: "12px 12px",
                transition: "opacity 0.2s ease, transform 0.2s ease",
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "none",
              }}
            />
            {/* Línea inferior: se convierte en diagonal / */}
            <line
              x1="3" y1="18" x2="21" y2="18"
              style={{
                transformOrigin: "12px 18px",
                transition: "transform 0.35s ease, opacity 0.2s ease",
                transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        className="lg:hidden overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: menuOpen ? `${allNav.length * 64 + 32}px` : "0px", opacity: menuOpen ? 1 : 0 }}
      >
        <div className="bg-cream border-t border-brown/10 px-6 py-4 flex flex-col gap-3">
          {allNav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-grillmaster text-[16.91px] text-brown px-5 py-2.5 border border-brown/80 text-center transition-all duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
                opacity: menuOpen ? 1 : 0,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

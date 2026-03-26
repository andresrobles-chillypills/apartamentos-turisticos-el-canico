"use client";

import Link from "next/link";
import { useState } from "react";

const leftNav = [
  { label: "Inicio", href: "/" },
  { label: "Apartamentos", href: "/apartamentos" },
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
    "font-grillmaster text-[16.91px] text-brown uppercase px-5 py-2.5 border border-brown/80 -ml-px first:ml-0";

  return (
    <header className="bg-cream">
      {/* Top banner */}
      <div className="bg-orange h-[34px] flex items-center justify-center">
        <p className="font-balotro text-[12.91px] text-brown tracking-wide">
          reserva ya tu apartamento con un 10% de descuento
        </p>
      </div>

      {/* Nav bar */}
      <div className="max-w-[1827px] mx-auto flex items-center justify-between px-6 lg:px-12 py-6">
        {/* Left nav */}
        <nav className="hidden lg:flex items-center">
          {leftNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClass}
            >
              {item.label}
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
          className="lg:hidden text-brown"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="lg:hidden bg-cream border-t border-brown/10 px-6 py-4 flex flex-col gap-3">
          {allNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-grillmaster text-[16.91px] text-brown px-5 py-2.5 border border-brown/80 text-center"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="max-w-[1920px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & description */}
          <div className="lg:col-span-1">
            <img src="/logo.svg" alt="El Cañico" className="h-12 brightness-0 invert mb-6" />
            <p className="font-grillmaster text-[15px] text-cream/80 leading-relaxed">
              Apartamentos Turísticos El Cañico. En el corazón del casco antiguo
              de Moratalla, junto al Castillo.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-balotro text-[13px] uppercase tracking-wider mb-6 text-orange">
              Navegación
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "/" },
                { label: "Apartamentos", href: "/apartamentos" },
                { label: "Moratalla", href: "/moratalla" },
                { label: "Contacto", href: "/contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-grillmaster text-[15px] text-cream/70 hover:text-cream transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-balotro text-[13px] uppercase tracking-wider mb-6 text-orange">
              Contacto
            </h3>
            <ul className="space-y-3 font-grillmaster text-[15px] text-cream/70">
              <li>Casco antiguo de Moratalla</li>
              <li>Murcia, España</li>
              <li>
                <a href="mailto:info@elcanico.com" className="hover:text-cream transition-colors">
                  info@elcanico.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-balotro text-[13px] uppercase tracking-wider mb-6 text-orange">
              Síguenos
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center hover:border-cream transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center hover:border-cream transition-colors"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-grillmaster text-[13px] text-cream/50">
            © 2026 Apartamentos Turísticos El Cañico. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="font-grillmaster text-[13px] text-cream/50 hover:text-cream transition-colors"
            >
              Política de privacidad
            </Link>
            <Link
              href="#"
              className="font-grillmaster text-[13px] text-cream/50 hover:text-cream transition-colors"
            >
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

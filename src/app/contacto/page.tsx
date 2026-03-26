"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with form service
    alert("Formulario enviado. Nos pondremos en contacto contigo pronto.");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-brown/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/90 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-[1920px] mx-auto px-6 lg:px-20 pb-16">
          <p className="font-balotro text-[13px] text-cream/60 uppercase tracking-wider mb-4">
            apartamentos turísticos el cañico
          </p>
          <h1 className="font-averia font-bold text-cream text-[42px] lg:text-[49px] leading-tight max-w-[657px]">
            Estamos en el casco antiguo de Moratalla, junto al Castillo.
          </h1>
          <p className="font-grillmaster text-[17px] text-cream/70 max-w-[492px] mt-6">
            ¿Tienes alguna duda sobre tu estancia? ¿Quieres consultar
            disponibilidad? Estaremos encantados de ayudarte.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-cream py-20 lg:py-32">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-grillmaster text-[17px] text-brown mb-2">
                    nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Escribe aquí tu nombre.."
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    className="w-full h-[66px] px-6 bg-transparent border border-brown/30 rounded-sm font-grillmaster text-[17px] text-brown placeholder:text-brown/40 focus:outline-none focus:border-brown transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-grillmaster text-[17px] text-brown mb-2">
                    apellidos
                  </label>
                  <input
                    type="text"
                    placeholder="Escribe aquí tus apellidos..."
                    value={formData.apellidos}
                    onChange={(e) =>
                      setFormData({ ...formData, apellidos: e.target.value })
                    }
                    className="w-full h-[66px] px-6 bg-transparent border border-brown/30 rounded-sm font-grillmaster text-[17px] text-brown placeholder:text-brown/40 focus:outline-none focus:border-brown transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-grillmaster text-[17px] text-brown mb-2">
                    email
                  </label>
                  <input
                    type="email"
                    placeholder="Escribe aquí tu correo..."
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-[66px] px-6 bg-transparent border border-brown/30 rounded-sm font-grillmaster text-[17px] text-brown placeholder:text-brown/40 focus:outline-none focus:border-brown transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-grillmaster text-[17px] text-brown mb-2">
                    teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="Escribe aquí tu teléfono..."
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                    className="w-full h-[66px] px-6 bg-transparent border border-brown/30 rounded-sm font-grillmaster text-[17px] text-brown placeholder:text-brown/40 focus:outline-none focus:border-brown transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-grillmaster text-[17px] text-brown mb-2">
                  Cuéntanos que necesitas
                </label>
                <textarea
                  placeholder="Si quieres consultar disponibilidad indícanos fechas y numero de personas aquí..."
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  rows={6}
                  className="w-full px-6 py-4 bg-transparent border border-brown/30 rounded-sm font-grillmaster text-[17px] text-brown placeholder:text-brown/40 focus:outline-none focus:border-brown transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-10 py-4 bg-brown text-cream font-balotro text-[13px] uppercase tracking-wider rounded-sm hover:bg-brown/90 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-balotro text-[13px] text-brown uppercase tracking-wider mb-3">
                  Dirección
                </h3>
                <p className="font-grillmaster text-[17px] text-brown/70">
                  Casco antiguo de Moratalla
                  <br />
                  Murcia, España
                </p>
              </div>

              <div>
                <h3 className="font-balotro text-[13px] text-brown uppercase tracking-wider mb-3">
                  Contacto
                </h3>
                <p className="font-grillmaster text-[17px] text-brown/70">
                  info@elcanico.com
                </p>
              </div>

              {/* Map placeholder */}
              <div className="w-full aspect-[4/3] bg-brown/10 rounded-sm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

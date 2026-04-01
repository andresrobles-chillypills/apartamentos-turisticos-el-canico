"use client";

export default function ContactoPage() {
  return (
    <>
      <div className="relative z-10 bg-cream px-6 lg:px-12 pt-32 pb-14">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-16">

        {/* Left column */}
        <div className="w-full lg:w-[60%] flex flex-col">
          <p className="font-balotro text-[12.91px] text-brown uppercase tracking-wider mb-4">
            Apartamentos Turísticos El Cañico
          </p>
          <h1 className="font-averia font-bold text-[49.22px] leading-[50px] text-brown uppercase mb-12 max-w-[700px]">
            Estamos en el casco antiguo de Moratalla, junto al castillo.
          </h1>

          {/* Form */}
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="font-grillmaster text-[16.91px] text-brown uppercase">Nombre</label>
                  <input
                    type="text"
                    placeholder="ESCRIBE AQUÍ TU NOMBRE..."
                    className="w-full font-grillmaster text-[16.91px] text-brown uppercase placeholder:text-brown/40 bg-transparent border border-brown rounded-full px-6 py-4 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="font-grillmaster text-[16.91px] text-brown uppercase">Apellidos</label>
                  <input
                    type="text"
                    placeholder="ESCRIBE AQUÍ TUS APELLIDOS..."
                    className="w-full font-grillmaster text-[16.91px] text-brown uppercase placeholder:text-brown/40 bg-transparent border border-brown rounded-full px-6 py-4 outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="font-grillmaster text-[16.91px] text-brown uppercase">Email</label>
                  <input
                    type="email"
                    placeholder="ESCRIBE AQUÍ TU CORREO..."
                    className="w-full font-grillmaster text-[16.91px] text-brown uppercase placeholder:text-brown/40 bg-transparent border border-brown rounded-full px-6 py-4 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="font-grillmaster text-[16.91px] text-brown uppercase">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="ESCRIBE AQUÍ TU TELÉFONO..."
                    className="w-full font-grillmaster text-[16.91px] text-brown uppercase placeholder:text-brown/40 bg-transparent border border-brown rounded-full px-6 py-4 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-grillmaster text-[16.91px] text-brown uppercase">Cuéntanos qué necesitas</label>
              <textarea
                rows={8}
                placeholder="SI QUIERES CONSULTAR DISPONIBILIDAD INDÍCANOS FECHAS Y NUMERO DE PERSONAS AQUÍ..."
                className="font-grillmaster text-[16.91px] text-brown uppercase placeholder:text-brown/40 bg-transparent border border-brown rounded-[30px] px-6 py-4 outline-none resize-none"
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" required className="w-4 h-4 accent-brown cursor-pointer" />
                <span className="font-grillmaster text-[14px] text-brown uppercase">
                  He leído y acepto la{" "}
                  <a href="/politica-de-privacidad" className="underline hover:opacity-70 transition-opacity">
                    política de privacidad
                  </a>
                </span>
              </label>
              <button type="submit" className="inline-flex items-center group">
                <span className="bg-brown group-hover:bg-brown/80 transition-colors px-8 py-3 font-grillmaster text-[16.91px] text-cream uppercase">
                  Enviar
                </span>
                <span className="w-[46px] h-[46px] bg-brown group-hover:bg-brown/80 transition-colors rounded-full flex items-center justify-center">
                  <span className="inline-block w-[10px] h-[8px]" style={{ backgroundColor: "#FBF0DA", WebkitMaskImage: "url(/icons/Capa_1.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url(/icons/Capa_1.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-[40%] flex flex-col justify-start items-end gap-4 pt-32 text-right">
          <p className="font-grillmaster text-[16.91px] text-brown text-left max-w-[500px]">
            ¿Tienes alguna duda sobre tu estancia? ¿Quieres consultar disponibilidad?<br/>Estaremos encantados de ayudarte.
          </p>

          <div className="flex flex-col gap-3 mt-12 items-end">
            {/* WhatsApp */}
            <a href="https://wa.me/34600600600" className="flex items-center justify-end gap-6 bg-[#7A7A56] px-8 py-5">
              <span className="inline-block w-[28px] h-[28px] flex-shrink-0" style={{ backgroundColor: "#FBF0DA", WebkitMaskImage: "url(/icons/Whatsapp--Streamline-Atlas.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url(/icons/Whatsapp--Streamline-Atlas.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
              <span className="font-grillmaster text-[18px] text-cream uppercase">+34 600 600 600</span>
            </a>

            {/* Email */}
            <a href="mailto:info@apartamentoselcanico.es" className="flex items-center justify-end gap-6 bg-[#99B0C6] px-8 py-5 rounded-full">
              <span className="inline-block w-[28px] h-[28px] flex-shrink-0" style={{ backgroundColor: "#FBF0DA", WebkitMaskImage: "url(/icons/Envelope-Lines--Streamline-Atlas.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url(/icons/Envelope-Lines--Streamline-Atlas.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
              <span className="font-grillmaster text-[18px] text-cream uppercase">info@apartamentoselcanico.es</span>
            </a>

            {/* Address */}
            <a href="#" className="flex items-center justify-end gap-6 bg-[#D38734] px-8 py-5">
              <span className="inline-block w-[28px] h-[28px] flex-shrink-0" style={{ backgroundColor: "#FBF0DA", WebkitMaskImage: "url(/icons/Direction-Post--Streamline-Atlas.svg)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", maskImage: "url(/icons/Direction-Post--Streamline-Atlas.svg)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
              <span className="font-grillmaster text-[18px] text-cream uppercase max-w-[350px]">Barrio de El Cañico, Casco Antiguo de Moratalla 30440 – Moratalla (Murcia)</span>
            </a>
          </div>
        </div>

      </div>
      </div>

    {/* Google Maps */}
    <div className="w-full h-[80vh]">
      <iframe
        src="https://maps.google.com/maps?q=38.190840,-1.894598&z=16&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    {/* Full width photo - parallax */}
    <div className="relative overflow-hidden" style={{ height: "90vh" }}>
      <div
        className="absolute inset-0 w-full"
        style={{
          backgroundImage: "url(/images/ChatGPT-Image-27-feb-2026-13_59_31-2.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      />
    </div>
    </>
  );
}

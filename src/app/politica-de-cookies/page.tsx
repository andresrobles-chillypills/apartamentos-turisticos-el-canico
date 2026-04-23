export default function PoliticaCookiesPage() {
  return (
    <div className="bg-cream px-6 lg:px-12 pt-32 pb-96">
      <div className="max-w-[800px] mx-auto">

        <p className="font-balotro text-[12.91px] text-brown uppercase tracking-wider mb-4">Última actualización: Enero 2026</p>
        <h1 className="font-averia font-bold text-[49.22px] leading-[50px] text-brown uppercase mb-16">
          Política de Cookies
        </h1>

        <div className="flex flex-col gap-10 font-grillmaster text-[16.91px] text-brown">

          <div>
            <h2 className="font-averia font-bold text-[24px] text-brown uppercase mb-4">1. ¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario (ordenador, móvil o tablet) cuando visita un sitio web. Su finalidad puede ser permitir el funcionamiento básico de la web, recordar preferencias o mejorar la experiencia de navegación.</p>
          </div>

          <div>
            <h2 className="font-averia font-bold text-[24px] text-brown uppercase mb-4">2. ¿Qué cookies utiliza este sitio web?</h2>
            <p>El sitio web de Casas El Cañico utiliza únicamente cookies técnicas o necesarias y cookies de terceros derivadas del uso del mapa de Google Maps integrado en la página de contacto. No utilizamos cookies de análisis, cookies de marketing ni cookies publicitarias propias.</p>
          </div>

          <div>
            <h2 className="font-averia font-bold text-[24px] text-brown uppercase mb-4">3. Cookies técnicas o necesarias</h2>
            <p className="mb-4">Son cookies imprescindibles para el correcto funcionamiento del sitio web. Permiten la navegación, el uso de opciones básicas y la seguridad del sitio. Estas cookies no requieren consentimiento y no pueden desactivarse, ya que sin ellas el sitio web no funcionaría correctamente.</p>

            <h3 className="font-averia font-bold text-[18px] text-brown uppercase mb-3">3.1 Cookies propias</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[15px]">
                <thead>
                  <tr className="border-b-2 border-brown">
                    <th className="text-left py-3 pr-4 font-bold uppercase">Cookie</th>
                    <th className="text-left py-3 pr-4 font-bold uppercase">Finalidad</th>
                    <th className="text-left py-3 font-bold uppercase">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brown/30">
                    <td className="py-3 pr-4">__Host-next-auth.csrf-token</td>
                    <td className="py-3 pr-4">Protección CSRF para la seguridad de formularios y sesiones.</td>
                    <td className="py-3">Sesión</td>
                  </tr>
                  <tr className="border-b border-brown/30">
                    <td className="py-3 pr-4">__Secure-next-auth.session-token</td>
                    <td className="py-3 pr-4">Gestión de la sesión técnica del usuario.</td>
                    <td className="py-3">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-averia font-bold text-[18px] text-brown uppercase mb-3 mt-8">3.2 Cookies de terceros (Google Maps)</h3>
            <p className="mb-4">Este sitio web incluye un mapa de Google Maps en la página de contacto. Al cargar el mapa, Google puede instalar cookies en el dispositivo del usuario para el correcto funcionamiento del servicio.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[15px]">
                <thead>
                  <tr className="border-b-2 border-brown">
                    <th className="text-left py-3 pr-4 font-bold uppercase">Cookie</th>
                    <th className="text-left py-3 pr-4 font-bold uppercase">Proveedor</th>
                    <th className="text-left py-3 pr-4 font-bold uppercase">Finalidad</th>
                    <th className="text-left py-3 font-bold uppercase">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brown/30">
                    <td className="py-3 pr-4">NID</td>
                    <td className="py-3 pr-4">Google</td>
                    <td className="py-3 pr-4">Almacena las preferencias del usuario para el mapa.</td>
                    <td className="py-3">6 meses</td>
                  </tr>
                  <tr className="border-b border-brown/30">
                    <td className="py-3 pr-4">CONSENT</td>
                    <td className="py-3 pr-4">Google</td>
                    <td className="py-3 pr-4">Almacena el estado de consentimiento del usuario.</td>
                    <td className="py-3">2 años</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">Más información sobre las cookies de Google en: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">https://policies.google.com/privacy</a></p>
          </div>

          <div>
            <h2 className="font-averia font-bold text-[24px] text-brown uppercase mb-4">4. ¿Cómo puede el usuario gestionar las cookies?</h2>
            <p>Al acceder por primera vez al sitio web, el usuario verá un banner informativo sobre el uso de cookies. El usuario puede modificar su configuración en cualquier momento a través de la configuración de su navegador.</p>
          </div>

          <div>
            <h2 className="font-averia font-bold text-[24px] text-brown uppercase mb-4">5. ¿Cómo eliminar las cookies desde el navegador?</h2>
            <p className="mb-4">El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración del navegador:</p>
            <ul className="flex flex-col gap-2 list-disc pl-6">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/help/4027947" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">Microsoft Edge</a></li>
            </ul>
            <p className="mt-4">Nota: Si el usuario bloquea las cookies técnicas necesarias, es posible que algunas funcionalidades del sitio web no funcionen correctamente.</p>
          </div>

          <div>
            <h2 className="font-averia font-bold text-[24px] text-brown uppercase mb-4">6. Actualizaciones de esta política</h2>
            <p>Casas El Cañico podrá modificar la presente Política de Cookies en función de nuevas exigencias legislativas o con la finalidad de adaptarla a las instrucciones dictadas por la Agencia Española de Protección de Datos (AEPD). Se recomienda al usuario revisar esta política de forma periódica.</p>
          </div>

          <div className="border-t border-brown/30 pt-8">
            <p><span className="font-bold">Responsable:</span> Casas El Cañico</p>
            <p><span className="font-bold">NIF:</span> </p>
            <p><span className="font-bold">Dirección:</span> </p>
            <p><span className="font-bold">Email:</span> </p>
            <p><span className="font-bold">Teléfono:</span> </p>
          </div>

        </div>
      </div>
    </div>
  );
}

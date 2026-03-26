import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Apartamentos Turísticos El Cañico | Moratalla",
  description:
    "Apartamentos turísticos en el casco antiguo de Moratalla, junto al Castillo. Alojamiento rural con encanto en la Región de Murcia.",
  icons: {
    icon: "/icons/Favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased overflow-x-hidden">
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

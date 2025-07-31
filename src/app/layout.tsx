import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Reumatología en Clínica de la Costa | Barranquilla, Colombia',
  description: 'Clínica de la Costa, líder en Reumatología en el Caribe Colombiano. Ofrecemos un portafolio integral de servicios para el diagnóstico y tratamiento de enfermedades reumatológicas y autoinmunes.',
  keywords: "reumatologia, clinica de la costa, reumatologo, barranquilla, caribe colombiano, artritis, lupus, osteoporosis, esclerosis, vasculitis, consulta reumatologia, terapias biologicas"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

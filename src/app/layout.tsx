import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

const siteConfig = {
  name: "Clínica de la Costa - Reumatología",
  url: "https://www.clinicadelacosta.com", // Reemplazar con la URL de producción final
  logo: "https://www.clinicadelacosta.com/assets/images/logo.png",
  description: "Clínica de la Costa, líder en Reumatología en el Caribe Colombiano. Ofrecemos un portafolio integral de servicios para el diagnóstico y tratamiento de enfermedades reumatológicas y autoinmunes.",
  keywords: "reumatologia, clinica de la costa, reumatologo, barranquilla, cartagena, santa marta, riohacha, caribe colombiano, artritis, lupus, osteoporosis, esclerosis, vasculitis, consulta reumatologia, terapias biologicas, capilaroscopia, síndrome de sjögren"
};

export const metadata: Metadata = {
  title: 'Reumatología en Clínica de la Costa | Barranquilla, Colombia',
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Clínica de la Costa", url: siteConfig.url }],
  creator: "Clínica de la Costa",
  publisher: "Clínica de la Costa",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    url: "/",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/medicalconect.firebasestorage.app/o/public%2FWhatsApp%20Image%202025-07-31%20at%2010.28.58%20AM.jpeg?alt=media&token=86fe5d2d-1054-4096-a5fb-b813aefc3d57', // Imagen principal para compartir
        width: 1200,
        height: 630,
        alt: "Equipo de Reumatología de la Clínica de la Costa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['https://firebasestorage.googleapis.com/v0/b/medicalconect.firebasestorage.app/o/public%2FWhatsApp%20Image%202025-07-31%20at%2010.28.58%20AM.jpeg?alt=media&token=86fe5d2d-1054-4096-a5fb-b813aefc3d57'],
    creator: "@clinicadelacosta", // Reemplazar con el usuario de Twitter si existe
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Clínica de la Costa",
  "image": siteConfig.logo,
  "@id": siteConfig.url,
  "url": siteConfig.url,
  "telephone": "+573369999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cra. 50 N.º 80-90",
    "addressLocality": "Barranquilla",
    "addressRegion": "Atlántico",
    "postalCode": "080020",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.0041,  // Coordenadas aproximadas para Barranquilla
    "longitude": -74.8071
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "medicalSpecialty": "Rheumatology",
  "description": siteConfig.description
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="https://www.clinicadelacosta.com/assets/images/logo.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

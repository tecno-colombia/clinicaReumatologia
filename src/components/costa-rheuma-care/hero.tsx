import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center bg-primary">
       <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/medicalconect.firebasestorage.app/o/public%2FWhatsApp%20Image%202025-07-31%20at%2010.28.58%20AM.jpeg?alt=media&token=86fe5d2d-1054-4096-a5fb-b813aefc3d57"
        alt="Equipo médico de reumatología en la Clínica de la Costa"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-40"
        data-ai-hint="medical team discussion"
        priority
      />
       <div className="relative z-20 container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
            <div className="mb-4">
                <span className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm border border-white/20">
                    Líderes en Reumatología del Caribe Colombiano
                </span>
            </div>
          <h1 className="text-4xl font-headline font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Portafolio de Servicios Integrales de Reumatología
          </h1>
          <p className="mt-4 font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Atención de vanguardia para enfermedades autoinmunes y del aparato locomotor, con un enfoque humano y científico.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#servicios">Conoce Nuestros Servicios</a>
            </Button>
             <Button size="lg" variant="outline" className="bg-transparent text-white border-white/80 hover:bg-white hover:text-primary">
              <a href="#contacto">Agendar Cita</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

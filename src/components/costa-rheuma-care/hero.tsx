import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-white" />
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Doctora atendiendo a una paciente"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-10"
        data-ai-hint="clinic background"
      />
       <div className="relative z-20 container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Portafolio de Servicios Integrales de Reumatología
          </h1>
          <p className="mt-4 font-body text-lg md:text-xl text-foreground/80">
            Clínica de la Costa - Región Caribe Colombiana
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href="#servicios">Conoce Nuestros Servicios</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

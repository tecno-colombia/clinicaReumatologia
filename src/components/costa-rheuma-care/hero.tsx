import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Clínica de la Costa"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-40"
        data-ai-hint="clinic interior"
      />
       <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/40 z-10"></div>
      <div className="relative z-20 container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
            Portafolio de Servicios Integrales de Reumatología
          </h1>
          <p className="mt-4 font-headline text-lg md:text-xl drop-shadow-md">
            Clínica de la Costa - Región Caribe Colombiana
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <a href="#servicios">Conoce Nuestros Servicios</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
